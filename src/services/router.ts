import Vue from 'vue';
import Router from 'vue-router';
import { Store } from 'vuex';
import { AxiosInstance } from 'axios';

import Home from '@/views/Home.vue';
import Account from '@/views/Account.vue';
import NotFound from '@/views/NotFound.vue';

export default (store: Store<any>, http: AxiosInstance) => {
  Vue.use(Router);
  const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/wallet',
        name: 'wallet',
        component: () =>
          import(/* webpackChunkName: "wallet" */ '@/views/Wallet.vue')
      },
      {
        path: '/promotion',
        name: 'promotion',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "promotion" */ '@/views/Promotion.vue')
      },
      {
        path: '/account',
        name: 'account',
        component: Account,
        meta: {
          //requiredLogin: true
        }
      },
      {
        path: '/lobby',
        name: 'lobby',
        component: () =>
          import(/* webpackChunkName: "lobby" */ '@/views/Lobby.vue')
      },
      {
        path: '*',
        name: 'notfound',
        component: NotFound
      }
    ]
  });

  router.beforeEach(function(to, from, next) {
    const requiredLogin = to.meta.requiredLogin || false;
    if (requiredLogin && !store.state.login.loginStatus) {
      store.commit('openDrawerPage', {
        type: 'login'
      });
      store.commit('recordDestinationPage', to.path);
    } else {
      next();
    }
  });

  http.interceptors.response.use(
    response => {
      if (response.data.IsSuccess) {
        return response.data;
      } else {
        return Promise.reject(response.data.ErrorMessage);
      }
    },
    error => {
      const errorList = [
        {
          status: 401,
          msg: 'Unauthorized',
          callback: function() {
            alert('閒置過久，請重新登入');
            router.push('notfound');
          }
        },
        {
          status: 404,
          msg: 'Not Found',
          callback: function() {
            //alert('找不到啦');
          }
        },
        {
          status: 500,
          msg: 'Internal Server Error',
          callback: function() {
            alert('操作頻繁，請稍後嘗試');
          }
        }
      ];

      const currentError = errorList.filter(err => {
        return err.status === error.response.status;
      })[0] || {
        msg: error.response.statusText,
        callback: () => {}
      };
      currentError.callback();
      return Promise.reject(currentError.msg);
    }
  );

  return router;
};
