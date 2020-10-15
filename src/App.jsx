import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store/store.js';
import React from 'react';
import HomePage from './containers/HomePage';
import './App.css';
   
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HomePage />
            </Provider>
        );
    }
}

export default hot(module)(App);
