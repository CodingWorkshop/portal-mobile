import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import login from './modules/login';
import drawer from './modules/drawer';
import i18n from './modules/i18n';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login: login,
    drawer: drawer,
    i18n: i18n
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => localStorage.getItem(key),
        setItem: (key, value) => localStorage.setItem(key, value),
        removeItem: key => localStorage.removeItem(key)
      },
      paths: [
        'login.loginStatus',
        'login.user',
        'login.token',
        'i18n.version',
        'i18n.message'
      ]
    })
  ]
});
