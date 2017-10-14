<template>
    <div class="card">
      <a :href="story.url">{{story.name}}</a>
      <img :src="getPic(story['owned_by_id'])">
    </div>
</template>

<script>

export default {
  name: 'storyCard',

  props: ['story'],

  methods: {
    getPic: function (id) {
      if (id === 2977522) {
        return 'http://www.gravatar.com/avatar/89757308cf4f81abdf9fc8bd46b3eb7e?r=g&s=30';
      } else if (id === 148385) {
        return 'http://www.gravatar.com/avatar/b15df0beef5d497cbc1532104529318f?r=g&s=30';
      } else return 'http://www.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?r=g&s=30';
    }
  }
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


// todd gravatar url - http://www.gravatar.com/avatar/89757308cf4f81abdf9fc8bd46b3eb7e?r=g&s=30
// andrew gravatar url - http://www.gravatar.com/avatar/b15df0beef5d497cbc1532104529318f?r=g&s=30
// nobody - http://www.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?r=g&s=30
