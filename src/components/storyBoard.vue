<template>
  <div class="board">
    <p class="heading">{{text}}</p>
    <draggable :list="stories" class="draggable-list" :options="{group:'cards'}">
      <story-card v-for="(item, index) in stories" :story="item" :key="index"></story-card>
    </draggable>
  </div>
</template>

<script>
import storyCard from './storyCard';
import draggable from 'vuedraggable';
export default {
  name: 'storyBoard',
  components: {
    'story-card': storyCard,
    draggable
  },
  props: ['stories', 'text']
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

.draggable-list {
  min-height: 175px;
  display: block;
}

</style>
