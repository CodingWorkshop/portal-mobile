import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store/index';
import VueTouch from 'vue-touch';
//import './registerServiceWorker';

//自定義手勢(連續點擊兩下)
VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
});

//定義swipe全局默認值
VueTouch.config.swipe = {
  threshold: 10
};

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(VueTouch, { name: 'v-touch' });

import './plugins/iview.js';
import './plugins/fortAwesome.js';
import i18n from './i18n';

new Vue({
  router,
  store,
  i18n,
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
