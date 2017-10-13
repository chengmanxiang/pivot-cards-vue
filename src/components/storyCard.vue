<template>
    <div class="card">
        <p>{{story.name}}</p>
      </a>
    </div>
</template>

<script>

export default {
  name: 'storyCard',

  props: ['story']

}; // export
</script>

<style scoped>
a {
  padding: 0;
  text-decoration: none;
  color: #333;
}

a:hover {
  text-decoration: underline;
  color: #669bbc;
  /* cursor: pointer; */
}

.bug {
  border-left: 4px solid #F25F5C;
}

.feature {
  border-left: 4px solid #FFE066;
}

.chore {
  border-left: 4px solid #669bbc;
}

.card {
  background: white;
  margin-bottom: 10px;
  box-shadow: 1px 1px 2px #888;
  overflow: auto;
  position: relative;
}
</style>
