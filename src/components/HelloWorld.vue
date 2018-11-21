<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ a }}+{{ b }}={{ c }}</h2>
  </div>
</template>

<script>
import sum from '@/domains/sum.js';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
    const a = 1;
    const b = 2;
    return {
      a: a,
      b: b,
      c: sum(a, b)
    };
  },
  computed: {},
  mounted: function() {
    const api = 'https://api.github.com/';
    this.$http.get(api).then(response => {
      console.log(response.data);
    });
  }
};
</script>
