import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import store from './store/store.js';
import React from 'react';
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';
import './App.css';

const App = ({ Router, location, context }) => (
    <Provider store={store}>
        <Router  location={location} context={context}>
            <Switch>
                <Route exact path='/404'>
                    <PageNotFound />
                </Route>
                <Route path='/' component={HomePage} />
            </Switch>
        </Router>
    </Provider>
);

export default hot(module)(App);
