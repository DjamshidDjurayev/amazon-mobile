import {combineReducers} from 'redux';
import splash from './splash';
import login from './login';
import registration from './registration';
import profile from './profile';

const rootReducer = combineReducers(
  {
    splash,
    login,
    registration,
    profile
  });
export default rootReducer
