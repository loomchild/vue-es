import Vue from 'vue'
import App from '../src/App.vue'

describe('App.vue', () => {
  let vm

  beforeEach(() => {
    const Constructor = Vue.extend(App)
    vm = new Constructor().$mount()
  })

  it('should have logo', () => {
    expect(vm.$el.querySelector('#logo')).is.not.undefined
  })

  it('should have "Send event" button', () => {
    expect(vm.$el.querySelector('#send button').textContent).to.be.equal('Send event')
  })

  it('should have "Search events" button', () => {
    expect(vm.$el.querySelector('#search button').textContent).to.be.equal('Search events')
  })
})
