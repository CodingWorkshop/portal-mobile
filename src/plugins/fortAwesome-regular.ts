import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(far);
Vue.component('font-awesome-icon', FontAwesomeIcon);
