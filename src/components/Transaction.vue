<template>
  <div>
    <RadioGroup v-model="buttonDay" type="button">
      <Radio label="today">今日</Radio>
      <Radio label="yesterday">昨日</Radio>
      <Radio label="sevendays">7日內</Radio>
      <Radio label="thirthdays">30日內</Radio>
    </RadioGroup>
    <br><br>
    <div>
      <Checkbox :indeterminate="indeterminate" :value="checkAll"
        @click.prevent.native="handleCheckAll">全部</Checkbox>
      <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange"
        v-for="(i,index) in transactionDetail" :key="index" style="display:inline;">
        <Checkbox v-bind:label="i.value"></Checkbox>
      </CheckboxGroup>
    </div>
    <div class="content">
      <font-awesome-icon icon="exclamation-triangle" style="font-size:40px;" />
      <p>無任何資料</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Transaction',
  data() {
    return {
      buttonDay: '',
      indeterminate: false,
      checkAll: false,
      checkAllGroup: [],
      transactionDetail: [
        {
          value: '公司入款'
        },
        {
          value: '在線支付'
        },
        {
          value: '在線取款'
        },
        {
          value: '人工存提'
        },
        {
          value: '優惠活動'
        },
        {
          value: '返水'
        },
        {
          value: '時時返水'
        },
        {
          value: '其他'
        }
      ]
    };
  },
  methods: {
    handleCheckAll() {
      if (this.indeterminate) {
        this.checkAll = false;
      } else {
        this.checkAll = !this.checkAll;
      }
      this.indeterminate = false;

      if (this.checkAll) {
        this.checkAllGroup = [
          '公司入款',
          '在線支付',
          '在線取款',
          '人工存提',
          '優惠活動',
          '返水',
          '時時返水',
          '其他'
        ];
      } else {
        this.checkAllGroup = [];
      }
    },
    checkAllGroupChange(data) {
      if (data.length === 8) {
        this.indeterminate = false;
        this.checkAll = true;
      } else if (data.length > 0) {
        this.indeterminate = true;
        this.checkAll = false;
      } else {
        this.indeterminate = false;
        this.checkAll = false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
div {
  text-align: center;

  > .content {
    margin-top: 50px;
    width: 100%;
    text-align: center;
  }
}
</style>
