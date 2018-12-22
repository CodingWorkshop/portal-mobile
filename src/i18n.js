import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW'
});

export const i18nInfo = [
  {
    locale: 'en-US',
    name: 'English',
    api: 'https://next.json-generator.com/api/json/get/E1mxATUeL'
  },
  {
    locale: 'zh-TW',
    name: '繁體中文',
    api: 'https://next.json-generator.com/api/json/get/EkTzAa8eI'
  }
];
