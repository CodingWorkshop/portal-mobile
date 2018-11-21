<template>
  <div class="home">
    <form @submit.prevent="checkForm" v-if="!$store.state.login.loginStatus">
      <p>請先登入</p>
      <p>
        <input v-model="user" placeholder="請輸入帳號" required>
      </p>
      <p>
        <input v-model="password" type="password" placeholder="請輸入密碼" required>
      </p>
      <p>
        <button type="submit"
                :disabled="$store.state.login.signing">
            {{$store.state.login.signing?'登入中...':'登入'}}
        </button>
      </p>
    </form>
    <div v-else>
      <h1>安安 {{$store.state.login.user}}</h1>
      <button @click="$store.dispatch('submitLogout')">登出</button>
      <br><br>
      <HelloWorld msg="Welcome"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data: function() {
    return {
      user: '',
      password: ''
    };
  },
  methods: {
    checkForm: function() {
      this.$store.commit('updateSigning');
      this.$store.dispatch({
        type: 'submitLogin',
        user: this.user,
        password: this.password
      });
    }
  }
};
</script>
