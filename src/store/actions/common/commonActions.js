import * as commonActionTypes from './commonActionTypes.js';
import {movieActions} from '../../actions'

export const openAddMovieDialog = () => ({
    type: commonActionTypes.ADD_MOVIE_DIALOG,
    payload: true,
});

export const closeAddMovieDialog = () => ({
    type: commonActionTypes.ADD_MOVIE_DIALOG,
    payload: false,
});

export const setMovieForDeletion = (payload) => ({
    type: commonActionTypes.SET_MOVIE_FOR_DELETION,
    payload,
});

export const closeDeleteMovieDialog = () => ({
    type: commonActionTypes.SET_MOVIE_FOR_DELETION,
    payload: null,
});

export const setMovieForEdit = (payload) => ({
    type: commonActionTypes.SET_MOVIE_FOR_EDIT,
    payload,
});

export const closeEditMovieDialog = () => ({
    type: commonActionTypes.SET_MOVIE_FOR_EDIT,
    payload: null,
});

export const setGenreForFilter = (payload) => ({
    type: commonActionTypes.SET_GENRE_FOR_FILTER,
    payload,
});

export const setOrderForSorting = (payload) => ({
    type: commonActionTypes.SET_ORDER_FOR_SORTING,
    payload,
});

export const search = (searchString) => async dispatch => {
    dispatch(movieActions.resetMovieResults());
    dispatch(setSearchString(searchString));
    dispatch(setGenreForFilter('All'));
    dispatch(movieActions.loadMovies(true));
};

export const setSearchString = (payload) => ({
    type: commonActionTypes.SET_SEARCH_STRING,
    payload,
});
  