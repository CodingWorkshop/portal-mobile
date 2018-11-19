<template>
        <Row type="flex" justify="space-around" style="position:fixed;bottom:0;background: #f5f7f9;width:100%;">
            <i-col :span="4">
                <font-awesome-icon icon="gamepad" style="font-size: 25px;" />
                <div>商品</div>
            </i-col>
            <i-col :span="4">
                <font-awesome-icon icon="money-bill-alt" style="font-size: 25px;" />
                <div>帳務中心</div>
            </i-col>
            <i-col :span="4">
                <font-awesome-icon icon="phone-volume" style="font-size: 25px;" />
                <div>在線客服</div>
            </i-col>
            <i-col :span="4">
                <font-awesome-icon  icon="gift" style="font-size: 25px;" />
                <div>優惠活動</div>
            </i-col>
            <i-col :span="4">
                <font-awesome-icon icon="user" style="font-size: 25px;" />
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
