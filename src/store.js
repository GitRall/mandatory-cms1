import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    blogPosts: []
  },
  getters: {
    doneBlogPosts(state){
      return state.blogPosts;
    }
  },
  mutations: {
    setBlogPosts(state, payload){
      payload.forEach((item) => {
        state.blogPosts.push(item);
      })
    }
  },
  actions: {
    setBlogPosts({ commit }, payload){
      commit('setBlogPosts', payload);
    }
  }
})
