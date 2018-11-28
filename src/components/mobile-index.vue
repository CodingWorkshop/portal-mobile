<template lang="html">
  <!--<div class="row mobile-header">
    <div class="col-6 d-flex">
      <div class="p-2">item1</div>
    </div>
    <div class="col-6 d-flex flex-row-reverse">
      <i class="fas fa-search p-2"></i>
      <i class="fas fa-smile p-2"></i>
      <i class="fas fa-smile p-2"></i>
    </div>
  </div>-->
  <div class="mobile-login">
    <div class="text-center ml-header">
      <span>
        登入註冊
      </span>
    </div>
    <div class="row text-center ml-bar">
      <div class="col-6 ml-b-login">
        會員登入
      </div>
      <div class="col-6 ml-b-regist">
        立即註冊
      </div>
    </div>
    <div class="ml-title-icon">
      <i class="fas fa-user-circle"></i>
    </div>
    <div class="container mt-2 ml-form">
      <input type="text" class="form-control form-group" placeholder="帳號">
      <input type="text" class="form-control form-group" placeholder="密碼">
      <input type="text" class="form-control form-group" placeholder="驗整碼">
      <button class="btn col ml-f-btn-login">登入</button>
      <button class="btn col mt-2 ml-f-btn-regist">忘記密碼?</button>
    </div>
  </div>
  
</template>

<script lang="js">
  export default  {
    name: 'mobile-index',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
.mobile-login {
  background-color: #ffffff;
  font-family: Microsoft JhengHei;
  height: 666px;
  .ml-header {
    padding: 10px;
    span {
      color: rgb(141, 141, 141);
      font-size: 18px;
      font-weight: bold;
    }
  }
  .ml-bar {
    font-size: 15px;
    .ml-b-login {
      font-weight: bold;
      border-bottom: 2px solid;
      color: rgb(243, 83, 123);
    }
    .ml-b-regist {
      font-weight: bold;
      border-bottom: 2px solid;
      color: rgb(196, 196, 196);
    }
  }
  .ml-title-icon {
    color: rgb(196, 196, 196);
    font-size: 120px;
  }
  .ml-form {
    input {
      border-radius: 5px;
      background-color: #ffffff;
      color: #000000;
    }
    .ml-f-btn-login {
      background-color: rgb(243, 83, 123);
      color: #ffffff;
      letter-spacing: 6px;
      border: rgb(243, 83, 123);
      border-radius: 7px;
    }
    .ml-f-btn-regist {
      background-color: rgb(247, 126, 156);
      color: #ffffff;
      letter-spacing: 6px;
      border: rgb(247, 126, 156);
      border-radius: 7px;
    }
  }
}
/*.mobile-header{
    background-color: #FFFFFF;
    color: rgb(243, 83, 123);
  }*/

.mobile-header {
  background-color: #ffffff;
  color: rgb(243, 83, 123);
}
</style>
