<template>
  <div style="height:100%">
    <h1>帳務中心</h1>
    <tabs v-model="key" size="small">
      <tab-pane v-for="(i,index) in walletDetail" :key="index" v-bind:label="i.label"
        v-bind:name="i.name">
        <v-touch tag="body" v-on:swipeleft="activeKey(index+1,i.name)" 
                v-on:swiperight="activeKey(index-1,i.name)">
          <div class="all">
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
import Deposit from '@/components/Deposit.vue';
import Withdrawal from '@/components/Withdrawal.vue';
import Discount from '@/components/Discount.vue';
import Transaction from '@/components/Transaction.vue';

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
      walletDetail: [
        {
          label: '在線存款',
          name: 'Deposit'
        },
        {
          label: '在線取款',
          name: 'Withdrawal'
        },
        {
          label: '時時返水',
          name: 'Discount'
        },
        {
          label: '交易紀錄',
          name: 'Transaction'
        }
      ]
    };
  }
};
</script>

<style lang="sass" scoped>
  div.all 
    width: 100%;
    height: 100%;
    .ivu-tabs-nav
      .ivu-tabs-tab
        &:hover 
          color: #000 !important;
  h1 
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
  

</style>
