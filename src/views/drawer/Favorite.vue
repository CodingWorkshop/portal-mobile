<template>
  <v-touch v-on:swiperight="$store.commit('closeDrawerPage','favorite')">
    <div>
      <h1>我的最愛</h1>
      <Button type="primary" @click="$store.commit('openDrawerPage','game-list')">到遊戲逛逛</Button>
    </div>
  </v-touch>
</template>

<script>
export default {
  name: 'DrawerFavorite',
  components: {},
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
  div
    width: 100%;
    height: 100%;
</style>
