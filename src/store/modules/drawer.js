export default {
  state: {
    pageList: ['search', 'favorite', 'login', 'game-detail', 'game-list'].map(
      l => ({
        name: l,
        open: false
      })
    )
  },
  mutations: {
    openDrawerPage(state, payload) {
      state.pageList.some(l => {
        if (l.name === payload) {
          l.open = true;
          return true;
        }
      });
    },
    closeDrawerPage(state, payload) {
      state.pageList.some(l => {
        if (l.name === payload) {
          l.open = false;
          return true;
        }
      });
    }
  },
  actions: {}
};
