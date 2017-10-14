<template>
    <div :class="story.story_type" class="card">
      <a :href="story.url"><p class="name">{{story.name}}</p></a>
      <img :src="getPic(story['owned_by_id'])">
      <p class='estimate' v-if="story.estimate > 0">{{story.estimate}}</p>
      <p :class="story.current_state" class="status-badge">{{story.current_state}}</p>
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

.name {
  margin: 12px 0 5px 12px;
  padding: 5px;
  text-align: left;
}

img {
  float: left;
  border-radius: 50%;
  margin: 0px 0px 8px 12px;
}

.estimate {
  font-size: 0.75rem;
  min-width: 13px;
  float: right;
  background: #9ED1E4;
  color: #FCFCFC;
  position: absolute;
  bottom: 1px;
  right: 12px;
  border-radius: 100%;
  padding: 4px;
  text-align: center;
}

.status-badge {
  font-size: 0.75rem;
  float: right;
  color: #555;
  padding: 4px 8px 6px 8px;
  border-radius: 50vh;
  position: absolute;
  bottom: 0;
  right: 40px;
}

.accepted {
  background: #D9EFD1;
}

.started {
  background: #F3F3D4;
}

.unstarted {
  background: #F4F4F4;
}

.unscheduled {
  background: #F4F4F4;
}

.finished {
  background: #E4EFF7;
}

.rejected {
  background: #F08B89;
}

p {
  font-size: 1rem;
}

</style>


// todd gravatar url - http://www.gravatar.com/avatar/89757308cf4f81abdf9fc8bd46b3eb7e?r=g&s=30
// andrew gravatar url - http://www.gravatar.com/avatar/b15df0beef5d497cbc1532104529318f?r=g&s=30
// nobody - http://www.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?r=g&s=30
