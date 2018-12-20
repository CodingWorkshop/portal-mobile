<template>
  <div>
    <p>
      <span class="text">{{ msg }}</span>
      <span
        class="more"
        @click="$store.commit('openDrawerPage',{type:'game-list',name:msg,category:type});"
      >
        更多
        >
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Subject',
  props: ['msg', 'type']
};
</script>
<style lang="less" scoped>
@import '../style/variables.less';
div {
  width: 100%;
  background-color: @primary-color;
  height: 30px;

  p {
    color: #fff;

    .text {
      padding: 2px 0 2px 6px;
      float: left;
    }

    .more {
      padding: 2px 6px 2px 0;
      float: right;
    }
  }
}
</style>
