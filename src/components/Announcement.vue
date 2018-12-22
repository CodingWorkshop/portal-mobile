<template>
  <div class="announcement">
    <font-awesome-icon icon="bullhorn" class="fa-2x icon"/>
    <div class="marquee">
      <div class="news">
        <span v-for="i in asyncCount" :key="i">即日起 任何品項的【{{i}}】通通88折起</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Announcement',
  components: {},
  mounted() {
    this.asyncCount = ['麵包'];
  },
  data() {
    return {
      asyncCount: '麵包'
    };
  }
};
</script>
<style lang="less" scoped>
@import '../style/variables.less';
.announcement {
  position: relative;
  background-color: @announcement-bg;
  .icon {
    position: absolute;
    top: 4px;
    left: 5px;
    z-index: 1;
    color: @primary-color;
  }
  .marquee {
    margin-left: 40px;
    overflow: hidden;
    position: relative;
    height: 35px;

    .news {
      width: 100%;
      position: absolute;
      overflow: hidden;
      white-space: nowrap;
      animation: marquee 7s linear infinite;
      span {
        font-size: 16px;
        line-height: 32px;
        float: left;
        width: 100%;
      }
    }
  }
}
@keyframes marquee {
  0% {
    left: 100%;
  }
  100% {
    left: -100%;
  }
}
</style>
