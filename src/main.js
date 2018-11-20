import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store/index';
//import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

import './plugins/iview.js';
import './plugins/fortAwesome.js';

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
