import Vue, { PluginFunction, PluginObject } from 'vue';
import Router from 'vue-router';
import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
});

export class HttpService {
  get<T>(url: string, option?: any) {
    return http.get<HttpResponse<T>>(url, option).then(response => {
      if (response.data.IsSuccess) {
        return Promise.resolve(response.data);
      } else {
        return Promise.reject(response.data.ErrorMessage);
      }
    });
  }
  post<T>(url: string, option: any) {
    return http.post<HttpResponse<T>>(url, option).then(response => {
      if (response.data.IsSuccess) {
        return Promise.resolve(response.data);
      } else {
        return Promise.reject(response.data.ErrorMessage);
      }
    });
  }
}

const jwt = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
});

export class JWTService {
  get<T>(url: string, option?: any) {
    return jwt.get<HttpResponse<T>>(url, option).then(response => {
      if (response.data.IsSuccess) {
        return Promise.resolve(response.data);
      } else {
        return Promise.reject(response.data.ErrorMessage);
      }
    });
  }
  post<T>(url: string, option: any) {
    return jwt.post<HttpResponse<T>>(url, option).then(response => {
      if (response.data.IsSuccess) {
        return Promise.resolve(response.data);
      } else {
        return Promise.reject(response.data.ErrorMessage);
      }
    });
  }
}

const httpService = new HttpService();
const jwtService = new JWTService();

class HttpPlugin implements PluginObject<any> {
  install: PluginFunction<any> = (Vue, option) => {
    Object.defineProperties(Vue.prototype, {
      axios: {
        get() {
          return httpService;
        }
      },
      $http: {
        get() {
          return httpService;
        }
      },
      jwt: {
        get() {
          return jwtService;
        }
      }
    });
  };
}

export interface HttpResponse<T = any> {
  ReturnObject?: T;
  IsSuccess?: boolean;
  ErrorMessage?: string;
}

declare module 'vue/types/vue' {
  interface Vue {
    axios: HttpService;
    $http: HttpService;
    jwt: JWTService;
  }

  interface VueConstructor {
    axios: HttpService;
  }
}

export default (router: Router): HttpService => {
  http.interceptors.response.use(
    response => response,
    error => {
      const errorList = [
        {
          status: 401,
          msg: 'Unauthorized',
          callback: function() {
            alert('閒置過久，請重新登入');
            router.push('notfound');
          }
        },
        {
          status: 404,
          msg: 'Not Found',
          callback: function() {
            //alert('找不到啦');
          }
        },
        {
          status: 500,
          msg: 'Internal Server Error',
          callback: function() {
            alert('操作頻繁，請稍後嘗試');
          }
        }
      ];

      const currentError = errorList.filter(err => {
        return err.status === error.response.status;
      })[0] || {
        msg: error.response.statusText,
        callback: () => {}
      };
      currentError.callback();
      return Promise.reject(currentError.msg);
    }
  );

  Vue.use(new HttpPlugin());
  return httpService;
};
