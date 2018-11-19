<template>
    <div>
        <swiper height="350px" dots-class="custom-bottom" dots-position="center">
            <swiper-item>
                <grid :cols="3" :show-lr-borders="false">
                    <grid-item v-for="i in 6" :key="i" style="padding: 8px 0 0;">
                        <img src="../assets/game.png" style="width:120px;"><br>
                        <p>
                            <span style="padding:2px 0 2px 10px;float:left;">卡通蛋糕 {{i}}</span>
                            <span style="padding:2px 9px 2px 0;float:right;">
                                <font-awesome-icon icon="heart" style="font-size: 18px;color:#fd7e14;" />
                            </span>
                        </p>
                    </grid-item>
                </grid>
            </swiper-item>
            <swiper-item>
                <grid :cols="3" :show-lr-borders="false">
                    <grid-item v-for="i in 6" :key="i" style="padding: 8px 0 0;">
                        <img src="../assets/game.png" style="width:120px;"><br>
                        <p>
                            <span style="padding:2px 0 2px 10px;float:left;">卡通蛋糕 {{i}}</span>
                            <span style="padding:2px 9px 2px 0;float:right;">
                                <font-awesome-icon icon="heart" style="font-size: 18px;color:#fd7e14;" />
                            </span>
                        </p>
                    </grid-item>
                </grid>
            </swiper-item>
            <swiper-item>
                <grid :cols="3" :show-lr-borders="false">
                    <grid-item v-for="i in 6" :key="i" style="padding: 8px 0 0;">
                        <img src="../assets/game.png" style="width:120px;"><br>
                        <p>
                            <span style="padding:2px 0 2px 10px;float:left;">卡通蛋糕 {{i}}</span>
                            <span style="padding:2px 9px 2px 0;float:right;">
                                <font-awesome-icon icon="heart" style="font-size: 18px;color:#fd7e14;" />
                            </span>
                        </p>
                    </grid-item>
                </grid>
            </swiper-item>
        </swiper>

    </div>
</template>

<script>
import { Swiper, SwiperItem, Grid, GridItem } from 'vux';

export default {
  name: 'GameGrid',
  components: {
    Swiper,
    SwiperItem,
    Grid,
    GridItem
  }
};
</script>
<style>
.weui-grid:before,
.weui-grid:after {
  border: none !important;
}
</style>
