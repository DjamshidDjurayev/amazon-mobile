import axios from 'axios';
import { CANCEL } from 'redux-saga'
import constants from '../constants';

axios.defaults.baseURL = constants.BASE_URL;
axios.defaults.timeout = 30000;
axios.defaults.headers.post['Content-Type'] = 'application/json';
let isAlreadyFetchingAccessToken = false;
// This is the list of waiting requests that will retry after the JWT refresh complete
let subscribers = [];

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
  const errorResponse = error.response;
  console.log(error);
  //
  // if (isTokenExpiredError(errorResponse)) {
  //   return resetTokenAndReattemptRequest(error)
  // }
  // If the error is due to other reasons, we just throw it back to axios
  return Promise.reject(error)
});
//
// function isTokenExpiredError(errorResponse) {
//   // Your own logic to determine if the error is due to JWT token expired returns a boolean value
// }
//
// async function resetTokenAndReattemptRequest(error) {
//   try {
//     const {response: errorResponse} = error;
//     const resetToken = await TokenUtils.getResetToken(); // Your own mechanism to get the refresh token to refresh the JWT token
//     if (!resetToken) {
//       // We can't refresh, throw the error anyway
//       return Promise.reject(error);
//     }
//     /* Proceed to the token refresh procedure
//     We create a new Promise that will retry the request,
//     clone all the request configuration from the failed
//     request in the error object. */
//     const retryOriginalRequest = new Promise(resolve => {
//       /* We need to add the request retry to the queue
//       since there another request that already attempt to
//       refresh the token */
//       addSubscriber(access_token => {
//         errorResponse.config.headers.Authorization = 'Bearer ' + access_token;
//         resolve(axios(errorResponse.config));
//       });
//     });
//     if (!isAlreadyFetchingAccessToken) {
//       isAlreadyFetchingAccessToken = true;
//       const response = await axios({
//         method: 'post',
//         url: `<YOUR TOKEN REFREH ENDPOINT>`,
//         data: {
//           token: resetToken // Just an example, your case may vary
//         }
//       });
//       if (!response.data) {
//         return Promise.reject(error);
//       }
//       const newToken = response.data.token;
//       TokenUtils.saveRefreshToken(newToken); // save the newly refreshed token for other requests to use
//       isAlreadyFetchingAccessToken = false;
//       onAccessTokenFetched(newToken);
//     }
//     return retryOriginalRequest;
//   } catch (err) {
//     return Promise.reject(err);
//   }
// }
//
// function onAccessTokenFetched(access_token) {
//   // When the refresh is successful, we start retrying the requests one by one and empty the queue
//   subscribers.forEach(callback => callback(access_token));
//   subscribers = [];
// }
//
// function addSubscriber(callback) {
//   subscribers.push(callback);
// }

function executeRequest(method, pathname, data, config) {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();
  const httpMethod = method.toLowerCase();

  const defOptions = {
    cancelToken: source.token,
    headers: config && config.headers
  };

  let request = data
    ? axios[httpMethod](pathname, data, defOptions)
    : axios[httpMethod](pathname, defOptions);

  request[CANCEL] = () => source.cancel();
  return request;
}

export default {
  get(pathname, config) {
    return executeRequest('get', pathname, null, config);
  },

  post(pathname, data, config) {
    return executeRequest('post', pathname, data, config);
  },

  put(pathname, data, config) {
    return executeRequest('put', pathname, data, config);
  },

  delete(pathname, data, config) {
    return executeRequest('delete', pathname, data, config);
  },

  all(promises) {
    return axios.all(promises);
  },
};
