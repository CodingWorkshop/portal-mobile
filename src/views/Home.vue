<template>
  <div class="home">
    <button @click="$store.commit('toggleShow')">toggle state Show ( commit mutations )</button>
    <br><br>
    <button @click="$store.dispatch('toggleShow')">toggle state Show ( dispatch action )</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld
  }
};
</script>
