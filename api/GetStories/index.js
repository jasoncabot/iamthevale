const cosmos = require('../lib/cosmos.js')

module.exports = async function (context, req) {
    let errorStatus = 500

    try {
        let query;
        if (!req.query.kind || req.query.kind === 'latest') {
            query = 'SELECT s.id, s.title, s.createdAt FROM stories s ORDER BY s.createdAt DESC OFFSET 0 LIMIT 100';
        } else {
            query = 'SELECT s.title FROM stories s OFFSET 0 LIMIT 5';
        }

        // Get Cosmos DB container
        const tasks = await cosmos.stories()

        // Built & execute the query
        const querySpec = { query };
        const { resources: items } = await tasks.items
            .query(querySpec)
            .fetchAll()

        context.res = {
            headers: { 'content-type': 'application/json' },
            status: 200,
            body: items
        }
    } catch (err) {
        let message = typeof err != 'string' ? (err.message ? err.message : err) : err
        context.res = {
            headers: { 'content-type': 'application/json' },
            status: errorStatus,
            body: { message, error: true }
        }
    }
}