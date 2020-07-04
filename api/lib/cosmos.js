const CosmosClient = require('@azure/cosmos').CosmosClient;

const COSMOS_ENDPOINT = process.env.COSMOS_ENDPOINT;
const COSMOS_KEY = process.env.COSMOS_KEY;
const COSMOS_DB_NAME = 'IAmTheVale';
const COSMOS_STORIES_CONTAINER = 'stories';

// static-ish shared Cosmos connection
const client = new CosmosClient({ endpoint: COSMOS_ENDPOINT, key: COSMOS_KEY })
const database = client.database(COSMOS_DB_NAME)

module.exports = {
    // Get or create the stories container
    async stories() {
        if (!(COSMOS_ENDPOINT || COSMOS_KEY)) {
            throw new Error('Fatal error! COSMOS_ENDPOINT or COSMOS_KEY are not set')
        }
        const { container } = await database.containers.createIfNotExists({
            id: COSMOS_STORIES_CONTAINER,
            partitionKey: {
                paths: ['/id']
            }
        })
        return container
    }
}