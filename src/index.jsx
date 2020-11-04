import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.hydrate(
    <React.StrictMode>
        <App  Router={BrowserRouter}/>
    </React.StrictMode>, 
    document.getElementById("root")
);
