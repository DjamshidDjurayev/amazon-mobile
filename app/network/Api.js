const userLogin = () => '/api/users/login';
const userLogout = () => '/api/users/logout';
const userRegistration = () => '/api/users';
const userGetDetails = id => '/api/users/' + id;
const getCategories = () => '/api/categories';
const getCart = () => '/api/users/me/cart';
const getMyOrders = () => '/api/users/me/myorders';
const getProducts = query => '/api/products/getProducts?query' + query;

export default {
  userLogin,
  userLogout,
  userRegistration,
  userGetDetails,
  getCategories,
  getCart,
  getMyOrders,
  getProducts
}
