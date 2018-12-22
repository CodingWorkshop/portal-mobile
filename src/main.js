import Vue from 'vue';
import App from './App.vue';
import routerGenerator from './router';
import store from './store/index';
import prepareTouch from './touch';

const router = routerGenerator(store);
prepareTouch();

import './plugins/iview.js';
import './plugins/fortAwesome-regular.js';
import './plugins/fortAwesome-solid.js';
import { default as i18n, loadLangs } from './i18n';

new Vue({
  router,
  store,
  i18n,
  created: function() {
    loadLangs();
  },
  render: h => h(App)
}).$mount('#app');
