<template>
  <Row type="flex" class="tab" justify="space-around">
    <i-col span="4">
      <Button type="text" to="/" long class="btn" @click="scrollTop()">
        <font-awesome-icon class="icon" icon="gamepad"/>
        <div>{{$t('commodity')}}</div>
      </Button>
    </i-col>
    <i-col span="4">
      <Button type="text" to="/wallet" long class="btn">
        <font-awesome-icon class="icon" icon="money-bill-alt"/>
        <div>{{$t('financial')}}</div>
      </Button>
    </i-col>
    <i-col span="4">
      <Button type="text" @click="$store.commit('openDrawerPage',{type:'login'})" long class="btn">
        <font-awesome-icon class="icon" icon="phone-volume"/>
        <div>{{$t('login')}}</div>
      </Button>
    </i-col>
    <i-col span="4">
      <Button type="text" to="/promotion" long class="btn">
        <font-awesome-icon class="icon" icon="gift"/>
        <div>{{$t('promotion')}}</div>
      </Button>
    </i-col>
    <i-col span="4">
      <Button type="text" to="/account" long class="btn">
        <font-awesome-icon class="icon" icon="user"/>
        <div>{{$t('info')}}</div>
      </Button>
    </i-col>
  </Row>
</template>
<script>
export default {
  name: 'Guide',
  components: {},
  methods: {
    scrollTop: function() {
      const element = document.documentElement;
      const animate = setInterval(frame, 2);
      function frame() {
        if (element.scrollTop === 0) {
          clearInterval(animate);
        } else {
          element.scrollTop = element.scrollTop - 10;
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
.tab {
  position: fixed;
  bottom: 0;
  background: #f5f7f9;
  width: 100%;
  .btn {
    padding: 10px 0;
    .icon {
      font-size: 25px;
    }
  }
}
</style>
