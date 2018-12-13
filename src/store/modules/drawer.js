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
    gameListCatrgory: ''
  },
  mutations: {
    openDrawerPage(state, payload) {
      state.pageList.some(l => {
        if (l.type === payload) {
          state.zIndexCounter++;
          l.zIndex = state.zIndexCounter;
          l.open = true;
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
    },
    changeDrawerTitle(state, payload) {
      state.gameListCatrgory = payload.category;
      state.pageList.some(l => {
        if (l.type === payload.type) {
          l.name = payload.name;
          return true;
        }
      });
    }
  },
  actions: {}
};
