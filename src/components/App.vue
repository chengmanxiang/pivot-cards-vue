<template>
  <div id="app">
    <story-board class="todo" text="To Do" :stories="todos"></story-board>
    <story-board class="backlog" text="Backlog" :stories="backlog"></story-board>
    <story-board class="in-progress" text="In Progress" :stories="inProgress"></story-board>
    <story-board class="ready-for-review" text="Ready For Review" :stories="readyForReview"></story-board>
    <story-board class="done" text="Done" :stories="done"></story-board>
  </div>
</template>

<script>
import storyBoard from './storyboard.vue';
import store from '../store';
export default {
  name: 'MainApp',
  store,
  components: {
    'story-board': storyBoard
  },
  created: function () {
    this.$store.dispatch('loadStories');
  },
  computed: {
    todos () {
      return store.getters.todos;
    },
    backlog () {
      return store.getters.backlog;
    },
    inProgress () {
      return store.getters.inProgress;
    },
    readyForReview () {
      return store.getters.readyForReview;
    },
    done () {
      return store.getters.done;
    }
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
