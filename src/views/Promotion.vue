<template>
  <v-touch v-on:swipedown="showLoader();">
    <div>
      <font-awesome-icon class="icon" icon="spinner" spin v-if="ok" />
      <v-touch v-on:swipeleft="alertMsg('swipeleft');">Swipe left!</v-touch>
      <br>
      <br>
      <v-touch tag="a" v-on:tap="alertMsg('tap');">Tap me!</v-touch>
      <br>
      <br>
      <v-touch v-on:doubletap="copyText();" v-bind:doubletap-options="{intervall: 250}">
        <input type="text" placeholder="doubletap copy after input text" id="input">
      </v-touch>
      <br>
      <br>
    </div>
  </v-touch>
</template>

<script>
export default {
  name: 'account',
  methods: {
    alertMsg: function(msg) {
      alert(msg);
    },
    showLoader: function() {
      this.ok = true;
      setTimeout(() => {
        this.ok = false;
      }, 1000);
    },
    copyText: function() {
      let input = document.getElementById('input');
      input.select(); // 选中文本
      document.execCommand('copy'); // 执行浏览器复制命令
    }
  },
  data: function() {
    return {
      ok: false
    };
  }
};
</script>
<style lang="sass" scoped>
  div 
    width: 100%;
    height: 100%;
    margin: 20px auto;
  input
    width: 200px;
</style>
