<template>
  <div id="app">
  </div>
</template>

<script>
import axios from 'axios'
import { config } from './keys.js'
let myKey = config.MY_API_KEY
let myProjectId = config.MY_PROJECT_ID
let instance = axios.create({
  baseURL: 'https://www.pivotaltracker.com/services/v5/projects/' + myProjectId + '/stories/',
  timeout: 2000,
  headers: { 'X-TrackerToken': myKey }
})

export default {
  name: 'MainApp',
  data () {
    return {
      stories: []
    }
  }, // data
  methods: {
    getStories: function () {
      instance.get()
      .then((response) => {
        this.stories = response.data
        console.log(this.stories)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  mounted: function () {
    this.getStories()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
