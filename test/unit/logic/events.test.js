import {spy} from 'sinon'

import Events from '../../../src/logic/events'

describe('logic/Events', () => {
  let es
  let events

  beforeEach(() => {
    es = {
      index: spy(() => {}),
      search: spy(criteria => Promise.resolve())
    }

    events = new Events(es)
  })

  it('should create event', () => {
    const date = new Date()

    events.create()

    expect(es.index).to.have.callCount(1)
    expect(es.index.getCall(0).args[0].body.useragent).to.containIgnoreCase('phantom')
    expect(es.index.getCall(0).args[0].body.timestamp).withinDate(new Date(date.valueOf() - 1000), new Date(date.valueOf() + 1000))
  })

  it('should search events', () => {
    const criteria = 'test'

    events.search(criteria)

    expect(es.search).to.have.callCount(1)
    expect(es.search.getCall(0).args[0].q).to.be.equal('useragent:test')
  })
})
