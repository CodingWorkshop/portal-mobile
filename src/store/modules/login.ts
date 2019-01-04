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
    const context = this.context;
    return new Promise(resolve => {
      setTimeout(() => {
        context.commit('updateSigning');
        resolve();
      }, 2000);
    });
  }

  @Action
  submitLogin(payload: string) {
    const context = this.context;

    return context.dispatch('checkLogin').then(() => {
      context.commit('updateLoginStatus');
      context.commit('updateUser', payload);
    });
  }

  @Action
  submitLogout() {
    const context = this.context;
    context.commit('updateLoginStatus');
    context.commit('updateUser', {
      user: ''
    });
    context.commit('updateToken', {
      token: ''
    });
  }

  @Action
  updateLogin(payload: ILogin) {
    const context = this.context;
    context.commit('updateLoginStatus');
    context.commit('updateUser', {
      user: payload.user
    });
    context.commit('updateToken', {
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
