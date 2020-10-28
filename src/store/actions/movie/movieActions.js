import * as movieService from '../../../services/movieService.js';
import * as movieActionsTypes from './movieActionTypes.js'
import {commonActions} from '../../actions'

export const loadMovies = (newSearch) => async (dispatch, getState) => {
    const state = getState();
    const data = await movieService.getMovies({
        search: state.commonData.searchString,
        offset: state.moviesData.offset,
        genre: state.commonData.genreForFilter !== 'All' ? state.commonData.genreForFilter : ''
    });

    dispatch(addMovies(data));

    if(newSearch) dispatch(setTotalMoviesCount(data.totalAmount));

    dispatch(updateGenres());
};

export const resetMovieResults = () => ({
    type: movieActionsTypes.RESET_MOVIE_RESULTS,
    payload: null,
  });

export const addMovies = (payload) => ({
    type: movieActionsTypes.ADD_MOVIES,
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

export const getMovieById = (id) => (dispatch, getState) => {
    const state = getState();

    // if( state.moviesData.movies.length == 0) {
    //     dispatch(loadMovies(false));
    // }
    const movie = state.moviesData.movies.find((movie) => movie.id == id);

    return movie; 
};
