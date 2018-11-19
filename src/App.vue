<template>
  <div id="app">
    <Button type="primary">Button</Button>
       <!-- <HeaderTitle/>
    <Announcement />
    <Carousel />
    <GameType />
    <Subject msg="熱門蛋糕"/>
    <GameGrid />
    <Subject msg="新進蛋糕"/>
    <GameGrid />
    <Category title="奶油蛋糕"/>
    <Category title="草莓蛋糕"/>
    <Category title="香草蛋糕"/>
    <div id="nav" style="height:100px;">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/account">Account</router-link>
    </div> -->
    <router-view />
    <!-- <Guide /> -->
  </div>
</template>

<script>
// import HeaderTitle from '@/components/HeaderTitle.vue';
// import Announcement from '@/components/Announcement.vue';
// import Carousel from '@/components/Carousel.vue';
// import GameType from '@/components/GameType.vue';
// import Subject from '@/components/Subject.vue';
// import GameGrid from '@/components/GameGrid.vue';
// import Category from '@/components/Category.vue';
// import Guide from '@/components/Guide.vue';

export default {
  name: 'app',
  components: {
    // HeaderTitle,
    // Announcement,
    // Carousel,
    // GameType,
    // Subject,
    // GameGrid,
    // Category,
    // Guide
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
