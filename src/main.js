import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

import './plugins/iview.js';

//FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faBullhorn } from '@fortawesome/free-solid-svg-icons';
import { faBirthdayCake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faGamepad);
library.add(faMoneyBillAlt);
library.add(faPhoneVolume);
library.add(faGift);
library.add(faUser);
library.add(faSearch);
library.add(faHeart);
library.add(faBullhorn);
library.add(faBirthdayCake);
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

router.beforeEach(function(to, from, next) {
  let requiredLogin = to.meta.requiredLogin || false;
  if (requiredLogin && !store.state.login.loginStatus) {
    next('notfound');
  } else {
    next();
  }
});
