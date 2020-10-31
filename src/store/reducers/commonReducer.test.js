import * as commonActionTypes from '../actions/common/commonActionTypes';
import commonReducer from './commonReducer';

const initialState = {
    addMovieDialog: false,
    movieForDeletion: null,
    movieForEdit: null,
    genreForFilter: 'All',
    orderForSorting: 'title',
    searchString: ''
};

describe('commonReducer', () => {
    test('should return the initial state', () => {
        const result = commonReducer(undefined, {});

        expect(result).toEqual(initialState);
    });

    test('should set addMovieDialog to true', () => {
        const action = { type: commonActionTypes.ADD_MOVIE_DIALOG, payload: true };
        const result = commonReducer(initialState, action);

        expect(result.addMovieDialog).toBeTruthy();
    });

    test('should set movie for deletion', () => {
        const movie = {};
        const action = { type: commonActionTypes.SET_MOVIE_FOR_DELETION, payload: movie };
        const result = commonReducer(initialState, action);

        expect(result.movieForDeletion).toEqual(movie);
    });

    test('should set movie for edit', () => {
        const movie = {};
        const action = { type: commonActionTypes.SET_MOVIE_FOR_EDIT, payload: movie };
        const result = commonReducer(initialState, action);

        expect(result.movieForEdit).toEqual(movie);
    });

    test('should set genre for filter', () => {
        const genre = 'comedy';
        const action = { type: commonActionTypes.SET_GENRE_FOR_FILTER, payload: genre };
        const result = commonReducer(initialState, action);

        expect(result.genreForFilter).toEqual(genre);
    });

    test('should set order for sorting', () => {
        const order = 'date';
        const action = { type: commonActionTypes.SET_ORDER_FOR_SORTING, payload: order };
        const result = commonReducer(initialState, action);

        expect(result.orderForSorting).toEqual(order);
    });

    test('should set search string', () => {
        const searchString = 'test';
        const action = { type: commonActionTypes.SET_SEARCH_STRING, payload: searchString };
        const result = commonReducer(initialState, action);

        expect(result.searchString).toEqual(searchString);
    });
});
