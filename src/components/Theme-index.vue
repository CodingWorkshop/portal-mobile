<template>
  <div class="theme-index">
    <h1 class="ti-title" type="primary">Primary</h1>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <br><br>
    <Button type="info">Info</Button>
    <Button type="success">Success</Button>
    <Button type="warning">Warning</Button>
    <Button type="error">Error</Button>
  </div>
</template>

<script>
export default {
  name: 'theme-index',
  props: {
    msg: String
  },
  computed: {},
  mounted: function() {}
};
</script>
