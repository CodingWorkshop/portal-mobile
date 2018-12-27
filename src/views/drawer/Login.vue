<template>
  <div>
    <tabs v-model="key" v-if="!$store.state.login.loginStatus">
      <tab-pane label="會員登入" name="login">
        <v-touch tag="body" v-on:swipeleft="key='register'">
          <font-awesome-icon icon="user-circle" class="fa-10x login-icon" />
          <Form @submit.native.prevent="loginSubmit('loginForm')" ref="loginForm"
            :model="loginForm" :rules="loginRuleValidate">
            <FormItem prop="user">
              <i-input v-model="loginForm.user" placeholder="帳號" clearable>
              </i-input>
            </FormItem>
            <FormItem prop="password">
              <i-input v-model="loginForm.password" type="password" placeholder="密碼"
                clearable>
              </i-input>
            </FormItem>
            <FormItem prop="code">
              <i-input v-model="loginForm.code" placeholder="驗證碼" clearable>
              </i-input>
            </FormItem>
            <FormItem>
              <Button html-type="submit" type="primary" :disabled="$store.state.login.signing"
                long>
                {{$store.state.login.signing?'登入中...':'登入'}}
              </Button>
            </FormItem>
            <FormItem>
              <Button type="info" long>忘記密碼?</Button>
            </FormItem>
          </Form>
        </v-touch>
      </tab-pane>
      <tab-pane label="立即註冊" name="register">
        <v-touch tag="body" v-on:swiperight="key='login'">
          <Form @submit.native.prevent="registerSubmit" ref="registerForm"
            :model="registerForm" :rules="registerRuleValidate">
            <FormItem prop="Referrer">
              <i-input v-model="registerForm.referrer" placeholder="推薦人"
                clearable>
              </i-input>
            </FormItem>
            <FormItem prop="user">
              <i-input v-model="registerForm.user" placeholder="會員帳號 需字母開頭 限數字和底線"
                clearable>
              </i-input>
            </FormItem>
            <FormItem prop="password">
              <i-input v-model="registerForm.password" type="password"
                placeholder="會員密碼" clearable>
              </i-input>
            </FormItem>
            <FormItem prop="checkPsd">
              <i-input v-model="registerForm.checkPsd" type="password"
                placeholder="確認密碼" clearable>
              </i-input>
            </FormItem>
            <FormItem prop="withdrawalPsd">
              <i-input v-model="registerForm.withdrawalPsd" placeholder="取款密碼"
                clearable>
              </i-input>
            </FormItem>
            <FormItem prop="realName">
              <i-input v-model="registerForm.realName" placeholder="真實姓名 需與提款銀行戶口相同"
                clearable>
              </i-input>
            </FormItem>
            <FormItem prop="code">
              <i-input v-model="registerForm.code" placeholder="驗證碼" clearable>
              </i-input>
            </FormItem>
            <FormItem>
              <Button html-type="submit" type="primary" long>送出</Button>
            </FormItem>
          </Form>
        </v-touch>
      </tab-pane>
    </tabs>
    <div v-else>
      <h1>安安 {{$store.state.login.user}}</h1>
      <Button type="primary" @click="logOut()">登出</Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DrawerLogin',
  components: {},
  data: function() {
    return {
      key: 'login',
      loginForm: {
        user: '',
        password: '',
        code: ''
      },
      registerForm: {
        referrer: '',
        user: '',
        password: '',
        checkPsd: '',
        withdrawalPsd: '',
        realName: '',
        code: ''
      },
      registerRuleValidate: {
        referrer: [
          {
            required: true,
            type: 'string',
            message: 'The referrer cannot be empty',
            trigger: 'blur'
          }
        ],
        user: [
          {
            required: true,
            type: 'string',
            message: 'The user cannot be empty',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            type: 'string',
            message: 'The password cannot be empty',
            trigger: 'blur'
          }
        ],
        checkPsd: [
          {
            required: true,
            type: 'string',
            message: 'The check password cannot be empty',
            trigger: 'blur'
          }
        ],
        withdrawalPsd: [
          {
            required: true,
            type: 'integer',
            message: 'The withdrawal password name cannot be empty',
            trigger: 'blur'
          }
        ],
        realName: [
          {
            required: true,
            type: 'string',
            message: 'The real name cannot be empty',
            trigger: 'blur'
          }
        ],
        code: [
          {
            required: true,
            type: 'integer',
            message: 'The code cannot be empty',
            trigger: 'blur'
          }
        ]
      },
      loginRuleValidate: {
        user: [
          {
            required: true,
            message: 'The user cannot be empty',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: 'The password cannot be empty',
            trigger: 'blur'
          }
        ],
        code: [
          {
            type: 'string',
            required: true,
            message: 'The code cannot be empty',
            trigger: 'blur'
          }
        ]
      }
    };
  },
  methods: {
    loginSubmit: function(name) {
      this.$store.commit('updateSigning');
      this.$refs[name].validate(valid => {
        if (valid) {
          this.axios
            .post(process.env.VUE_APP_LOGIN_URL, {
              Account: this.loginForm.user,
              Password: this.loginForm.password
            })
            .then(
              response => {
                const token = response.ReturnObject;

                this.$store.dispatch('updateLogin', {
                  user: this.loginForm.user,
                  token: token
                });

                this.$Message.success('登入成功!');

                const destinationPage = this.$store.state.login.destinationPage;
                if (destinationPage) {
                  this.$router.push(destinationPage);
                  this.$store.commit('recordDestinationPage', '');
                  this.$store.commit('closeDrawerPage', 'login');
                }

                this.$store.commit('updateSigning');
              },
              () => {
                this.$Message.error('帳號密碼錯誤!');
                this.$store.commit('updateSigning');
              }
            );
        } else {
          this.$store.commit('updateSigning');
        }
      });
    },
    registerSubmit: function() {},
    logOut: function() {
      this.$store.dispatch('submitLogout');
      this.loginForm = {
        user: '',
        password: '',
        code: ''
      };
      this.$Message.success('登出成功!');
    }
  }
};
</script>

<style lang="less" scoped>
.login-icon {
  margin: 10px auto;
  width: 100%;
  color: #ccc;
}
</style>
