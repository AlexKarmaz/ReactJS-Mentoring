import * as movieActionTypes from '../actions/movie/movieActionTypes.js';

const initialState = {
  movies: [],
  totalMoviesCount: 0,
  genres: ['All'], 
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case movieActionTypes.MOVIES_LOADED: {
      return { ...state, movies: action.payload };
    }
    case movieActionTypes.SET_TOTAL_MOVIES_COUNT: {
      return { ...state, totalMoviesCount: action.payload };
    }
    case movieActionTypes.DELETE_MOVIE: {
      const updatedMovies = state.movies.filter((movie) => movie.id !== action.payload);
      return { ...state, movies: updatedMovies };
    }
    case movieActionTypes.EDIT_MOVIE: {
      const updatedMovieIndex = state.movies.findIndex(movie => movie.id === action.payload.id);
      let updatedMovies = [...state.movies];
      updatedMovies.splice(updatedMovieIndex, 1, action.payload);
      return { ...state, movies: updatedMovies };
    }
    case movieActionTypes.ADD_MOVIE: {
      const newMovie = action.payload;
      return { ...state, movies: [...state.movies, newMovie] };
    }
    case movieActionTypes.UPDATE_GENRES: {
      const newGenres = new Set(state.movies.map((movie) => movie.genres).flat());
      return { ...state, genres: ['All', ...newGenres] };
    }
    default: {
      return state;
    }
  }
};

export default movieReducer;
