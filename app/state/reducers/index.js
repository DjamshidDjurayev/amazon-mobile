import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import splash from './splash';
import login from './login';
import registration from './registration';
import profile from './profile';

const rootReducer = combineReducers({
  splash,
  login,
  registration,
  profile,
  form: formReducer
});

export default rootReducer
