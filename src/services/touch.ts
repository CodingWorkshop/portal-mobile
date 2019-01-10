import Vue from 'vue';
const vuePluginTouch = require('vue-plugin-touch');
const VueTouch = require('vue-touch');

//自定義手勢(連續點擊兩下)
VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
});

Vue.use(VueTouch, {
  name: 'v-touch'
});

Vue.use(vuePluginTouch);

VueTouch.config.swipe = {
  direction: 'horizontal'
};
