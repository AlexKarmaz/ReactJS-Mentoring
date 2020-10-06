import {ADD_MOVIE_DIALOG} from '../actions/common/commonActionTypes.js';

const initialState = {
  addMovieDialog: false,
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_DIALOG: {
      return { ...state, addMovieDialog: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default commonReducer;
