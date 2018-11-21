export default {
  state: {
    zIndexCounter: 0,
    pageList: ['search', 'favorite', 'login', 'game-detail', 'game-list'].map(
      l => ({
        name: l,
        open: false,
        zIndex: 0
      })
    )
  },
  mutations: {
    openDrawerPage(state, payload) {
      state.pageList.some(l => {
        if (l.name === payload) {
          state.zIndexCounter++;
          l.zIndex = state.zIndexCounter;
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
