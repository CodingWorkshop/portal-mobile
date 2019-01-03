import Vue from 'vue';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class I18nStore extends VuexModule {
  version = {};
  message = {};

  @Mutation
  updateLocale(payload: II18nConfig) {
    Vue.set(this.version as any, payload.locale, payload.version);
    Vue.set(this.message as any, payload.locale, payload.message);
  }
}

interface II18nConfig {
  version: string;
  locale: string;
  message: string;
}
