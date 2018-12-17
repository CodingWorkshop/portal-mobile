const title = ['搜尋', '收藏夾', '登入註冊', '遊戲', '遊戲列表'];
export default {
  state: {
    zIndexCounter: 0,
    pageList: ['search', 'favorite', 'login', 'game-detail', 'game-list'].map(
      (l, i) => ({
        name: title[i],
        type: l,
        open: false,
        zIndex: 0
      })
    ),
    gameListCatrgory: '',
    gameId: ''
  },
  mutations: {
    openDrawerPage(state, payload) {
      state.gameId = payload.gameId ? payload.gameId : state.gameId;
      state.gameListCatrgory = payload.category
        ? payload.category
        : state.gameListCatrgory;
      state.pageList.some(l => {
        if (l.type === payload.type) {
          state.zIndexCounter++;
          l.zIndex = state.zIndexCounter;
          l.open = true;
          l.name = payload.name ? payload.name : l.name;
          return true;
        }
      });
    },
    closeDrawerPage(state, payload) {
      state.pageList.some(l => {
        if (l.type === payload) {
          l.open = false;
          return true;
        }
      });
    }
  },
  actions: {}
};
