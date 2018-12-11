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
      depositDetail: [
        {
          title: '公司入款',
          icon: 'birthday-cake'
        },
        {
          title: '銀聯快捷',
          icon: 'gamepad'
        },
        {
          title: '銀聯掃碼',
          icon: 'money-bill-alt'
        },
        {
          title: 'WAP微信支付',
          icon: 'gift'
        },
        {
          title: 'WAP支付寶支付',
          icon: 'bullhorn'
        },
        {
          title: 'WAP 京東支付',
          icon: 'gift'
        },
        {
          title: 'WAP QQ支付',
          icon: 'heart'
        },
        {
          title: '點卡支付',
          icon: 'gift'
        },
        {
          title: '站長快速支付',
          icon: 'gift'
        }
      ]
    };
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
