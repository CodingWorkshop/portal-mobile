<template>
  <div class="all">
    <p>2018/03/21 00:00:00 ~ 現在</p>
    <Table border :columns="columns" :data="data"></Table>
    <br>
    <Button type="success" long>領取</Button>
    <br>
    <br>
    <Button type="primary" long>刷新</Button>
  </div>
</template>

<script>
export default {
  name: 'Discount',
  data() {
    return {
      columns: [],
      data: []
    };
  },
  mounted: function() {
    this.axios
      .get('https://next.json-generator.com/api/json/get/4kxeP3F18')
      .then(response => {
        console.log(response.ReturnObject);
        this.columns = response.ReturnObject[0].columns;
        this.data = response.ReturnObject[0].data;
      });
  }
};
</script>
<style lang="less" scoped>
.all {
  padding: 10px 30px;
  text-align: left;
}
</style>
