<template>
  <div class="board">
    <p class="heading"></p>
    <story-card v-for="(item, index) in stories" :story="item" :key="index"></story-card>
  </div>
</template>

<script>
import store from '../store';
import storyCard from './storyCard';
export default {
  name: 'storyBoard',
  store,
  components: {
    'story-card': storyCard
  },
  props: ['stories']
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
