<template>
  <div id="app" class="theme">
    <router-view />
    <guide></guide>
    <multi-drawer></multi-drawer>
  </div>
</template>

<script>
import Guide from '@/components/Guide.vue';
import MultiDrawer from '@/components/MultiDrawer.vue';
export default {
  name: 'app',
  components: {
    Guide,
    MultiDrawer
  }
};
</script>

<style lang="less">
body {
  height: 100%;
  padding: 0;
  margin: 0;

  #app {
    font-family: '微軟正黑體', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding-bottom: 50px;
    height: 100%;
  }
}

/* 竖屏 css */
// @media screen and (orientation: portrait) {
// }

/* 横屏 css */
// @media screen and (orientation: landscape) {
//   html {
//     transform: rotate(-90deg);
//     transform-origin: left top;
//     width: 100vh;
//     overflow-y: hidden;
//     position: absolute;
//     top: 100%;
//     left: 0;
//   }
// }
</style>
