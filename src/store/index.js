import Vue from 'vue';
import Vuex from 'vuex';

import show from './modules/show';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    show: show
  }
});
