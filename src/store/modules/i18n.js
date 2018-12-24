import Vue from 'vue';

export default {
  state: {
    version: {},
    message: {}
  },
  getters: {},
  mutations: {
    updateLocale(state, payload) {
      Vue.set(state.version, payload.locale, payload.version);
      Vue.set(state.message, payload.locale, payload.message);
    }
  },
  actions: {}
};
