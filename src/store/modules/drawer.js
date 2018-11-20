export default {
  state: {
    openPage: 'none',
    closePage: 'none',
    pageList: ['search', 'favorite', 'login', 'game-detail', 'game-list']
  },
  getters: {
    pageOpenList(state) {
      return state.pageList.map(l => ({
        name: l,
        open: l === state.openPage ? !(l === state.closePage) : false
      }));
    }
  },
  mutations: {
    openDrawerPage(state, payload) {
      state.openPage = payload;
      state.closePage = 'none';
    },
    closeDrawerPage(state, payload) {
      state.closePage = payload;
    }
  },
  actions: {}
};
