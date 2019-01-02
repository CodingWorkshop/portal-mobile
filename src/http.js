import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
});

Vue.use(VueAxios, http);

export default http;
