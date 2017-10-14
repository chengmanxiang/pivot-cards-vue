import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stories: null
  },
  mutations: {
    getData (state, stories) {
      state.stories = stories;
    }
  }
});
