<template>
  <div id="app">
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

<style lang="scss">
#app {
  font-family: '微軟正黑體', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 50px;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
