export default {
  state: {
    show: false
  },
  // mutations 中的方法是不分组件的，其他地方也有一樣的 mutations -> toggleShow
  // 執行提交會執行所有的 toggleShow 方法
  // mutations里的操作必须是同步的
  mutations: {
    toggleShow(state) {
      state.show = !state.show;
    }
  },
  // 官方推荐 , 将异步操作放在 action 中。
  actions: {
    toggleShow($store) {
      $store.commit('toggleShow');
    }
  }
};
