import { combineReducers } from 'redux';
import movieReducer from './movieReducer.js';
import commonReducer from './commonReducer';

export default combineReducers({
  moviesData: movieReducer,
  commonData: commonReducer,
});
