import axios from 'axios';
import url from 'url';
import AppConstants from '../constants';
import queryString from 'qs';

function executeRequest(method, pathname, data, options = {}, urlEncoded) {
  let headers = {};

  if (urlEncoded) {
    headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    };
  } else {
    headers = {
      'Content-Type': 'application/json',
    };
  }

  let callInstance = axios.create({
    baseURL: url.format(AppConstants.BASE_URL),
    timeout: options.timeout || 30000,
    headers: headers,
  });

  let body = method === 'get' || !data ? {} : data;

  if (method === 'post' && urlEncoded) {
    body = queryString.stringify(data);
  }

  let reqObj = {method, url: pathname, params: options.query, data: body};

  return new Promise((resolve, reject) => {
    return callInstance
      .request(reqObj)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

export default {
  get(pathname, options) {
    return executeRequest('get', pathname, null, options, false);
  },

  post(pathname, data, options, urlEncoded) {
    return executeRequest('post', pathname, data, options, urlEncoded);
  },

  put(pathname, data, options) {
    return executeRequest('put', pathname, data, options, false);
  },

  delete(pathname, data, options) {
    return executeRequest('delete', pathname, data, options, false);
  },

  all(promises) {
    return axios.all(promises);
  },
};
