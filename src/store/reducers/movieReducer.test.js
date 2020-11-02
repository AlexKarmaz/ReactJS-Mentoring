import * as movieActionTypes from '../actions/movie/movieActionTypes';
import movieReducer from './movieReducer';

const initialState = {
    movies: [],
    totalMoviesCount: 0,
    genres: ['All'], 
    offset: 0
};

describe('movieReducer', () => {
    test('should return the initial state', () => {
        const result = movieReducer(undefined, {});

        expect(result).toEqual(initialState);
    });

    test('should set movies and offset', () => {
        const action = { type: movieActionTypes.ADD_MOVIES, payload: {data:['movie1', 'movie2']}};

        const result = movieReducer(initialState, action);

        expect(result.movies).toEqual(['movie1', 'movie2']);
        expect(result.offset).toBe(2);
    });

    test('should set total movie count', () => {
        const action = { type: movieActionTypes.SET_TOTAL_MOVIES_COUNT, payload: 30};

        const result = movieReducer(initialState, action);

        expect(result.totalMoviesCount).toBe(30);
    });

    test('should delete movie', () => {
        const state = {
            movies: [{id: 1, title:'movie1'}, {id: 2, title:'movie2'}],
            offset: 2
        }
        const action = { type: movieActionTypes.DELETE_MOVIE, payload: 2};

        const result = movieReducer(state, action);

        expect(result.movies).toEqual([{id: 1, title:'movie1'}]);
        expect(result.offset).toBe(1);
    });

    test('should add movie', () => {
        const state = {
            movies: [{id: 1, title:'movie1'}],
            offset: 1
        }
        const action = { type: movieActionTypes.ADD_MOVIE, payload: {id: 2, title:'movie2'}};

        const result = movieReducer(state, action);

        expect(result.movies).toEqual([{id: 1, title:'movie1'}, {id: 2, title:'movie2'}]);
        expect(result.offset).toBe(2);
    });

    test('should update genres list', () => {
        const state = {
            movies: [{id: 1, title:'movie1', genres: ['comedy', 'horor']}, {id: 2, title:'movie2', genres:['thriller']}],
            offset: 2,
            genres: ['All']
        }
        const action = { type: movieActionTypes.UPDATE_GENRES, payload: null};

        const result = movieReducer(state, action);

        expect(result.genres).toEqual(['All', 'comedy', 'horor', 'thriller']);
    });  
    
    test('should reset movie results', () => {
        const action = { type: movieActionTypes.RESET_MOVIE_RESULTS, payload: null};

        const result = movieReducer(initialState, action);

        expect(result.movies).toEqual([]);
        expect(result.genres).toEqual(['All']);
        expect(result.offset).toBe(0);
    });
});
