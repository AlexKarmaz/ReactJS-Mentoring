import { ADD_MOVIE_DIALOG } from './commonActionTypes.js';

export const openAddMovieDialog = () => ({
    type: ADD_MOVIE_DIALOG,
    payload: true,
});

export const closeAddMovieDialog = () => ({
    type: ADD_MOVIE_DIALOG,
    payload: false,
});
  