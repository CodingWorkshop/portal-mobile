<template>
  <div class="outer">
    <h1>{{ title }}</h1>
    <div class="scroll">
      <div class="box">
        <div class="box-item" v-for="(i, index) in asyncCount" :key="index">
          <img src="https://via.placeholder.com/70x70">
          <br>
          <span>{{i.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['title'],
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

<style lang="less" scoped>
@import '../../style/mixins.less';
.outer {
  border-top: 5px solid #e8e8e8;
  margin-bottom: 10px;

  h1 {
    font-size: 16px;
    margin: 5px 10px;
    text-align: left;
    color: @primary-color;
  }

  .scroll {
    overflow: auto;

    .box {
      height: 100px;
      position: relative;
      width: 800px;

      .box-item {
        width: 120px;
        height: 100px;
        background-color: #fff;
        display: inline-block;
        text-align: center;

        &:first-child {
          margin-left: -75px;
        }

        img {
          width: 70px;
        }
      }
    }
  }
}
</style>
