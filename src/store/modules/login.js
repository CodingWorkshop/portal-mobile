export default {
  state: {
    signing: false,
    loginStatus: false,
    user: '',
    meidon: ''
  },
  getters: {},
  mutations: {
    updateSigning(state) {
      state.signing = !state.signing;
    },
    updateLoginStatus(state) {
      state.loginStatus = !state.loginStatus;
    },
    updateUser(state, payload) {
      state.user = payload.user;
    }
  },
  actions: {
    checkLogin(store) {
      return new Promise(resolve => {
        setTimeout(() => {
          store.commit('updateSigning');
          resolve();
        }, 2000);
      });
    },
    submitLogin(store, payload) {
      return store.dispatch('checkLogin').then(() => {
        store.commit('updateLoginStatus');
        store.commit('updateUser', payload);
      });
    },
    submitLogout(store) {
      store.commit('updateLoginStatus');
      store.commit('updateUser', {
        user: ''
      });
    }
  }
};
