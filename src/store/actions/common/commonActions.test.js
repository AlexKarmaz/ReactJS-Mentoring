import * as commonActions from './commonActions.js';
import * as movieActionsTypes from '../movie/movieActionTypes.js';
import * as commonActionTypes from './commonActionTypes.js';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('commonActions', () => {
    test('should create an action to add movie dialog', () => {
        const expectedAction = {
            type: commonActionTypes.ADD_MOVIE_DIALOG,
            payload: true,
        };

        expect(commonActions.openAddMovieDialog()).toEqual(expectedAction);
    });

    test('should create an action to close movie dialog', () => {
        const action = commonActions.closeAddMovieDialog();
        expect(action.type).toEqual(commonActionTypes.ADD_MOVIE_DIALOG);
        expect(action.payload).toBeFalsy();
    });

    test('should create an action to set movie for deletion', () => {
        const movie = {};
        const action = commonActions.setMovieForDeletion(movie);
        expect(action.type).toEqual(commonActionTypes.SET_MOVIE_FOR_DELETION);
        expect(action.payload).toEqual(movie);
    });

    test('should create an action to close delete movie dialog', () => {
        const action = commonActions.closeDeleteMovieDialog();
        expect(action.type).toEqual(commonActionTypes.SET_MOVIE_FOR_DELETION);
        expect(action.payload).toEqual(null);
    });

    test('should create an action to set genre for filter', () => {
        const genre = {};
        const action = commonActions.setGenreForFilter(genre);
        expect(action.type).toEqual(commonActionTypes.SET_GENRE_FOR_FILTER);
        expect(action.payload).toEqual(genre);
    });

    test('should create an action to set order for sorting', () => {
        const order = {};
        const action = commonActions.setOrderForSorting(order);
        expect(action.type).toEqual(commonActionTypes.SET_ORDER_FOR_SORTING);
        expect(action.payload).toEqual(order);
    });

    test('should create an action to set search string', () => {
        const searchString = 'search';
        const action = commonActions.setSearchString(searchString);
        expect(action.type).toEqual(commonActionTypes.SET_SEARCH_STRING);
        expect(action.payload).toEqual(searchString);
    });

    test('should create an action to run search', () => {
        const searchString = 'search';
        const initialState = {};
        const store = mockStore(initialState);
        const expectedActions = [
            { type: movieActionsTypes.RESET_MOVIE_RESULTS, payload: null },
            { type: commonActionTypes.SET_SEARCH_STRING, payload: 'search' },
            { type: commonActionTypes.SET_GENRE_FOR_FILTER, payload: 'All' },
        ];

        store.dispatch(commonActions.search(searchString));

        expect(store.getActions()).toEqual(expectedActions);
    });
});
