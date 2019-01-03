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
          <Form @submit.native.prevent="registerSubmit('registerForm')" :model="registerForm" ref="registerForm">
            <form-input v-for="(item, index) in registerList" :key="index" :detail="item" :modelForm="registerForm"></form-input>
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
import FormInput from '@/components/common/FormInput.vue';
const registerList = [
  {
    name: '推薦人',
    model: 'Referrer',
    placeholder: '請輸入推薦人',
    type: 'text'
  },
  {
    name: '會員帳號',
    model: 'Account',
    placeholder: '請輸入會員帳號 需字母開頭 限數字和底線',
    type: 'text',
    maxlength: 15,
    pattern: '/^[a-zA-Z]|d+/'
  },
  {
    name: '會員密碼',
    model: 'Password',
    placeholder: '請輸入會員密碼',
    type: 'password',
    pattern: '/[a-zA-Z]|d+/'
  },
  {
    name: '確認密碼',
    model: 'CheckPsd',
    placeholder: '請再確認密碼',
    type: 'password'
  },
  {
    name: '取款密碼',
    model: 'MoneyPassword',
    placeholder: '請輸入取款密碼',
    type: 'password'
  },
  {
    name: '真實姓名',
    model: 'Name',
    placeholder: '請輸入真實姓名 需與提款銀行戶口相同',
    type: 'text'
  },
  {
    name: '手機號碼',
    model: 'Mobile',
    placeholder: '請輸入手機號碼',
    type: 'text',
    pattern: '/[0-9]/'
  },
  {
    name: '電子信箱',
    model: 'Email',
    placeholder: '請輸入電子信箱',
    type: 'email'
  },
  {
    name: '性別',
    model: 'Sex',
    placeholder: '請輸入性別',
    type: 'text'
  },
  {
    name: '生日',
    model: 'Birthday',
    placeholder: '請輸入生日',
    type: 'date'
  },
  {
    name: 'QQ',
    model: 'QQ',
    placeholder: '請輸入QQ',
    type: 'text'
  },
  {
    name: '微信',
    model: 'IdNumber',
    placeholder: '請輸入微信',
    type: 'text'
  }
];
export default {
  name: 'DrawerLogin',
  components: {
    FormInput
  },
  data: function() {
    return {
      key: 'login',
      masterRule: [],
      loginForm: {
        user: '',
        password: '',
        code: ''
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
      },
      registerForm: {
        Referrer: '',
        Account: '',
        Password: '',
        CheckPsd: '',
        MoneyPassword: '',
        Name: '',
        Mobile: '',
        Email: '',
        Sex: '',
        Birthday: '',
        QQ: '',
        IdNumber: ''
      },
      registerList: []
    };
  },
  methods: {
    loginSubmit: function(name) {
      this.$store.commit('updateSigning');

      this.$refs[name].validate(valid => {
        if (!valid) {
          this.$store.commit('updateSigning');
          return;
        }

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
      });
    },
    registerSubmit: function(name) {
      this.$refs[name].validate(valid => {
        console.log(this.registerForm);
        if (!valid) {
          this.$Message.success('失敗!');
          return;
        }
        this.$Message.success('成功!');
      });
    },
    logOut: function() {
      this.$store.dispatch('submitLogout');
      this.loginForm = {
        user: '',
        password: '',
        code: ''
      };
      this.$Message.success('登出成功!');
    }
  },
  mounted: function() {
    this.axios
      .get('https://next.json-generator.com/api/json/get/V1bIvscJU')
      .then(response => {
        this.masterRule = response.ReturnObject;
        registerList.forEach(r => {
          r.isRequired =
            this.masterRule['IsRequired_' + r.name] == undefined
              ? true
              : this.masterRule['IsRequired_' + r.name];
          r.isShow =
            this.masterRule['IsShow_' + r.name] == undefined
              ? true
              : this.masterRule['IsShow_' + r.name];
        });
        this.registerList = registerList.filter(r => r.isShow == true);
      });
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
