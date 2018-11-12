export default {
  state: {
    show: false
  },
  mutations: {
    toggleShow(state) {
      state.show = !state.show;
    }
  }
};
