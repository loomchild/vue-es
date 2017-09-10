const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client({
  host: 'localhost:9200'
})

client.ping()
  .then(() => console.log('Success'))
