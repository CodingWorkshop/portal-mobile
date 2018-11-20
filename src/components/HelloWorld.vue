<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ a }}+{{ b }}={{ c }}</h2>
    <p><b>reserve state Show (getter)</b> : {{ $store.getters.reverseShow }}</p>
    <p><b>mapState</b> : {{show}}、{{sameShow}}</p>
  </div>
</template>

<script>
import sum from '@/domains/sum.js';
import { mapState } from 'vuex';
// mapState、mapGetters 一般写在 computed 中 , mapActions 一般写在 methods 中。
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
  computed: {
    ...mapState({
      show: state => state.show.show
    }),
    // 此寫法等同於上面
    sameShow() {
      return this.$store.state.show.show;
    }
  },
  mounted: function() {
    const api = 'https://api.github.com/';
    this.$http.get(api).then(response => {
      console.log(response.data);
    });
  }
};
</script>
