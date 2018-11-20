<template>
  <div id="app">
      <header-title></header-title>
      <announcement></announcement>
      <slide></slide>
      <game-type></game-type>
      <subject msg="熱門蛋糕"></subject>
      <game-grid></game-grid>
      <subject msg="新進蛋糕"></subject>
      <game-grid></game-grid>
      <category title="奶油蛋糕"></category>
      <category title="草莓蛋糕"></category>
      <category title="香草蛋糕"></category>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/account">Account</router-link>
      </div>
      <router-view />
      <guide></guide>
      <multi-drawer></multi-drawer>
  </div>
</template>

<script>
import HeaderTitle from '@/components/HeaderTitle.vue';
import Announcement from '@/components/Announcement.vue';
import Slide from '@/components/Slide.vue';
import GameType from '@/components/GameType.vue';
import Subject from '@/components/Subject.vue';
import GameGrid from '@/components/GameGrid.vue';
import Category from '@/components/Category.vue';
import Guide from '@/components/Guide.vue';
import MultiDrawer from '@/components/MultiDrawer.vue';
export default {
  name: 'app',
  components: {
    HeaderTitle,
    Announcement,
    Slide,
    GameType,
    Subject,
    GameGrid,
    Category,
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
