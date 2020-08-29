import { hot } from 'react-hot-loader';
import React from 'react';
import HomePage from './containers/HomePage';
import './App.css';
   
class App extends React.Component {
    render() {
        return (
            <HomePage />
        );
    }
}

export default hot(module)(App);
