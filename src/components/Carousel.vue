<template>
    <div>
        <swiper :list="demo1_list" auto style="margin:0 auto;" height="180px" 
        dots-class="custom-bottom" dots-position="center"></swiper>
    </div>
</template>

<script>
import { Swiper } from 'vux';

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
  name: 'Carousel',
  components: {
    Swiper
  },
  data() {
    return {
      demo1_list: demoList
    };
  }
};
</script>
