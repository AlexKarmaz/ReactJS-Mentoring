import * as MovieActionTypes from '../actions/movie/movieActionTypes.js';

const initialState = {
  movies: [],
  movieForDeletion: null,
  moviePreview: null,
  movieForEdit: null,
  totalMoviesCount: 0,
  genres: ['All'],
  genreForFilter: 'All',
  orderForSorting: 'title' 
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MovieActionTypes.MOVIES_LOADED: {
      return { ...state, movies: action.payload };
    }
    case MovieActionTypes.SET_MOVIE_FOR_DELETION: {
      return { ...state, movieForDeletion: action.payload };
    }
    case MovieActionTypes.SET_MOVIE_PREVIEW: {
      return { ...state, moviePreview: action.payload };
    }
    case MovieActionTypes.SET_MOVIE_FOR_EDIT: {
      return { ...state, movieForEdit: action.payload };
    }
    case MovieActionTypes.SET_TOTAL_MOVIES_COUNT: {
      return { ...state, totalMoviesCount: action.payload };
    }
    case MovieActionTypes.DELETE_MOVIE: {
      const updatedMovies = state.movies.filter((movie) => movie.id !== action.payload);
      return { ...state, movies: updatedMovies };
    }
    case MovieActionTypes.EDIT_MOVIE: {
      const updatedMovieIndex = state.movies.findIndex(movie => movie.id === action.payload.id);
      let updatedMovies = [...state.movies];
      updatedMovies.splice(updatedMovieIndex, 1, action.payload);
      return { ...state, movies: updatedMovies };
    }
    case MovieActionTypes.ADD_MOVIE: {
      const newMovie = action.payload;
      return { ...state, movies: [...state.movies, newMovie] };
    }
    case MovieActionTypes.UPDATE_GENRES: {
      const newGenres = new Set(state.movies.map((movie) => movie.genres).flat());
      return { ...state, genres: ['All', ...newGenres] };
    }
    case MovieActionTypes.SET_GENRE_FOR_FILTER: {
      return { ...state, genreForFilter: action.payload };
    }
    case MovieActionTypes.SET_ORDER_FOR_SORTING: {
      return { ...state, orderForSorting: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default movieReducer;
