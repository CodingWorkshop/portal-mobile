<template>
  <v-touch v-on:swiperight="$store.commit('closeDrawerPage','game-detail')">
    <div>
        <h1>老虎機</h1>
        <Button type="primary" @click="$store.commit('openDrawerPage','login')">登入註冊</Button>
    </div>
  </v-touch>
</template>

<script>
export default {
  name: 'DrawerGameDetail',
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
