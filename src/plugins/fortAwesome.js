import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGamepad,
  faMoneyBillAlt,
  faPhoneVolume,
  faGift,
  faUser,
  faSearch,
  faHeart,
  faBullhorn,
  faBirthdayCake,
  faAngleLeft,
  faSpinner
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faAngleLeft);
library.add(faBirthdayCake);
library.add(faBullhorn);
library.add(faGamepad);
library.add(faGift);
library.add(faHeart);
library.add(faMoneyBillAlt);
library.add(faPhoneVolume);
library.add(faSearch);
library.add(faUser);
library.add(faSpinner);
Vue.component('font-awesome-icon', FontAwesomeIcon);
