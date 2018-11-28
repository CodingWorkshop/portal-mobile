<template>
  <div>
    <h1>老虎機</h1>
    <Button type="primary" @click="$store.commit('openDrawerPage','login')">登入註冊</Button>
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

<style lang="sass" scoped>
</style>
