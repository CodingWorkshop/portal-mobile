<template>
  <i-col :span="8">
    <div>
      <img class="game-img" :src="img">
      <Row :type="'flex'" :justify="'space-around'" class="text-area">
        <i-col :span="6" class="text">{{name}}</i-col>
        <i-col :span="6" class="icon">
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
<style lang="scss" scoped>
.game-img {
  width: 100px;
  height: 100px;
}
.text-area {
  font-size: 1rem;
  .text {
    text-align: left;
  }
  .icon {
    text-align: right;
  }
}
</style>
