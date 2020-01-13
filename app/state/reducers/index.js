import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import splash from './splash';
import login from './login';
import registration from './registration';
import profile from './profile';
import favourites from './favourites'
import categories from './categories';

const rootReducer = combineReducers({
  splash,
  login,
  registration,
  profile,
  favourites,
  categories,
  form: formReducer
});

export default rootReducer
