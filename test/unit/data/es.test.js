import {getEs} from '../../../src/data/es'

describe('data/es', () => {
  it('should ping ElasticSearch', () => {
    return getEs().ping()
  })
})
