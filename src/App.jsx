import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './store/store.js';
import React from 'react';
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route exact path='/404'>
                            <PageNotFound/>
                        </Route>    
                        <Route path='/' component={HomePage} />
                    </Switch>
                </Router>
            </Provider>
        );
    }
}

export default hot(module)(App);
