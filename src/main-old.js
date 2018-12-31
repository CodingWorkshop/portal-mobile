import Vue from 'vue';
import App from './App.vue';
import httpGenerator from './http';
import store from './store/index';
import routerGenerator from './router';
import prepareTouch from './touch';

const http = httpGenerator();
const router = routerGenerator(store, http);
prepareTouch();

import './plugins/iview.js';
import './plugins/fortAwesome-regular.js';
import './plugins/fortAwesome-solid.js';
import {
  // eslint-disable-next-line
  default as i18n,
  loadLangs
} from './i18n';

new Vue({
  router,
  store,
  i18n,
  // eslint-disable-next-line
  created: function () {
    loadLangs(store, http);
  },
  render: h => h(App)
}).$mount('#app');