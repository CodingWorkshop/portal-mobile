<template>
  <div class="game-detail">
    <img src="https://via.placeholder.com/140x140">
    <Button type="primary" @click="$store.commit('openDrawerPage',{type:'login'})" long>登入註冊</Button>
  </div>
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

<style lang="less" scoped>
.game-detail {
  text-align: center;
}
</style>
