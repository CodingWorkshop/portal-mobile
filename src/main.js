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

axios.interceptors.response.use(
  function(response) {
    if (response.data.IsSuccess) {
      return response.data;
    } else {
      return Promise.reject(response.data.ErrorMessage);
    }
  },
  function(error) {
    let errorList = [
      {
        status: 404,
        msg: 'Not Found',
        callback: function() {
          alert('找不到啦');
        }
      }
    ];

    let currentError = errorList.filter(err => {
      return err.status === error.response.status;
    })[0];
    currentError.callback();
    return Promise.reject(currentError.msg);
  }
);
