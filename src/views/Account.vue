<template>
  <div class="account">
    <h1>Account Info</h1>
    <p>
      <label>User:</label>
      {{user}}
    </p>

    <Select v-model="$i18n.locale">
      <Option v-for="(lang,i) in languages" :value="lang.locale" :key="i">{{lang.name}}</Option>
    </Select>
  </div>
</template>

<script>
export default {
  name: 'account',
  data: function() {
    return {
      user: this.$store.state.login.user,
      languages: [
        {
          locale: 'en-US',
          name: 'English'
        },
        {
          locale: 'zh-TW',
          name: '繁體中文'
        }
      ]
    };
  }
};
</script>
