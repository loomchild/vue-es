const INDEX = 'events'

class Events {
  constructor (es) {
    this.es = es
  }

  create () {
    this.es.create({
      index: INDEX,
      type: 'default',
      body: {
        timestamp: new Date(),
        useragent: navigator.userAgent
      }
    })
  }

  search (criteria) {
    console.log('BBB ' + criteria)
  }
}

export default Events
