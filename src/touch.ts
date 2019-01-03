import Vue from 'vue';
const VueTouch = require('vue-touch');

export default () => {
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
};
