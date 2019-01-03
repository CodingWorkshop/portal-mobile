<template>
  <div id="app">
    <router-view/>
    <footer-button></footer-button>
    <multi-drawer></multi-drawer>
    <Spin fix size="large" v-if="loading"></Spin>
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import AppCtrl from '@/controllers/App.ts';

@Component
export default class app extends Mixins(AppCtrl) {
  created() {}
}
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
