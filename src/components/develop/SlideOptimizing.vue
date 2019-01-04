<template lang="html">
  <section class="SlideOptimizing" v-touch:touchstart="downFunc" v-touch:touchmove="moveFunc" v-touch:touchend="endFunc">
    <h1>SlideOptimizing</h1>
    <tabs v-bind:value="tabsArr[currentPageIndex]">
        <TabPane label="page1" name="page1" style="background-color: #1064d1; color:#ffffff; height:600px;">
          <h1>1</h1>
        </TabPane>
        <TabPane label="page2" name="page2" style="background-color: #598fd6; color:#ffffff;">
          <h1>2</h1>
        </TabPane>
        <TabPane label="page3" name="page3" style="background-color: #e8485d; color:#ffffff;">
          <h1>3</h1>
        </TabPane>
        <TabPane label="page4" name="page4" style="background-color: #EF7F8D; color:#ffffff;">
          <h1>4</h1>
        </TabPane>
    </tabs>
  </section>
</template>

<script>
export default {
  name: 'SlideOptimizing',
  props: [],
  data: function(event) {
    return {
      currentPageIndex: 0,
      pageIndexLength: 3,
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
      var isMoreThanMaxIndex = this.currentPageIndex > this.pageIndexLength;

      if (isLessThanMinIndex) {
        this.currentPageIndex = 0;
      }
      if (isMoreThanMaxIndex) {
        this.currentPageIndex = this.pageIndexLength;
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
.SlideOptimizing {
  h1 {
    padding: 10px 0;
  }
}
</style>
