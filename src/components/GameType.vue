<template>
    <div>
      <Row>
          <i-col :span="4" class="box1-item" v-for="(i, index) in asyncCount" :key="index">
               <font-awesome-icon v-bind:icon="i.icon" style="font-size: 40px;margin:10px auto;" /><br>
               <span>{{i.name}}</span>
          </i-col>
      </Row>
    </div>
</template>

<script>
export default {
  name: 'GameType',
  components: {},
  data: function() {
    return {
      asyncCount: [
        {
          name: '麵包',
          icon: 'birthday-cake'
        },
        {
          name: '蛋糕',
          icon: 'gamepad'
        },
        {
          name: '禮盒',
          icon: 'money-bill-alt'
        },
        {
          name: '餐盒',
          icon: 'gift'
        },
        {
          name: '點心',
          icon: 'gift'
        },
        {
          name: '茶會',
          icon: 'gift'
        }
      ]
    };
  }
};
</script>

<style scoped>
.box1-item {
  background-color: #fff;
  border-right: 1px solid #ccc;
  /* float: left; */
  text-align: center;
  color: rgba(255, 122, 11, 0.69);
}
</style>
