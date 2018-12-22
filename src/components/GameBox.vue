<template>
  <i-col :span="8">
    <div>
      <img
        class="game-img"
        :src="img"
        @click="$store.commit('openDrawerPage',{type:'game-detail',name:name,gameId:name})"
      >
      <Row :type="'flex'" :justify="'space-around'" class="text-area">
        <i-col :span="12" class="text">{{name}}</i-col>
        <i-col :span="12" class="icon">
          <font-awesome-icon :icon="[isFavorite ? 'far' : 'fas' , 'heart']"/>
        </i-col>
      </Row>
    </div>
  </i-col>
</template>

<script>
export default {
  name: 'GameBox',
  props: {
    name: String,
    img: String,
    isFavorite: Boolean
  }
};
</script>
<style lang="less" scoped>
@import '../style/variables.less';
.game-img {
  max-width: 95%;
  max-height: 95%;
}

.text-area {
  font-size: 1rem;

  .text {
    text-align: left;
    padding-left: 10px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .icon {
    text-align: center;
    color: @primary-color;
  }
}
</style>
