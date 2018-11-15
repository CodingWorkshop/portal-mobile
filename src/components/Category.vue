<template>
    <div style="border-top:5px solid rgb(232, 232, 232);margin-bottom:10px;">
        <h1 style="font-size: 16px;margin:5px 10px;;text-align:left;">{{ title }}</h1>
        <scroller lock-y scrollbar-x>
            <div class="box1">
                <div class="box1-item" v-for="(i, index) in asyncCount" :key="index">
                    <img src="../assets/cake.png" style="width:70px;"><br>
                    <span>{{i.name}}</span>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>
import { Scroller } from 'vux';

export default {
  name: 'Category',
  props: ['title'],
  components: {
    Scroller
  },
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
.box1 {
  height: 100px;
  position: relative;
  width: 800px;
}

.box1-item {
  width: 120px;
  height: 100px;
  background-color: #fff;
  display: inline-block;
  text-align: center;
  color: rgba(255, 122, 11, 0.69);
}

.box1-item:first-child {
  margin-left: -75px;
}
</style>
