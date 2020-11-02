import * as movieActions from './movieActions.js';
import * as movieActionTypes from './movieActionTypes.js';
import {getMovies} from '../../../services/movieService.js';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock('../../../services/movieService.js', () => ({
    getMovies: jest.fn(() => Promise.resolve({data: ''})),
}));

describe('movieActions', () => {
    test('should create an action to set total movies count', () => {
        const count = 10;
        const action = movieActions.setTotalMoviesCount(count);
        expect(action.type).toEqual(movieActionTypes.SET_TOTAL_MOVIES_COUNT);
        expect(action.payload).toEqual(count);
    });

    test('should create an action to run movies loading', () => {
        const initialState = {
            commonData: {
                searchString: '',
            },
            moviesData: {
                offset: 0,
            },
        };
        const store = mockStore(initialState);

        const expectedActions = [
            { type: movieActionTypes.ADD_MOVIES, payload: {data: ''} },
            { type: movieActionTypes.UPDATE_GENRES, payload: null },
        ];

        return store.dispatch(movieActions.loadMovies(false)).then(() => {
            const actions = store.getActions();
            expect(actions).toEqual(expectedActions);
            expect(getMovies).toHaveBeenCalled();
        });
    });
});
