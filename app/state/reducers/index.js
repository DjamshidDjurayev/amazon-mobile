import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import splash from './splash';
import login from './login';
import registration from './registration';
import profile from './profile';
import favourites from './favourites'
import categories from './categories';
import cart from './cart';
import myOrders from './myOrders';
import home from './home';
import product from './product';
import homeProducts from './homeProducts';

const rootReducer = combineReducers({
  splash,
  login,
  registration,
  profile,
  favourites,
  categories,
  cart,
  myOrders,
  home,
  product,
  homeProducts,
  form: formReducer
});

export default rootReducer
