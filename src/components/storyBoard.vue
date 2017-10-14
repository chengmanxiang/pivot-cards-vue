<template>
  <div class="board">
    <p class="heading" v-text="getHeading(stories)"></p>
    <story-card v-for="(item, i) in stories"
    :story="item"
    :key="i"
    />
  </div>
</template>

<script>
import storyCard from './storyCard.vue';
export default {
  name: 'storyBoard',
  props: ['stories'],
  components: {
    'story-card': storyCard
  },
  methods: {
    getHeading: function (state) {
      if (state[0]['current_state'] === 'unstarted') return 'To Do';
      if (state[0]['current_state'] === 'unscheduled') return 'Backlog';
      if (state[0]['current_state'] === 'started') return 'In Progress';
      if (state[0]['current_state'] === 'finished') return 'Ready For Review';
      if (state[0]['current_state'] === 'accepted') return 'Done';
    }
  }
};
</script>

<style>
.board {
  background-color: #f0f0f0;
  padding: 5px;
}

.heading {
  margin-top: 0;
  padding: 10px 10px;
  font-family: "Nunito", sans-serif;
  letter-spacing: 0.0525em;
  font-weight: bolder;
  font-size: 1rem;
  text-shadow: 1px 1px 1px #4a4a4a;
  text-align: center;
  background-image: linear-gradient(#82a8bf, #669bbc);
  color: white;
}

</style>
