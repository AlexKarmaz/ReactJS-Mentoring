import {hot} from "react-hot-loader";
import React from "react";
import "./App.css";
import MyReactComponent from './MyReactComponent'
import MyReactFunctionalComponent from './MyReactFunctionalComponent'

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1> Hello, World!!! </h1>
        <MyReactComponent/>
        <MyReactFunctionalComponent/>
      </div>
    );
  }
}

export default hot(module)(App);