<template>
  <div id="app">
    <story-board :stories="storiesOrganizer('unstarted')"></story-board>
    <story-board :stories="storiesOrganizer('unscheduled')"></story-board>
    <story-board :stories="storiesOrganizer('started')"></story-board>
    <story-board :stories="storiesOrganizer('finished')"></story-board>
    <story-board :stories="storiesOrganizer('accepted')"></story-board>
  </div>
</template>

<script>
import axios from 'axios';
import { config } from './keys.js';
import storyBoard from './components/storyboard.vue';
let myKey = config.MY_API_KEY;
let myProjectId = config.MY_PROJECT_ID;
let instance = axios.create({
  baseURL: 'https://www.pivotaltracker.com/services/v5/projects/' + myProjectId + '/stories/',
  timeout: 2000,
  headers: { 'X-TrackerToken': myKey }
});

export default {
  name: 'MainApp',
  data () {
    return {
      stories: []
    };
  }, // data
  methods: {
    getStories: function () {
      instance.get()
        .then((response) => {
          this.stories = response.data;
          console.log(this.stories);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    storiesOrganizer: function (currentState) {
      return this.stories.filter(function (story) {
        return story['current_state'] === currentState;
      });
    }
  },
  components: {
    'story-board': storyBoard
  },
  created: function () {
    this.getStories();
  }
};
</script>

<style>
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 1rem;
}

#app {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 5px;
}
</style>
