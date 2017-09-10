const elasticsearch = require('elasticsearch-browser')

const getEs = () => {
  return new elasticsearch.Client({
    host: 'localhost:9200'
  })
}

export {getEs}
