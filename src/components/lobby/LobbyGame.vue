<template>
  <div class="lobbyGame">
    <p>{{currentCategoryName}}</p>
    <Row>
      <game-box
        v-for="(game,i) in gameList"
        :key="i"
        :name="game.name"
        :isFavorite="game.isFavorite"
        :img="game.img"
      ></game-box>
    </Row>
  </div>
</template>

<script>
import GameBox from '@/components/common/GameBox.vue';
export default {
  name: 'LobbyGame',
  props: {
    currentCategoryName: String,
    type: Number,
    currentCategoryKey: String,
    gameList: Array
  },
  components: {
    GameBox
  }
};
</script>

<style lang="less" scoped>
p {
  color: #777;
  text-align: left;
  font-size: 1.5em;
  padding: 5px;
}
</style>
