const INDEX = 'events'

class Events {
  constructor (es) {
    this.es = es
  }

  create () {
    this.es.index({
      index: INDEX,
      type: 'default',
      body: {
        timestamp: new Date(),
        useragent: navigator.userAgent
      }
    })
  }

  search (criteria) {
    let options = {
      index: INDEX,
      sort: 'timestamp:desc'
    }
    if (criteria) {
      options.q = `useragent:${criteria}`
    }

    return this.es.search(options)
  }
}

export default Events
