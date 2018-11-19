<template>
    <div>
      <Carousel loop :dots="'outside'" :arrow="'never'">
          <CarouselItem v-for="i in 3" :key="i" style="background:#fff;">
            <Row v-for="j in 2" :key="j">
                <i-col :span="8" v-for="k in 3" :key="k">
                   <img src="../assets/game.png" style="width:120px;"><br>
                   <p>
                       <span style="padding:2px 0 2px 10px;float:left;">卡通蛋糕 {{i}}</span>
                       <span style="padding:2px 9px 2px 0;float:right;">
                           <font-awesome-icon icon="heart" style="font-size: 18px;color:#fd7e14;" />
                       </span>
                   </p>
                </i-col>
            </Row>
          </CarouselItem>
      </Carousel>
    </div>
</template>

<script>
export default {
  name: 'GameGrid',
  components: {}
};
</script>
<style>
.weui-grid:before,
.weui-grid:after {
  border: none !important;
}
</style>
