import Vue from 'vue'
import App from '../src/App.vue'

describe('App.vue', () => {
  it('should have logo', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#logo')).is.not.undefined
  })

  it('should have "Send event" button', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#send button').textContent).to.be.equal('Send eventa')
  })

  it('should have "Search events" button', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#search button').textContent).to.be.equal('Search events')
  })
})
