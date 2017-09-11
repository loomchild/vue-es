import Events from '../../../src/logic/events'
import {spy} from 'sinon'

describe('logic/Events', () => {
  let es
  let events

  beforeEach(() => {
    es = {
      index: spy(() => {})
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
  })
})
