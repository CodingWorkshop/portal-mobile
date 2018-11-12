export default {
  state: {
    show: false
  },
  // （可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
  getters: {
    reverseShow(state) {
      return !state.show;
    }
  },
  // mutations 中的方法是不分组件的，其他地方也有一樣的 mutations -> toggleShow
  // 執行提交會執行所有的 toggleShow 方法
  // mutations里的操作必须是同步的 ( 因不會追蹤 call back )
  mutations: {
    toggleShow(state) {
      state.show = !state.show;
    }
  },
  // 官方推荐 , 将异步操作放在 action 中。
  actions: {
    toggleShow($store) {
      setTimeout(() => {
        $store.commit('toggleShow');
      }, 1000);
    }
  }
};
