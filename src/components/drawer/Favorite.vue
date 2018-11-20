<template>
    <div>
        <h1>Favorite</h1>
        <Button type="primary" @click="$store.commit('openDrawerPage','game-list')">到遊戲逛逛</Button>
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

<style lang="sass" scoped>
</style>
