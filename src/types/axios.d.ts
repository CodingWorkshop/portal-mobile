import axios from 'axios';

declare module 'axios' {
  export interface AxiosResponse<T = any> {
    ReturnObject?: any;
    IsSuccess?: boolean;
    ErrorMessage?: string;
  }
}
