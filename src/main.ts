import Vue from 'vue';
import App from './App.vue';
import http from './http';
import store from './store/index';
import routerGenerator from './router';
import prepareTouch from './touch';

Vue.config.productionTip = false;

const router = routerGenerator(store, http);
prepareTouch();

import './plugins/iview.ts';
import './plugins/fortAwesome-regular.ts';
import './plugins/fortAwesome-solid.ts';
import { default as i18n, loadLangs } from './i18n';

new Vue({
  router,
  store,
  i18n,
  created: function() {
    loadLangs(store, http);
  },
  render: h => h(App)
}).$mount('#app');
