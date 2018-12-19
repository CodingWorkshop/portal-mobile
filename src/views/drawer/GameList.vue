<template>
  <div>
    <Row>
      <game-box
        v-for="(game,i) in setList"
        :key="i"
        :name="game.name"
        :isFavorite="game.isFavorite"
        :img="game.img"
      ></game-box>
    </Row>
  </div>
</template>

<script>
import GameBox from '@/components/GameBox.vue';
import { mapState } from 'vuex';
export default {
  name: 'DrawerGameList',
  components: {
    GameBox
  },
  data: function() {
    return {
      list: []
    };
  },
  computed: {
    ...mapState({
      gameListCatrgory: state => state.drawer.gameListCatrgory,
      setList() {
        return JSON.parse(
          sessionStorage.getItem('GameList_' + this.gameListCatrgory)
        );
      }
    })
  }
};
</script>

<style lang="less" scoped>
</style>
