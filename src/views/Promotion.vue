<template>
  <div class="all">
    <h1>優惠活動</h1>
    <div class="cell-group">
      <CellGroup>
        <cell title="站長推薦" to="/components/button" target="_blank" label="優惠辦理大廳站" class="cell"/>
      </CellGroup>
    </div>
    <Select v-model="promotion" class="select">
      <Option v-for="(i,index) in list" :value="i.value" :key="index">{{i.label}}</Option>
    </Select>

    <div>
      <img v-for="(i,index) in list[this.promotion].promot" :key="index" :src="i">
    </div>
  </div>
</template>

<script>
export default {
  name: 'promotion',
  methods: {},
  data: function() {
    return {
      promotion: 0,
      list: [
        {
          label: '所有優惠',
          value: 0,
          promot: []
        }
      ]
    };
  },
  mounted: function() {
    this.axios
      .get('https://next.json-generator.com/api/json/get/41s54pKJU')
      .then(response => {
        this.list = response.ReturnObject;
      });
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

  img {
    width: 100%;
  }
}
</style>
