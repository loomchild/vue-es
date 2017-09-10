class Events {
  constructor (es) {
    this.es = es
  }

  create () {
    console.log('AAA')
  }

  search (criteria) {
    console.log('BBB ' + criteria)
  }
}

export default Events
