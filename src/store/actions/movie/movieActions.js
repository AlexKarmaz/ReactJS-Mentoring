import * as movieService from '../../../services/movieService.js';
import * as movieActionsTypes from './movieActionTypes.js'
import {commonActions} from '../../actions'

export const loadMovies = () => async (dispatch, getState) => {
    const state = getState();
    const data = await movieService.getMovies({
        //filter: state.filter === 'All' ? '' : state.filter,
        //sorter: state.sorter.id,
        //search: state.search,
        //offset: newSearch ? 0 : (state.currentPage - 1) * 12
    });

    dispatch(setTotalMoviesCount(data.totalAmount));
    dispatch(moviesLoaded(data.data));
    dispatch(updateGenres());
};

export const moviesLoaded = (payload) => ({
    type: movieActionsTypes.MOVIES_LOADED,
    payload,
});

export const setTotalMoviesCount  = (payload) => ({
    type: movieActionsTypes.SET_TOTAL_MOVIES_COUNT,
    payload,
});

export const deleteMovie = () => async (dispatch, getState) => {
    const movieIdForDeletion = getState().commonData.movieForDeletion;

    dispatch(commonActions.closeDeleteMovieDialog());

    await movieService.deleteMovie(movieIdForDeletion);

    dispatch(deleteMovieFromStore(movieIdForDeletion));
};

export const deleteMovieFromStore = (payload) => ({
    type: movieActionsTypes.DELETE_MOVIE,
    payload,
});

export const editMovieInStore = (payload) => ({
    type: movieActionsTypes.EDIT_MOVIE,
    payload,
});
  
export const editMovie = (movie) => async dispatch => {
    dispatch(commonActions.closeEditMovieDialog());

    const updatedMovie = await movieService.editMovie(movie);

    dispatch(editMovieInStore(updatedMovie));
};

export const addMovieInStore = (payload) => ({
    type: movieActionsTypes.ADD_MOVIE,
    payload,
});

export const addMovie = (movie) => async dispatch => {
    dispatch(commonActions.closeAddMovieDialog());

    delete movie.id;
    const newMovie = await movieService.addMovie(movie);

    dispatch(addMovieInStore(newMovie));
};

export const updateGenres = () => ({
    type: movieActionsTypes.UPDATE_GENRES,
    payload: null,
});
