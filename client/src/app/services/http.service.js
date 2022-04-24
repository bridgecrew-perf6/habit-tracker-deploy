import axios from 'axios';
import { toast } from 'react-toastify';
import authService from './auth.service';
import localStorageService from './localStorage.service.js';
import config from '../../config.json';

const http = axios.create({
  // baseURL:
  //   'https://habit-tracker-cb7ea-default-rtdb.europe-west1.firebasedatabase.app/'
  baseURL: config.mongoEndpoint
});

http.interceptors.request.use(
  async function (config) {
    const expiresDate = localStorageService.getExpiresToken();
    const refreshToken = localStorageService.getRefreshToken();
    if (refreshToken && expiresDate < Date.now()) {
      const data = await authService.refresh();
      localStorageService.setTokens({
        refreshToken: data.refreshToken,
        accessToken: data.accessToken,
        expiresIn: data.expiresIn,
        userId: data.userId
      });
    }
    const accessToken = localStorageService.getAccessToken();
    if (accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `bearer ${accessToken}`
      };
    }
    return config;
  },
  function (error) {
    console.log(error);
    // return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (res) => {
    return res;
  },
  function (error) {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.request.status < 500;

    if (!expectedErrors) {
      console.log(error);
      toast.error('Something went wrong');
    }
    return Promise.reject(error);
  }
);

const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch
};

export default httpService;
