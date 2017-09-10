const elasticsearch = require('elasticsearch')

const INDEX = 'events'

const client = new elasticsearch.Client({
  host: 'localhost:9200'
})

client.indices.exists({index: INDEX})
  .then(exists => {
    if (exists) {
      console.log('Deleting existing index')
      return client.indices.delete({index: INDEX})
    }
    return false
  })
  .then(() => client.indices.create({
    index: INDEX,
    body: {
      mappings: {
        default: require('./mapping.json')
      }
    }
  }))
  .then(() => console.log('Index initialized successfully'))
  .catch(error => console.log(`Error initializing index: ${error.message}`))
