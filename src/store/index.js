import Vue from 'vue'
import Vuex from 'vuex'
import demo from './module/demo';
import commontags from './module/commontags';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    demo,
    commontags
  }
})
