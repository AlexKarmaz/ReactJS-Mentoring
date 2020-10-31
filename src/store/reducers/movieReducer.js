import * as movieActionTypes from '../actions/movie/movieActionTypes.js';

const initialState = {
  movies: [],
  totalMoviesCount: 0,
  genres: ['All'], 
  offset: 0
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case movieActionTypes.ADD_MOVIES: {
      const newMoviesList = [...state.movies, ...action.payload.data];
      const offset = state.offset + action.payload.data.length;
      return { ...state, movies: newMoviesList, offset: offset};
    }
    case movieActionTypes.SET_TOTAL_MOVIES_COUNT: {
      return { ...state, totalMoviesCount: action.payload };
    }
    case movieActionTypes.DELETE_MOVIE: {
      const updatedMovies = state.movies.filter((movie) => movie.id !== action.payload);
      return { ...state, movies: updatedMovies, offset: state.offset - 1 };
    }
    case movieActionTypes.EDIT_MOVIE: {
      const updatedMovieIndex = state.movies.findIndex(movie => movie.id === action.payload.id);
      let updatedMovies = [...state.movies];
      updatedMovies.splice(updatedMovieIndex, 1, action.payload);
      return { ...state, movies: updatedMovies };
    }
    case movieActionTypes.ADD_MOVIE: {
      const newMovie = action.payload;
      return { ...state, movies: [...state.movies, newMovie],  offset: state.offset + 1 };
    }
    case movieActionTypes.UPDATE_GENRES: {
      const newGenres = new Set(state.movies.map((movie) => movie.genres).flat());
      return { ...state, genres: ['All', ...newGenres] };
    }
    case movieActionTypes.RESET_MOVIE_RESULTS: {
      return { ...state, movies: [], offset: 0, genres:['All'] };
    }
    default: {
      return state;
    }
  }
};

export default movieReducer;
