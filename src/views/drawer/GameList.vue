<template>
  <v-touch v-on:swiperight="$store.commit('closeDrawerPage','game-list')">
    <div>
      <h1>遊戲列表</h1>
      <Button type="primary" @click="$store.commit('openDrawerPage','game-detail')">老虎機</Button>
    </div>
  </v-touch>
</template>

<script>
export default {
  name: 'DrawerGameList',
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
