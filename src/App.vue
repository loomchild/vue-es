<template>

  <div id="app">

    <img id="logo" src="./assets/logo.png">

    <div id="send">
      <button v-on:click="send">Send event</button>
    </div>

    <div id="search">
      <input v-model="criteria" placeholder="Enter your search criteria...">
      <button v-on:click="search">Search events</button>
      <table>
        <thead>
          <tr>
            <th class="timestamp">Timestamp</th>
            <th class="useragent">User Agent</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in results">
            <td>{{result.timestamp}}</td>
            <td>{{result.useragent}}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>

</template>

<script>
import {getEs} from './data/es'
import Events from './logic/events'

export default {

  name: 'app',

  beforeCreate () {
    this.events = new Events(getEs())
    this.criteria = ''
    this.results = []
  },

  data: () => ({
    criteria: this.criteria,
    results: this.results
  }),

  methods: {

    send () {
      this.events.create()
    },

    search () {
      this.events.search(this.criteria)
        .then(result => {
          this.results = result.hits.hits.map(hit => hit._source)
        })
    }

  }

}
</script>

<style>
  #app {
    margin: 20px;
    padding: 1px;
  }

  #logo {
    display: block;
    float: left;
    margin-right: 30px;
  }

  #send, #search {
    margin: 20px;
  }

  #search input {
    margin-right: 10px;
  }

  #search table {
    margin-top: 20px;
    width: 80%;
    text-align: left;
    border-spacing: 10px;
    font-family: mono;
    font-size: 14px;
  }

  #search table .timestamp {
    width: 10%;
  }
</style>
