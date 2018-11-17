import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import show from './modules/show';
import login from './modules/login';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    show: show,
    login: login
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => localStorage.getItem(key),
        setItem: (key, value) =>
          localStorage.setItem(key, value, {
            expires: 3,
            secure: true
          }),
        removeItem: key => localStorage.removeItem(key)
      }
    })
  ]
});
