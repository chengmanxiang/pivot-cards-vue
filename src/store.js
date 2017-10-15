import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { config } from './assets/keys.js';

const myKey = config.MY_API_KEY;
const myProjectId = config.MY_PROJECT_ID;
const instance = axios.create({
  baseURL: 'https://www.pivotaltracker.com/services/v5/projects/' + myProjectId + '/stories/',
  timeout: 2000,
  headers: { 'X-TrackerToken': myKey }
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stories: []
  },
  mutations: {
    setStories (state, stories) {
      state.stories = stories;
    }
  },
  getters: {
    todos: state => {
      return state.stories.filter(story => story['current_state'] === 'unstarted');
    },
    backlog: state => {
      return state.stories.filter(story => story['current_state'] === 'unscheduled');
    },
    inProgress: state => {
      return state.stories.filter(story => story['current_state'] === 'started');
    },
    readyForReview: state => {
      return state.stories.filter(story => story['current_state'] === 'finished');
    },
    done: state => {
      return state.stories.filter(story => story['current_state'] === 'accepted');
    }
  },
  actions: {
    loadStories ({commit}) {
      instance.get()
      .then(response => {
        commit('setStories', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }
});
