<template>
  <div class="search">
    <i-input placeholder="請輸入遊戲名稱" size="large">
      <font-awesome-icon icon="search" slot="prefix" class="fa-2x icon" />
    </i-input>
    <h3>熱門搜尋</h3>
    <Tag v-for="game in hotSearch" :key="game.index" color="magenta">{{game.name}}</Tag>
  </div>
</template>

<script>
export default {
  name: 'DrawerSearch',
  components: {},
  data() {
    return {
      hotSearch: []
    };
  },
  mounted: function() {
    this.axios
      .get('https://next.json-generator.com/api/json/get/EJshu2xCr')
      .then(
        response => {
          console.log(response);
          this.hotSearch = response.ReturnObject;
        },
        () => {
          console.log('fail');
        }
      );
  }
};
</script>

<style lang="less" scoped>
.search {
  .icon {
    margin-top: 5px;
  }

  h3 {
    margin: 10px 0;
  }
}
</style>
