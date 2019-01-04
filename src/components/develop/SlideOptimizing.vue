<template lang="html">
  <section class="SlideOptimizing">
    <h1>SlideOptimizing</h1>
    <tabs>
        <TabPane label="page1" name="page1" style="background-color: #1064d1; color:#ffffff; height:600px;">
          <h1>1</h1>
        </TabPane>
        <TabPane label="page2" name="page2" style="background-color: #598fd6; color:#ffffff;">
          <h1>2</h1>
        </TabPane>
        <TabPane label="page3" name="page3" style="background-color: #e8485d; color:#ffffff;">
          <h1>3</h1>
        </TabPane>
        <TabPane label="page4" name="page4" style="background-color: #EF7F8D; color:#ffffff;">
          <h1>4</h1>
        </TabPane>
    </tabs>
  </section>
</template>

<script>
export default {
  name: 'SlideOptimizing',
  props: [],
  data: function() {
    return {};
  },
  methods: {},
  mounted: function() {}
};
</script>

<style lang="less" scoped>
.SlideOptimizing {
  h1 {
    padding: 10px 0;
  }
}
</style>
