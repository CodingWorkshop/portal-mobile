<template>
    <div>
        <scroller lock-y scrollbar-x>
            <div class="box1">
                <div class="box1-item" v-for="(i, index) in asyncCount" :key="index">
                    <font-awesome-icon v-bind:icon="i.icon" 
                    style="font-size: 40px;margin:10px auto;" /><br>
                    <span>{{i.name}}</span>
                </div>
            </div>
        </scroller>
    </div>
</template>

<script>
import { Scroller } from 'vux';

export default {
  name: 'GameType',
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
  border-right: 1px solid #ccc;
  /* float: left; */
  text-align: center;
  color: rgba(255, 122, 11, 0.69);
}

.box1-item:first-child {
  margin-left: -75px;
}
</style>
