import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loaddone:false,
    transiting:false,
  },
  mutations: {
    loaded(state){
      state.loaddone = true;
    },
    beginTransite(state){
      state.transiting = true;
    },
    DoneTransite(state){
      state.transiting = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
