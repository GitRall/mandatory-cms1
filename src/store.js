import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    blogPosts: [],
    skipAmount: 0
  },
  getters: {
    doneBlogPosts(state){
      return state.blogPosts;
    },
    getSkipAmount(state){
      return state.skipAmount;
    },
  },
  mutations: {
    setBlogPosts(state, payload){
      payload.forEach((item) => {
        state.blogPosts.push(item);
      })
    },
    incrementSkipAmount(state){
      state.skipAmount += 10;
    }
  },
  actions: {
    setBlogPosts({ commit }, payload){
      commit('setBlogPosts', payload);
    },

    incrementSkipAmount({commit}){
      commit('incrementSkipAmount');
    }
  }
})
