<template>
  <v-touch v-on:swiperight="$store.commit('closeDrawerPage','search')">
    <div>
      <h1>搜尋遊戲</h1>
    </div>
  </v-touch>
</template>

<script>
export default {
  name: 'DrawerSearch',
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
