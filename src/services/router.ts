import Vue from 'vue';
import Router from 'vue-router';
import { Store } from 'vuex';
import { AxiosInstance } from 'axios';

import Home from '@/views/Home.vue';
import Account from '@/views/Account.vue';
import NotFound from '@/views/NotFound.vue';
import SlideOptimizing from '../components/develop/SlideOptimizing.vue';

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
      /**
       * 於路由上進行程式碼拆分
       * 將會針對該路由產生特殊的模塊
       * 只有訪問該路由時才會載入模塊
       */
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
      path: '/slide',
      name: 'SlideOptimizing',
      component: SlideOptimizing
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
});

export default (store: Store<any>) => {
  router.beforeEach(function(to, from, next) {
    const requiredLogin = to.meta.requiredLogin || false;
    const loginStatus = requiredLogin && !store.state.login.loginStatus;
    if (!loginStatus) {
      next();
      return;
    }

    store.commit('openDrawerPage', {
      type: 'login'
    });
    store.commit('recordDestinationPage', to.path);
  });

  return router;
};
