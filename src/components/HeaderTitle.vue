<template>
  <Row class="row">
    <i-col class="logo" span="6">
      <img alt="Cake logo" src="../assets/cakeLogo.png">
    </i-col>
    <i-col class="icons" span="18">
      <Button type="text" @click="$store.commit('openDrawerPage',{type:'search'})">
        <font-awesome-icon class="icon" icon="search"/>
      </Button>
      <Button type="text">
        <font-awesome-icon
          class="icon"
          icon="heart"
          @click="$store.commit('openDrawerPage',{type:'favorite'})"
        />
      </Button>
    </i-col>
  </Row>
</template>

<script>
export default {
  name: 'HeaderTitle',
  components: {}
};
</script>
<style lang="less" scoped>
.row {
  background-color: #fff;
  border-bottom: 4px solid #fd7e14;

  .logo {
    text-align: left;

    img {
      width: 120px;
    }
  }

  .icons {
    text-align: right;

    .icon {
      margin: 5px;
      font-size: 26px;
      color: #fd7e14;
    }
  }
}
</style>
