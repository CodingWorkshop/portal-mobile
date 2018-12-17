<template>
  <div class="game-grid">
    <v-touch
      tag="body"
      v-on:swipeleft="changeSlide(index+1)"
      v-on:swiperight="changeSlide(index-1)"
    >
      <Spin v-if="!gameList.length"></Spin>
      <Carousel v-model="index" v-else :dots="'outside'" :arrow="'never'">
        <CarouselItem class="carouse-item" v-for="(list,i) in gameList" :key="i">
          <Row>
            <game-box
              v-for="(game,i) in list"
              :key="i"
              :name="game.name"
              :isFavorite="game.isFavorite"
              :img="game.img"
            ></game-box>
          </Row>
        </CarouselItem>
      </Carousel>
    </v-touch>
  </div>
</template>

<script>
import GameBox from '@/components/GameBox.vue';
export default {
  name: 'GameGrid',
  props: ['type'],
  components: {
    GameBox
  },
  data() {
    return {
      gameList: [],
      index: 0
    };
  },
  methods: {
    changeSlide: function(count) {
      this.index =
        count >= 0 && count < this.gameList.length ? count : this.index;
    }
  },
  mounted: function() {
    let url = 'NynTtqEAr';
    if (this.type === 'hot') {
      url = '4JUPPpc1L';
    }
    this.axios
      .get('https://next.json-generator.com/api/json/get/' + url)
      .then(response => {
        const data = response.ReturnObject;

        sessionStorage.setItem('GameList_' + this.type, JSON.stringify(data));
        let tempArray = [];
        let chunk_size = 6;
        for (let index = 0; index < data.length; index += chunk_size) {
          let myChunk = data.slice(index, index + chunk_size);
          tempArray.push(myChunk);
        }
        this.gameList = [].concat(tempArray);
      });
  }
};
</script>
<style lang="less" scoped>
.game-grid {
  position: relative;
  z-index: 0;
  padding: 10px 0;

  .carouse-item {
    img {
      width: 120px;
    }

    .text {
      padding: 2px 0 2px 10px;
      float: left;
    }

    .icon {
      padding: 2px 9px 2px 0;
      float: right;
      font-size: 18px;
      color: #fd7e14;
    }
  }
}
</style>
