<template>
  <div>
    <h1>我的最愛</h1>
    <Button type="primary" @click="$store.commit('openDrawerPage',{type:'game-list'})">到遊戲逛逛</Button>
  </div>
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

<style lang="less" scoped>
</style>
