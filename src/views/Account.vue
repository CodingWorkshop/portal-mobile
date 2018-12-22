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
import { i18nInfo } from '../i18n';
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
      const isNotExist =
        Object.keys(this.$i18n.getLocaleMessage(this.$i18n.locale)).length ===
        0;

      if (isNotExist) {
        const locale = this.$i18n.locale;

        const url = i18nInfo.find(l => l.locale === locale).api;
        this.axios.get(url).then(
          response => {
            const language = response.ReturnObject;
            this.$i18n.setLocaleMessage(locale, language);
          },
          err => {
            alert(err);
          }
        );
      }
    }
  }
};
</script>
