import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store/store.js';
import React from 'react';
import HomePage from './containers/HomePage';
import PageNotFound from './components/PageNotFound';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route path='*'>
                            <PageNotFound/>
                        </Route>    
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default hot(module)(App);
