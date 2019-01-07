<template lang="html">
  <section v-touch:touchstart="downFunc" v-touch:touchmove="moveFunc" v-touch:touchend="endFunc">
    <slot></slot>
    <!--<h1>slide-component {{pageIndex}}</h1>-->
  </section>
</template>

<script>
import GameBox from '@/components/common/GameBox.vue';
export default {
  name: 'SlideOptimizing',
  props: ['pageList', 'pageIndex', 'activeKey', 'setActiveKey'],
  data: function(event) {
    return {
      slideTouchPoint: 0,
      slidePercent: 0,
      clientWidth: 0,
      changePageCriticality: 20,
      pageLength: 0
    };
  },
  methods: {
    downFunc: function(event) {
      this.slideTouchPoint = event.touches[0].clientX;
    },
    moveFunc: function(event) {
      var currentX = event.touches[0].clientX;
      var slideVariable = currentX - this.slideTouchPoint;

      this.slidePercent = (slideVariable / this.clientWidth) * 100;
      var currentPersent = this.pageIndex * -100;

      var animateSlidePercent = currentPersent + this.slidePercent;
      var animateDelay = 50;
      this._animateSlide(animateSlidePercent, animateDelay);
    },
    endFunc: function() {
      this._slideReset();
      var animateSlidePercent = this.pageIndex * -100;
      var animateDelay = 500;
      this._animateSlide(animateSlidePercent, animateDelay);
    },
    _animateSlide: function(slidePercent, slideDelayXMs) {
      var pageEntity = document.getElementsByClassName(
        'ivu-tabs-content ivu-tabs-content-animated'
      )[0];
      window.requestAnimationFrame(() => {
        pageEntity.style.transition = `${slideDelayXMs}ms`;
        pageEntity.style.transform = `translate3d(${slidePercent}%,0,0)`;
      });
    },
    _slideReset: function() {
      const slidePercent = this.slidePercent;
      const changePageCriticality = this.changePageCriticality;
      var isReachSwipeRightStandard = slidePercent < -changePageCriticality;
      var isReachSwipeLeftStandard = slidePercent > changePageCriticality;

      if (isReachSwipeRightStandard) {
        this.pageIndex = this.pageIndex + 1;
      }
      if (isReachSwipeLeftStandard) {
        this.pageIndex = this.pageIndex - 1;
      }

      var isLessThanMinIndex = this.pageIndex < 0;
      var isMoreThanMaxIndex = this.pageIndex > this.pageLength - 1;
      if (isLessThanMinIndex) {
        this.pageIndex = 0;
      }
      if (isMoreThanMaxIndex) {
        this.pageIndex = this.pageLength - 1;
      }

      this.slidePercent = 0;
      this.setActiveKey(this.pageList[this.pageIndex]);
    }
  },
  mounted: function() {
    this.clientWidth = this.$el.clientWidth;
    this.pageLength = this.pageList.length;
  }
};
</script>

<style lang="less" scoped>
</style>
