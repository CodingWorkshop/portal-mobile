<template>
    <div>
      <Carousel loop :dots="'outside'" :arrow="'never'">
          <CarouselItem v-for="i in 3" :key="i" class="carouse-item">
            <Row v-for="j in 2" :key="j">
                <i-col :span="8" v-for="k in 3" :key="k">
                   <img src="../assets/game.png"><br>
                   <p>
                       <span class="text">卡通蛋糕 {{i}}</span>
                       <span class="icon">
                           <font-awesome-icon icon="heart" />
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
<style lang="sass" scoped>
.carouse-item
    background: #fff
    img
        width: 120px
    .text
        padding: 2px 0 2px 10px
        float: left
    .icon
        padding: 2px 9px 2px 0
        float: right
        font-size: 18px
        color: #fd7e14
</style>
