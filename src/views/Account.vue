<template>
  <div class="account">
    <h1>Account Info</h1>
    <p>
      <label>User:</label>
      {{user}}
    </p>

    <Select v-model="$i18n.locale" @on-change="changeLanguage()">
      <Option v-for="(lang,i) in languages" :value="lang.locale" :key="i">{{lang.name}}</Option>
    </Select>
  </div>
</template>

<script>
import { i18nInfo, loadLangs } from '../i18n';
export default {
  name: 'account',
  data: function() {
    return {
      user: this.$store.state.login.user,
      languages: i18nInfo
    };
  },
  methods: {
    changeLanguage: function() {
      loadLangs(this.$store, this.axios);
    }
  }
};
</script>
