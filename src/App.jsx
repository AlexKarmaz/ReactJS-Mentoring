import {hot} from "react-hot-loader";
import React from "react";
import Header from "./components/Header"
import "./App.css";

class App extends React.Component{
  render(){
    return (
      <>
        <Header/>
      </>
    );
  }
}

export default hot(module)(App);