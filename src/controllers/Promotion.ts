import { Component, Vue } from 'vue-property-decorator';

@Component
export default class promotionCtrl extends Vue {
  private promotion: number = 0;
  private list: IPromotion[] = [
    {
      label: '所有優惠',
      value: 0,
      promot: []
    }
  ];

  mounted() {
    this.axios
      .get<IGetPromotion>(
        'https://next.json-generator.com/api/json/get/41s54pKJU'
      )
      .then(response => {
        let obj: any = response;
        this.list = obj.ReturnObject;
      });
  }
}

interface IPromotion {
  label: string;
  value: number;
  promot: any[];
}

interface IGetPromotion {
  ReturnObject: any;
}
