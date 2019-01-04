<template lang="html">
  <section v-touch:touchstart="downFunc" v-touch:touchmove="moveFunc" v-touch:touchend="endFunc">
    <!--<h1>{{Number(slidePercent.toFixed(0))}} %</h1>-->
    <slot></slot>
  </section>
</template>

<script>
import GameBox from '@/components/common/GameBox.vue';
export default {
  name: 'SlideOptimizing',
  props: ['pageLength'],
  data: function(event) {
    return {
      currentPageIndex: 0,
      slideTouchPoint: 0,
      slidePercent: 0,
      clientWidth: 0,
      changePageCriticality: 40,
      tabsArr: ['page1', 'page2', 'page3', 'page4']
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
      var currentPersent = this.currentPageIndex * -100;

      var animateSlidePercent = currentPersent + this.slidePercent;
      var animateDelay = 150;
      this._animateSlide(animateSlidePercent, animateDelay);
    },
    endFunc: function() {
      this._slideReset();
      var animateSlidePercent = this.currentPageIndex * -100;
      var animateDelay = 500;
      this._animateSlide(animateSlidePercent, animateDelay);
    },
    _animateSlide: function(slidePercent, slideDelayXMs) {
      var pageEntity = document.getElementsByClassName('ivu-tabs-content')[0];
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
        this.currentPageIndex = this.currentPageIndex + 1;
      }
      if (isReachSwipeLeftStandard) {
        this.currentPageIndex = this.currentPageIndex - 1;
      }

      var isLessThanMinIndex = this.currentPageIndex < 0;
      var isMoreThanMaxIndex = this.currentPageIndex > this.pageLength - 1;

      if (isLessThanMinIndex) {
        this.currentPageIndex = 0;
      }
      if (isMoreThanMaxIndex) {
        this.currentPageIndex = this.pageLength - 1;
      }

      this.slidePercent = 0;
    }
  },
  mounted: function() {
    this.clientWidth = this.$el.clientWidth;
  }
};
</script>

<style lang="less" scoped>
</style>
