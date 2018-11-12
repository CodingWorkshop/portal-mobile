import Vue from 'vue';
import Vuex from 'vuex';

import show from './modules/show';
import login from './modules/login';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    show: show,
    login: login
  }
});
