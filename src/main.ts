import Vue from 'vue';
import App from './App.vue';
import http from './services/http';
import store from './store/index';
import routerGenerator from './services/router';
import './services/touch';
import './plugins/iview';
import './plugins/fortAwesome-regular';
import './plugins/fortAwesome-solid';
import { default as i18n, loadLangs } from './services/i18n';

Vue.config.productionTip = false;

const router = routerGenerator(store, http);

new Vue({
  router,
  store,
  i18n,
  created: function() {
    loadLangs(store, http);
  },
  render: h => h(App)
}).$mount('#app');
