import { combineReducers } from 'redux';
import movieReducer from './movieReducer.js';
import commonReducer from './commonReducer';
//import filterReducer from './filterReducer';

export default combineReducers({
  moviesData: movieReducer,
  commonData: commonReducer,
  //filters: filterReducer,
});
