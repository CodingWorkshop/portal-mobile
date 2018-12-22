import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

export default () => {
  const http = axios.create();
  Vue.use(VueAxios, http);
  return http;
};
