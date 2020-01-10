import axios from 'axios';
import { CANCEL } from 'redux-saga'
import constants from '../constants';

axios.defaults.baseURL = constants.BASE_URL;
axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(function (config) {
  let message = "REQUEST " + config.method.toString().toUpperCase() + " " + config.baseURL + config.url;
  console.log(`%c${message}`, "color: red");
  return config;
}, function (error) {
  console.log(error);
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  let message = "RESPONSE " + response.config.method.toString().toUpperCase() + " " + response.config.url;
  let statusCode = response.status.toString();
  console.log(`%c${message}` + ` %c${statusCode}`, "color: red", "color: blue");
  console.log("\n" + JSON.stringify(response.data));
  return response;
}, function (error) {
  console.log(error);
  return Promise.reject(error);
});

function executeRequest(method, pathname, data) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const httpMethod = method.toLowerCase();

  const defOptions = {
    cancelToken: source.token
  };

  let request = data
    ? axios[httpMethod](pathname, data, defOptions)
    : axios[httpMethod](pathname, defOptions);

  request[CANCEL] = () => source.cancel();
  return request;
}

export default {
  get(pathname) {
    return executeRequest('get', pathname, null);
  },

  post(pathname, data) {
    return executeRequest('post', pathname, data);
  },

  put(pathname, data) {
    return executeRequest('put', pathname, data);
  },

  delete(pathname, data) {
    return executeRequest('delete', pathname, data);
  },

  all(promises) {
    return axios.all(promises);
  },
};
