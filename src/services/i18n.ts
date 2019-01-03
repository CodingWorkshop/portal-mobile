import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { Store } from 'vuex';
import { AxiosInstance, AxiosResponse } from 'axios';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'zh-TW',
  fallbackLocale: 'zh-TW'
});

const langSettingList = [
  {
    locale: 'en-US',
    name: 'English',
    api: 'https://next.json-generator.com/api/json/get/VkzYRLKxU'
  },
  {
    locale: 'zh-TW',
    name: '繁體中文',
    api: 'https://next.json-generator.com/api/json/get/V1UCCUYlU'
  }
];

function getLangs(store: Store<any>, http: AxiosInstance) {
  const locale = i18n.locale;
  const localMessage = store.state.i18n.message[locale];
  i18n.setLocaleMessage(locale, localMessage);

  if (!localMessage) {
    const url = (
      langSettingList.find(l => l.locale === locale) || langSettingList[0]
    ).api;

    http.get(url).then(
      response => {
        const language = response.data.ReturnObject;
        i18n.setLocaleMessage(locale, language.message);
        store.commit('updateLocale', {
          locale: i18n.locale,
          version: language.version,
          message: language.message
        });
      },
      (err: String) => {
        alert(err);
      }
    );
  }
}

export default i18n;
export const i18nInfo = langSettingList;
export const loadLangs = getLangs;
