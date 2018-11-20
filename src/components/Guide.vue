<template>
    <Row type="flex" class="tab" justify="space-around">
        <i-col :span="4">
            <font-awesome-icon class="icon" icon="gamepad" />
            <div>商品</div>
        </i-col>
        <i-col :span="4">
            <font-awesome-icon class="icon" icon="money-bill-alt" />
            <div>帳務中心</div>
        </i-col>
        <i-col :span="4">
            <font-awesome-icon class="icon" icon="phone-volume" />
            <div>在線客服</div>
        </i-col>
        <i-col :span="4">
            <font-awesome-icon class="icon" icon="gift" />
            <div>優惠活動</div>
        </i-col>
        <i-col :span="4">
            <font-awesome-icon class="icon" icon="user" />
            <div>我的</div>
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
