<template>
  <div style="height:100%">
    <h1>帳務中心</h1>
    <slide-optimizing
      :pageList="walletDetail"
      :pageIndex="pageIndex"
      :activeKey="activeKey"
      :setActiveKey="setActiveKey"
    >
      <tabs size="small" v-model="activeKey" @on-click="setActiveKey($event)">
        <tab-pane
          v-for="(i,index) in walletDetail"
          :key="index"
          v-bind:label="i.label"
          v-bind:name="i.name"
        >
          <div>
            <keep-alive>
              <component :is="i.name"></component>
            </keep-alive>
          </div>
        </tab-pane>
      </tabs>
    </slide-optimizing>
  </div>
</template>

<script>
import Deposit from '@/components/wallet/Deposit.vue';
import Withdrawal from '@/components/wallet/Withdrawal.vue';
import Discount from '@/components/wallet/Discount.vue';
import Transaction from '@/components/wallet/Transaction.vue';
import SlideOptimizing from '@/components/develop/SlideOptimizing.vue';
export default {
  name: 'wallet',
  components: {
    Deposit,
    Withdrawal,
    Discount,
    Transaction,
    SlideOptimizing
  },
  methods: {
    /*setActiveKey: function(count, val) {
      this.activeKey = count >= 0 && count < 4 ? this.walletDetail[count].name : val;
      this.pageIndex = count;
      console.log('key: ', this.activeKey);
    },*/
    setActiveKey(tabItem) {
      var index = this.walletDetail.findIndex(
        item => item.name === (tabItem.name || tabItem)
      );
      this.pageIndex = index;
      this.activeKey = tabItem.name || tabItem;
    }
  },
  data: function() {
    return {
      pageIndex: 0,
      activeKey: '',
      walletDetail: ['Deposit', 'Withdrawal', 'Discount', 'Transaction']
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
