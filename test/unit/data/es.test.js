import {getEs} from '../../../src/data/es'

describe('data/es', () => {
  it('should ping ElastiSearch', () => {
    return getEs().ping()
  })
})
