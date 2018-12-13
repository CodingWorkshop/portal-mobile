<template>
  <div class="sort">
    <i-col span="8" v-for="(i,index) in depositDetail" :key="index" class="icon-btn">
      <a class="icon">
        <font-awesome-icon v-bind:icon="i.icon" /></a>
      <p>{{i.title}}</p>
    </i-col>
  </div>
</template>

<script>
export default {
  name: 'Deposit',
  data() {
    return {
      depositDetail: []
    };
  },
  mounted: function() {
    this.axios
      .get('https://next.json-generator.com/api/json/get/NkyoHhKy8')
      .then(response => {
        this.depositDetail = response.ReturnObject;
      });
  }
};
</script>
<style lang="less" scoped>
.sort {
  padding: 0 15px 0;
  text-align: center;

  .icon-btn {
    margin-bottom: 20px;

    .icon {
      background-color: orange;
      padding: 5px 8px;
      height: 40px;
      color: #fff;
      font-size: 40px;
    }
  }
}
</style>
