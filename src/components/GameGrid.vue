<template>
  <div class="game-grid">
    <Carousel loop :dots="'outside'" :arrow="'never'">
      <CarouselItem class="carouse-item">
        <Row>
          <game-box
            v-for="game in gameList"
            :key="game.index"
            :name="game.name"
            :isFavorite="game.isFavorite"
            :img="game.img"
          ></game-box>
        </Row>
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
import GameBox from '@/components/GameBox.vue';
export default {
  name: 'GameGrid',
  components: {
    GameBox
  },
  data() {
    return {
      gameList: []
    };
  },
  mounted: function() {
    this.axios
      .get('https://next.json-generator.com/api/json/get/NynTtqEAr')
      .then(response => {
        console.log(response);
        this.gameList = response.ReturnObject;
      });
  }
};
</script>
<style lang="sass" scoped>
.game-grid
  position: relative;
  z-index: 0;
.carouse-item
    background: #fff
    img
        width: 120px
    .text
        padding: 2px 0 2px 10px
        float: left
    .icon
        padding: 2px 9px 2px 0
        float: right
        font-size: 18px
        color: #fd7e14
</style>
