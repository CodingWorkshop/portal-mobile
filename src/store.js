import Vue from 'vue';
import Vuex from 'vuex';

import HelloWorld_store from '../src/components/HelloWorld_store';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    HelloWorld: HelloWorld_store
  },
  state: {},
  mutations: {},
  actions: {}
});
