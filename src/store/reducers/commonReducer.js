import * as commonActionTypes from '../actions/common/commonActionTypes.js';

const initialState = {
  addMovieDialog: false,
  movieForDeletion: null,
  moviePreview: null,
  movieForEdit: null,
  genreForFilter: 'All',
  orderForSorting: 'title'
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case commonActionTypes.ADD_MOVIE_DIALOG: {
      return { ...state, addMovieDialog: action.payload };
    }
    case commonActionTypes.SET_MOVIE_FOR_DELETION: {
      return { ...state, movieForDeletion: action.payload };
    }
    case commonActionTypes.SET_MOVIE_PREVIEW: {
      return { ...state, moviePreview: action.payload };
    }
    case commonActionTypes.SET_MOVIE_FOR_EDIT: {
      return { ...state, movieForEdit: action.payload };
    }
    case commonActionTypes.SET_GENRE_FOR_FILTER: {
      return { ...state, genreForFilter: action.payload };
    }
    case commonActionTypes.SET_ORDER_FOR_SORTING: {
      return { ...state, orderForSorting: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default commonReducer;
