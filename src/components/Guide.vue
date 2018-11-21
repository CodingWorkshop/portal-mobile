<template>
    <Row type="flex" class="tab" justify="space-around">
        <i-col :span="4">
          <Button type="text" to="/">
            <font-awesome-icon class="icon" icon="gamepad" />
            <div>商品</div>
          </Button>
        </i-col>
        <i-col :span="4">
          <Button type="text" to="/">
            <font-awesome-icon class="icon" icon="money-bill-alt" />
            <div>帳務中心</div>
          </Button>
        </i-col>
        <i-col :span="4">
          <Button type="text" @click="$store.commit('openDrawerPage','login')">
            <font-awesome-icon class="icon" icon="phone-volume" />
            <div>登入</div>
          </Button>
        </i-col>
        <i-col :span="4">
          <Button type="text" to="/promotion">
            <font-awesome-icon class="icon" icon="gift" />
            <div>優惠活動</div>
          </Button>
        </i-col>
        <i-col :span="4">
          <Button type="text" to="/account">
            <font-awesome-icon class="icon" icon="user" />
            <div>我的</div>
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
<style lang="sass" scoped>
.tab
    position: fixed
    bottom: 0
    background: #f5f7f9
    width: 100%
    icon
        font-size: 25px
</style>
