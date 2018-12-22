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
import { default as i18n, i18nInfo } from './i18n';

function loadLangs() {
  const locale = i18n.locale;
  const url = i18nInfo.find(l => l.locale === locale).api;

  axios.get(url).then(
    response => {
      const language = response.ReturnObject;
      i18n.setLocaleMessage(locale, language);
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
