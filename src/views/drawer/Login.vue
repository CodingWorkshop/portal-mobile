<template>
  <div>
    <h1>登入註冊</h1>
    <Form @submit.native.prevent="checkForm" v-if="!$store.state.login.loginStatus">
      <FormItem>請先登入</FormItem>
      <FormItem>
        <i-input v-model="user" placeholder="請輸入帳號" required clearable></i-input>
      </FormItem>
      <FormItem>
        <Input v-model="password" type="password" placeholder="請輸入密碼" required clearable/>
      </FormItem>
      <FormItem>
        <Button
          html-type="submit"
          type="primary"
          :disabled="$store.state.login.signing"
        >{{$store.state.login.signing?'登入中...':'登入'}}</Button>
      </FormItem>
    </Form>
    <div v-else>
      <h1>安安 {{$store.state.login.user}}</h1>
      <Button type="primary" @click="$store.dispatch('submitLogout')">登出</Button>
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
      this.axios
        .post(process.env.VUE_APP_LOGIN_URL, {
          Account: this.user,
          Password: this.password
        })
        .then(
          response => {
            const token = response.ReturnObject;
            this.$store.dispatch('updateLogin', {
              user: this.user,
              token: token
            });

            const destinationPage = this.$store.state.login.destinationPage;
            if (destinationPage) {
              this.$router.push(destinationPage);
              this.$store.commit('recordDestinationPage', '');
              this.$store.commit('closeDrawerPage', 'login');
            }

            this.$store.commit('updateSigning');
          },
          () => {
            alert('帳號或密碼錯誤');
            this.$store.commit('updateSigning');
          }
        );
    }
  }
};
</script>

<style lang="less" scoped>
form {
  width: 50%;
}
</style>
