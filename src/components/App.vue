<template>
  <div id="app">
    <story-board id="todo" class="todo" text="To Do" :stories="todos"></story-board>
    <story-board id="backlog" class="backlog" text="Backlog" :stories="backlog"></story-board>
    <story-board id="inProgress" class="in-progress" text="In Progress" :stories="inProgress"></story-board>
    <story-board id="readyForReview" class="ready-for-review" text="Ready For Review" :stories="readyForReview"></story-board>
    <story-board id="done" class="done" text="Done" :stories="done"></story-board>
  </div>
</template>

<script>
import axios from 'axios';
import { config } from '../assets/keys.js';
import storyBoard from './storyboard.vue';
const myKey = config.MY_API_KEY;
const myProjectId = config.MY_PROJECT_ID;
const instance = axios.create({
  baseURL: 'https://www.pivotaltracker.com/services/v5/projects/' + myProjectId + '/stories/',
  timeout: 2000,
  headers: { 'X-TrackerToken': myKey }
});

export default {
  name: 'MainApp',
  data () {
    return {
      todos: [],
      backlog: [],
      inProgress: [],
      readyForReview: [],
      done: []
    };
  },
  components: {
    'story-board': storyBoard
  },
  methods: {
    getStories () {
      instance.get()
      .then(response => {
        response.data.forEach(story => {
          switch (story['current_state']) {
            case 'unstarted':
              this.todos.push(story);
              break;
            case 'unscheduled':
              this.backlog.push(story);
              break;
            case 'started':
              this.inProgress.push(story);
              break;
            case 'finished':
              this.readyForReview.push(story);
              break;
            case 'accepted':
              this.done.push(story);
              break;
          }
        });
      })
      .catch((error) => {
        console.log(error);
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
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-column-gap: 5px;
}

.todo {
  grid-column: 1/2;
  grid-row: auto;
  border-bottom: 2px solid #666;
}

.backlog {
  grid-column: 1/2;
  grid-row: auto;
}

.in-progress {
  grid-column: 2/3;
  grid-row: 1/7;
}

.ready-for-review {
  grid-column: 3/4;
  grid-row: 1/7;
}

.done {
  grid-column: 4/5;
  grid-row: 1/7;
}

@media only screen and (max-width: 750px) {
  #app {
    grid-template-columns: 1fr;
  }

  .in-progress {
    grid-column: 1/2;
    grid-row: auto;
  }

  .ready-for-review {
    grid-column: 1/2;
    grid-row: auto;
  }

  .done {
    grid-column: 1/2;
    grid-row: auto;
  }
}
</style>
