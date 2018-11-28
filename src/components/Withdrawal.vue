<template>
  <div class="all">
    <h5>存入帳戶</h5>
    <br>
    <Form :model="form" label-position="top">
      <FormItem label="銀行名稱">
        <i-select v-model="form.bank">
          <i-option v-for="(i,index) in withdrawalDetail" :value="i.value" :key="index">
            {{i.value}}</i-option>
        </i-select>
      </FormItem>
      <FormItem label="省份">
        <Input type="text" v-model="form.province" placeholder="例：江西省" />
      </FormItem>
      <FormItem label="縣市">
        <Input type="text" v-model="form.county" placeholder="例：南昌省" />
      </FormItem>
      <FormItem label="銀行帳號">
        <Input type="text" v-model="form.account" placeholder="例：123456789123456789" />
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
      withdrawalDetail: [
        {
          value: '公司入款'
        },
        {
          value: '銀聯快捷'
        },
        {
          value: '銀聯掃碼'
        },
        {
          value: 'WAP微信支付'
        },
        {
          value: 'WAP支付寶支付'
        },
        {
          value: 'WAP 京東支付'
        },
        {
          value: 'WAP QQ支付'
        },
        {
          value: '點卡支付'
        },
        {
          value: '站長快速支付'
        }
      ],
      form: {
        bank: '',
        province: '',
        county: '',
        account: ''
      }
    };
  }
};
</script>
<style lang="sass" scoped>
  div.all 
    padding: 0 30px 10px;
</style>
