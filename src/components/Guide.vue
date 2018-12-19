<template>
  <Row type="flex" class="tab" justify="space-around">
    <i-col :span="4">
      <Button type="text" to="/">
        <font-awesome-icon class="icon" icon="gamepad"/>
        <div>{{$t('commodity')}}</div>
      </Button>
    </i-col>
    <i-col :span="4">
      <Button type="text" to="/wallet">
        <font-awesome-icon class="icon" icon="money-bill-alt"/>
        <div>{{$t('financial')}}</div>
      </Button>
    </i-col>
    <i-col :span="4">
      <Button type="text" @click="$store.commit('openDrawerPage',{type:'login'})">
        <font-awesome-icon class="icon" icon="phone-volume"/>
        <div>{{$t('login')}}</div>
      </Button>
    </i-col>
    <i-col :span="4">
      <Button type="text" to="/promotion">
        <font-awesome-icon class="icon" icon="gift"/>
        <div>{{$t('promotion')}}</div>
      </Button>
    </i-col>
    <i-col :span="4">
      <Button type="text" to="/account">
        <font-awesome-icon class="icon" icon="user"/>
        <div>{{$t('info')}}</div>
      </Button>
    </i-col>
  </Row>
</template>
<script>
export default {
  name: 'Guide',
  components: {}
};
</script>
<style lang="less" scoped>
.tab {
  position: fixed;
  bottom: 0;
  background: #f5f7f9;
  width: 100%;

  .icon {
    font-size: 25px;
  }
}
</style>
