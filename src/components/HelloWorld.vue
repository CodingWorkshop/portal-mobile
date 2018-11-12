<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ a }}+{{ b }}={{ c }}</h2>
    <p>{{ $store.state.HelloWorld.show }}</p>
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
  mounted: function() {
    const api = 'https://api.github.com/';
    this.$http.get(api).then(response => {
      console.log(response.data);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
