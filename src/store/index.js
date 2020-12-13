import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'ru'
  },
  mutations: {
    langToggle(state, payload) {
      state.language = payload ? 'ru' : 'en';
      console.log(state.language);
    }
  },
  getters: {
    getLanguage(state) {
      return state.language;
    }
  },
})
