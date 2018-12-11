<template>
  <div class="all">
    <h1>優惠活動</h1>
    <div class="cell-group">
      <CellGroup>
        <cell title="站長推薦" to="/components/button" target="_blank" label="優惠辦理大廳站"
          class="cell" />
      </CellGroup>
    </div>
    <Select v-model="promotion" class="select">
      <Option v-for="(i,index) in list" :value="i.value" :key="index">
        {{i.label}}
      </Option>
    </Select>
    <div>
      <Card v-for="(i,index) in list[this.promotion].promot" :key="index" class="card">
        <div>
          <h3>優惠 {{i}}</h3>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'promotion',
  methods: {},
  data: function() {
    return {
      key: 0,
      promotion: 0,
      list: [
        {
          label: '所有優惠',
          value: 0,
          promot: [
            'a1',
            'a2',
            'a3',
            'a4',
            'b1',
            'b2',
            'b3',
            'b4',
            'b5',
            'b6',
            'b7',
            'c1',
            'd1',
            'd2',
            'd3',
            'e1',
            'e2',
            'f1',
            'g1'
          ]
        },
        {
          label: '存款優惠',
          value: 1,
          promot: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7']
        },
        {
          label: '取款優惠',
          value: 2,
          promot: ['c1']
        },
        {
          label: '電子優惠',
          value: 3,
          promot: ['d1', 'd2', 'd3']
        },
        {
          label: '年節優惠',
          value: 4,
          promot: ['e1', 'e2']
        },
        {
          label: '中秋優惠',
          value: 5,
          promot: ['f1']
        },
        {
          label: '聖誕優惠',
          value: 6,
          promot: ['g1']
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
div.all {
  text-align: left;

  h1 {
    padding: 10px 0;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }

  .cell-group {
    padding: 5px;

    .cell {
      border: 1px solid rgb(207, 207, 207);
    }
  }

  .select {
    width: 97%;
    margin: 5px;
  }

  .card {
    background-color: #ccc;
  }
}
</style>
