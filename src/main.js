import Vue from 'vue';
import App from './App.vue';
import routerGenerator from './router';
import store from './store/index';
import VueTouch from 'vue-touch';
import axios from 'axios';

const router = routerGenerator(store);

//自定義手勢(連續點擊兩下)
VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
});

Vue.config.productionTip = false;
Vue.use(VueTouch, {
  name: 'v-touch'
});
VueTouch.config.swipe = {
  direction: 'horizontal'
};
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
