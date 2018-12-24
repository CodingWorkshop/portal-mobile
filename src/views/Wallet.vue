<template>
  <div style="height:100%">
    <h1>帳務中心</h1>
    <tabs v-model="key" size="small">
      <tab-pane
        v-for="(i,index) in walletDetail"
        :key="index"
        v-bind:label="i.label"
        v-bind:name="i.name"
      >
        <v-touch
          tag="body"
          v-on:swipeleft="activeKey(index+1,i.name)"
          v-on:swiperight="activeKey(index-1,i.name)"
        >
          <div>
            <keep-alive>
              <component :is="i.name"></component>
            </keep-alive>
          </div>
        </v-touch>
      </tab-pane>
    </tabs>
  </div>
</template>

<script>
import Deposit from '@/components/wallet/Deposit.vue';
import Withdrawal from '@/components/wallet/Withdrawal.vue';
import Discount from '@/components/wallet/Discount.vue';
import Transaction from '@/components/wallet/Transaction.vue';

export default {
  name: 'wallet',
  components: {
    Deposit,
    Withdrawal,
    Discount,
    Transaction
  },
  methods: {
    activeKey: function(count, val) {
      this.key = count >= 0 && count < 4 ? this.walletDetail[count].name : val;
    }
  },
  data: function() {
    return {
      key: '',
      walletDetail: []
    };
  },
  mounted: function() {
    this.axios
      .get('https://next.json-generator.com/api/json/get/VkJf2sFJL')
      .then(response => {
        this.walletDetail = response.ReturnObject;
      });
  }
};
</script>

<style lang="less" scoped>
h1 {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}
</style>
