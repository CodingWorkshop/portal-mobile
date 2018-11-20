<template>
    <div>
      <Carousel loop autoplay :height="200">
          <CarouselItem v-for="i in demo1_list" :key="i.img">
            <Row>
                <i-col span="24">
                   <img v-bind:src="i.img" class="demo-carousel"/>
                </i-col>
            </Row>
          </CarouselItem>
      </Carousel>
    </div>
</template>

<script>
const imgList = [
  'https://goo.gl/YTjG8H',
  'https://goo.gl/CdqRQ2',
  'https://goo.gl/PC8Xto'
];

const demoList = imgList.map(one => ({
  url: 'javascript:',
  img: one
}));

export default {
  name: 'Slide',
  components: {},
  data() {
    return {
      demo1_list: demoList
    };
  }
};
</script>
<style lang="sass" scoped>
img
  width: 100%;
</style>
