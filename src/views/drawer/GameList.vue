<template>
    <div>
        <h1>遊戲列表</h1>
        <Button type="primary" @click="$store.commit('openDrawerPage','game-detail')">老虎機</Button>
    </div>
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
</style>
