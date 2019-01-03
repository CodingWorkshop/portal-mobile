import { Component, Vue } from 'vue-property-decorator';

import FooterButton from '@/components/layout/FooterButton.vue';
import MultiDrawer from '@/components/common/MultiDrawer.vue';

@Component({
  name: 'app',
  components: {
    FooterButton,
    MultiDrawer
  }
})
export default class AppCtrl extends Vue {
  get loading() {
    return (
      Object.keys(this.$i18n.getLocaleMessage(this.$i18n.locale)).length === 0
    );
  }
}
