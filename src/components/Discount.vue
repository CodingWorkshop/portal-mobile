<template>
  <div class="all">
    <p>2018/03/21 00:00:00 ~ 現在</p>
    <Table border :columns="columns" :data="data"></Table>
    <br>
    <Button type="success" long>領取</Button>
    <br><br>
    <Button type="primary" long>刷新</Button>
  </div>
</template>

<script>
export default {
  name: 'Discount',
  data() {
    return {
      columns: [
        {
          title: '遊戲名稱',
          key: 'name'
        },
        {
          title: '流水',
          key: 'flow'
        },
        {
          title: '返水',
          key: 'discount'
        }
      ],
      data: [
        {
          name: 'John Brown',
          flow: 157.5,
          discount: 1.26
        },
        {
          name: 'Jim Green',
          flow: 122.5,
          discount: 2.05
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.all {
  padding: 10px 30px;
  text-align: left;
}
</style>
