import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

const title = ['搜尋', '收藏夾', '登入註冊', '遊戲', '遊戲列表'];

@Module
export default class DrawerStore extends VuexModule {
  constructor() {
    super({});
    this.pageList = [
      'search',
      'favorite',
      'login',
      'game-detail',
      'game-list'
    ].map((l, i) => ({
      name: title[i],
      type: l,
      open: false,
      zIndex: 0
    }));
  }
  zIndexCounter = 0;
  pageList: IDrawerPage[] = [];
  gameListCatrgory = '';
  gameId = '';

  @Mutation
  openDrawerPage(payload: IDrawerPagePayload) {
    this.gameId = payload.gameId ? payload.gameId : this.gameId;
    this.gameListCatrgory = payload.category
      ? payload.category
      : this.gameListCatrgory;
    this.pageList.some(l => {
      const status = l.type === payload.type;
      if (status) {
        this.zIndexCounter++;
        l.zIndex = this.zIndexCounter;
        l.open = true;
        l.name = payload.name ? payload.name : l.name;
      }
      return status;
    });
  }

  @Mutation
  closeDrawerPage(payload: string) {
    this.pageList.some(l => {
      let status = l.type === payload;
      if (status) {
        l.open = false;
      }
      return status;
    });
  }
}

interface IDrawerPage {
  name: string;
  type: string;
  open: boolean;
  zIndex: number;
}

interface IDrawerPagePayload {
  gameId: string;
  category: string;
  name: string;
  type: string;
}
