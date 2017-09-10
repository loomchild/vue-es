const elasticsearch = require('elasticsearch')

const INDEX = 'events'

const client = new elasticsearch.Client({
  host: 'localhost:9200'
})

client.indices.exists({index: INDEX})
  .then(exists => exists ? client.indices.delete({index: INDEX}) : false)
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
