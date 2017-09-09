<template>

  <div id="app">

    <img id="logo" src="./assets/logo.png">

    <div id="send">
      <button v-on:click="send">Send event</button>
    </div>

    <div id="search">
      <input v-model="criteria" placeholder="Enter your search criteria...">
      <button v-on:click="search">Search events</button>
    </div>

  </div>

</template>

<script>
export default {

  name: 'app',

  data: {
    criteria: ''
  },

  methods: {

    send () {
      console.log('AAA')
    },

    search () {
      console.log('BBB')
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
</style>
