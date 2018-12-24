<template>
  <div class="all">
    <h2>存入帳戶</h2>
    <br>
    <Form :model="form" label-position="top">
      <FormItem label="銀行名稱">
        <i-select v-model="form.bank">
          <i-option v-for="(i,index) in withdrawalDetail" :value="i.value" :key="index">{{i.value}}</i-option>
        </i-select>
      </FormItem>
      <FormItem label="省份">
        <Input type="text" v-model="form.province" placeholder="例：江西省"/>
      </FormItem>
      <FormItem label="縣市">
        <Input type="text" v-model="form.county" placeholder="例：南昌省"/>
      </FormItem>
      <FormItem label="銀行帳號">
        <Input type="text" v-model="form.account" placeholder="例：123456789123456789"/>
      </FormItem>
      <Button type="success" long>送出</Button>
    </Form>
  </div>
</template>

<script>
export default {
  name: 'Withdrawal',
  data() {
    return {
      withdrawalDetail: [],
      form: {
        bank: '',
        province: '',
        county: '',
        account: ''
      }
    };
  },
  mounted: function() {
    this.axios
      .get('https://next.json-generator.com/api/json/get/4yQuE2tJU')
      .then(response => {
        this.withdrawalDetail = response.ReturnObject;
      });
  }
};
</script>
<style lang="less" scoped>
.all {
  padding: 0 30px 10px;
  text-align: left;
}
</style>
