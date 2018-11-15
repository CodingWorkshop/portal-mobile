<template>
    <tabbar style="position: fixed;">
        <tabbar-item selected>
            <font-awesome-icon slot="icon" icon="gamepad" style="font-size: 25px;" />
            <span slot="label">商品</span>
        </tabbar-item>
        <tabbar-item>
            <font-awesome-icon slot="icon" icon="money-bill-alt" style="font-size: 25px;" />
            <span slot="label">帳務中心</span>
        </tabbar-item>
        <tabbar-item>
            <font-awesome-icon slot="icon" icon="phone-volume" style="font-size: 25px;" />
            <span slot="label">在線客服</span>
        </tabbar-item>
        <tabbar-item>
            <font-awesome-icon slot="icon" icon="gift" style="font-size: 25px;" />
            <span slot="label">優惠活動</span>
        </tabbar-item>
        <tabbar-item link="Home.vue">
            <font-awesome-icon slot="icon" icon="user" style="font-size: 16px;" />
            <span slot="label">我的</span>
        </tabbar-item>
    </tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux';

export default {
  name: 'Guide',
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>
