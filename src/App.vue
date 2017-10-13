<template>
  <div id="app">
    <div class="todo board js-board">
      <h2 class="heading">To Do</h2>
      <p v-for="story in storiesOrganizer('unstarted')">{{story.name}}</p>
    </div>
    <div class="board js-board unscheduled">
      <h2 class="heading">Backlog</h2>
      <p v-for="story in storiesOrganizer('unscheduled')">{{story.name}}</p>
    </div>
    <div class="in-progress js-board board">
      <h2 class="heading">In Progress</h2>
      <p v-for="story in storiesOrganizer('started')">{{story.name}}</p>
    </div>
    <div class="ready-for-review js-board board">
      <h2 class="heading">Ready For Review</h2>
      <p v-for="story in storiesOrganizer('finished')">{{story.name}}</p>
    </div>
    <h2 class="heading">Done</h2>
    <div class="done js-board board">
      <p v-for="story in storiesOrganizer('accepted')">{{story.name}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { config } from './keys.js';
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
  created: function () {
    this.getStories();
  }
};
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
