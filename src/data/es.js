const Promise = require('bluebird')
const elasticsearch = require('elasticsearch-browser')

const getEs = () => {
  return new elasticsearch.Client({
    host: 'localhost:9200',
    defer: function () {
      var resolve, reject
      var promise = new Promise(function () {
        resolve = arguments[0]
        reject = arguments[1]
      })
      return {
        resolve: resolve,
        reject: reject,
        promise: promise
      }
    }
  })
}

export {getEs}
