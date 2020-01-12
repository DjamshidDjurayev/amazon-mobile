const userLogin = () => '/api/users/login';
const userLogout = () => '/api/users/logout';
const userRegistration = () => '/api/users';
const userGetDetails = id => '/api/users/' + id;

export default {
  userLogin,
  userLogout,
  userRegistration,
  userGetDetails
}
