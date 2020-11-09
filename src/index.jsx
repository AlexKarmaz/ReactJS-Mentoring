import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import createStore from './store/store.js';

let preloadedState = {};

if (typeof window !== 'undefined') {
  // Grab the state from a global variable injected into the server-generated HTML
  preloadedState = window.__PRELOADED_STATE__;

  // Allow the passed state to be garbage-collected
  delete window.__PRELOADED_STATE__;
}

ReactDOM.hydrate(
    <React.StrictMode>
        <App  Router={BrowserRouter} store={createStore(preloadedState)} />
    </React.StrictMode>, 
    document.getElementById("root")
);
