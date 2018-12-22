import Vue from 'vue';
import App from './App.vue';
import routerGenerator from './router';
import store from './store/index';
import prepareTouch from './touch';
import axios from 'axios';

const router = routerGenerator(store);
prepareTouch();

import './plugins/iview.js';
import './plugins/fortAwesome-regular.js';
import './plugins/fortAwesome-solid.js';
import i18n from './i18n';

function loadLangs() {
  axios.get('https://next.json-generator.com/api/json/get/VJWKeCGlU').then(
    response => {
      const languages = response.ReturnObject;
      Object.keys(languages).forEach(i => {
        i18n.setLocaleMessage(i, languages[i]);
      });
    },
    err => {
      alert(err);
    }
  );
}

new Vue({
  router,
  store,
  i18n,
  created: function() {
    loadLangs();
  },
  render: h => h(App)
}).$mount('#app');
