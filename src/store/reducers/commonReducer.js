import * as commonActionTypes from '../actions/common/commonActionTypes.js';

const initialState = {
  addMovieDialog: false,
  movieForDeletion: null,
  movieForEdit: null,
  genreForFilter: 'All',
  orderForSorting: 'title',
  searchString: ''
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case commonActionTypes.ADD_MOVIE_DIALOG: {
      return { ...state, addMovieDialog: action.payload };
    }
    case commonActionTypes.SET_MOVIE_FOR_DELETION: {
      return { ...state, movieForDeletion: action.payload };
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
    case commonActionTypes.SET_SEARCH_STRING: {
      return { ...state, searchString: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default commonReducer;
