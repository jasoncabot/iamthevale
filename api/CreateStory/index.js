const uuid = require('uuidv4');
const cosmos = require('../lib/cosmos.js');
const Ajv = require('ajv');

module.exports = async function (context, req) {
    let errorStatus = 500
    try {
        // Get Cosmos DB container
        const stories = await cosmos.stories()

        // Logic for handling defaults
        const item = {};
        item.id = uuid.uuid();
        item.title = req.body.title.substring(0, 100);
        item.createdAt = new Date().toISOString();

        // Validate task against schema
        let ajv = new Ajv()
        const schema = require('../lib/story.json');
        let validate = ajv.compile(schema);
        let valid = validate(item);
        if (!valid) {
            errorStatus = 400;
            throw validate.errors;
        }

        // Create document in Cosmos
        const newItem = await stories.items.create(item);

        context.res = {
            headers: { 'content-type': 'application/json' },
            status: newItem.statusCode,
            body: newItem.resource
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