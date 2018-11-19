import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

// //主導覽列
// import { Tabbar } from 'vux/src/components/tabbar/tabbar.vue';
// import { TabbarItem } from 'vux/src/components/tabbar/tabbar-item.vue';
// Vue.component('tabbar', Tabbar);
// Vue.component('tabbar-item', TabbarItem);

// //最新消息-跑馬燈
// import { Marquee } from 'vux/src/components/marquee/marquee.vue';
// import { MarqueeItem } from 'vux/src/components/marquee/marquee-item.vue';
// Vue.component('marquee', Marquee);
// Vue.component('marquee-item', MarqueeItem);

// //輪播
// import { Swiper } from 'vux/src/components/swiper/swiper.vue';
// import { SwiperItem } from 'vux/src/components/swiper/swiper-item.vue';
// Vue.component('swiper', Swiper);
// Vue.component('swiper-item', SwiperItem);

// //置頂?
// import { Sticky } from 'vux/src/components/sticky/index.vue';
// Vue.component('sticky', Sticky);

// //icon
// import { Icon } from 'vux/src/components/icon/index.vue';
// Vue.component('icon', Icon);

// //scroller
// import { Scroller } from 'vux/src/components/scroller/index.vue';
// Vue.component('scroller', Scroller);

// //grid
// import { Grid } from 'vux/src/components/grid/grid.vue';
// import { GridItem } from 'vux/src/components/grid/grid-item.vue';
// Vue.component('grid', Grid);
// Vue.component('grid-item', GridItem);

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
import './plugins/iview.js';
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
