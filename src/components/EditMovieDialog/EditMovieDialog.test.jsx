import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import EditMovieDialog from './EditMovieDialog';

describe('EditMovieDialog', () => {
  test('should be rendered correctly', () => {
    const initialState = {
        moviesData: {
          genres: ['Comedy', 'Drama', 'Horror'],
        },
        commonData: {
            movieForEdit: {}
        }
      };
    const store = configureStore([])(initialState);
    const form = mount(
      <Provider store={store}>
        <EditMovieDialog />
      </Provider>,
    );

    expect(form.find('.modalDialog-title').text()).toEqual('Edit movie');
    expect(form).toMatchSnapshot();
  });
});
