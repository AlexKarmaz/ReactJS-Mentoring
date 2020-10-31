import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import AddMovieDialog from './AddMovieDialog';

describe('AddMovieDialog', () => {
  test('should be rendered correctly', () => {
    const initialState = {
        moviesData: {
          genres: ['Comedy', 'Drama', 'Horror'],
        }
    };
    const store = configureStore([])(initialState);

    const form = mount(
      <Provider store={store}>
        <AddMovieDialog />
      </Provider>,
    );

    expect(form.find('.modalDialog-title').text()).toEqual('Add movie');
    expect(form).toMatchSnapshot();
  });
});
