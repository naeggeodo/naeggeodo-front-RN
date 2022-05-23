import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://3.38.33.232:8080',
});

export class ApiService {
  static getApi(uri: string) {
    return axiosInstance.get(`${uri}`);
  }
  static postApi(uri: string, data: unknown) {
    return axiosInstance.post(`${uri}`, data);
  }
}
