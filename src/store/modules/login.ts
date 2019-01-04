import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module
export default class LoginStore extends VuexModule {
  signing = false;
  loginStatus = false;
  user = '';
  meidon = '';
  destinationPage = '';
  token = '';

  @Mutation
  updateSigning() {
    this.signing = !this.signing;
  }

  @Mutation
  updateLoginStatus() {
    this.loginStatus = !this.loginStatus;
  }

  @Mutation
  updateUser(payload: ILogin) {
    this.user = payload.user as string;
  }

  @Mutation
  recordDestinationPage(payload: string) {
    this.destinationPage = payload;
  }

  @Mutation
  updateToken(payload: ILogin) {
    this.token = payload.token as string;
  }

  @Action
  checkLogin() {
    const store = this.context;
    return new Promise(resolve => {
      setTimeout(() => {
        store.commit('updateSigning');
        resolve();
      }, 2000);
    });
  }

  @Action
  submitLogin(payload: string) {
    const store = this.context;

    return store.dispatch('checkLogin').then(() => {
      store.commit('updateLoginStatus');
      store.commit('updateUser', payload);
    });
  }

  @Action
  submitLogout() {
    const store = this.context;
    store.commit('updateLoginStatus');
    store.commit('updateUser', {
      user: ''
    });
    store.commit('updateToken', {
      token: ''
    });
  }

  @Action
  updateLogin(payload: ILogin) {
    const store = this.context;
    store.commit('updateLoginStatus');
    store.commit('updateUser', {
      user: payload.user
    });
    store.commit('updateToken', {
      token: payload.token
    });
  }
}

interface ILogin {
  signing?: boolean;
  loginStatus?: boolean;
  user?: string;
  meidon?: string;
  destinationPage?: string;
  token?: string;
}

interface ILoginActionStore<T> {
  commit: (target: string, value?: T) => void;
  dispatch: (target: string) => Promise<void>;
}
