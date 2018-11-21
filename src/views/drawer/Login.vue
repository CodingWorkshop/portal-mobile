<template>
    <div>
        <h1>登入註冊</h1>
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
        </div>
    </div>
</template>

<script>
export default {
  name: 'DrawerLogin',
  components: {},
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

<style lang="sass" scoped>
</style>
