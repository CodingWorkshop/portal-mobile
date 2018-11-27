import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faHeart);
Vue.component('font-awesome-icon', FontAwesomeIcon);
