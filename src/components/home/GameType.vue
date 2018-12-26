<template>
  <div>
    <Affix :offset-top="0">
      <div class="scroll">
        <div class="row" :style="{width:rowWidth+'px'}">
          <div
            :span="5"
            class="item"
            :class="{'un-select':gameType?gameType!=i.type:false}"
            v-for="(i, index) in items"
            :key="index"
            :style="{width:itemWidth+'px'}"
          >
            <a :href="'lobby?gameType='+i.type">
              <font-awesome-icon class="icon fa-3x fa-fw" v-bind:icon="i.icon"/>
              <br>
              <span>{{i.name}}</span>
            </a>
          </div>
        </div>
      </div>
    </Affix>
  </div>
</template>

<script>
export default {
  name: 'GameType',
  components: {},
  data: function() {
    return {
      items: [],
      rowWidth: null,
      itemWidth: null,
      gameType: ''
    };
  },
  mounted: function() {
    this.gameType = this.$route.query.gameType;
    this.itemWidth = screen.width / 4;
    this.axios
      .get('https://next.json-generator.com/api/json/get/Ek2ac14xU')
      .then(response => {
        this.items = response.ReturnObject;
        this.rowWidth = this.itemWidth * this.items.length;
      });
  }
};
</script>

<style lang="less" scoped>
@import '../../style/mixins.less';
.scroll {
  overflow: auto;
  text-align: left;
  .row {
    height: 80px;
    .item {
      position: relative;
      display: inline-block;
      text-align: center;
      color: @primary-color;
      background: #fff;

      &:not(:last-child):after {
        content: '';
        position: absolute;
        width: 1px;
        height: 50%;
        background: #d4d4d4;
        top: 30%;
        right: 0;
        -webkit-box-shadow: 0px 0px 5px 0px #d4d4d4;
        box-shadow: 0px 0px 5px 0px #d4d4d4;
      }
      &.un-select {
        background: -moz-linear-gradient(top, #fff 0, #cacacc 100%);
        background: -webkit-linear-gradient(top, #fff 0, #cacacc 100%);
        background: linear-gradient(to bottom, #fff 0, #cacacc 100%);
      }
      .icon {
        margin: 10px auto;
      }
    }
  }
}
</style>
