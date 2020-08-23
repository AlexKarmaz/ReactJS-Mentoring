import {hot} from "react-hot-loader";
import React from "react";
import Header from "./components/Header"
import Main from "./components/Main"
import MovieList from "./components/MovieList"
import Footer from "./components/Footer"
import Logo from "./components/Logo"
import "./App.css";

class App extends React.Component{
  render(){
    return (
      <>
        <Header/>
        <Main>
          <MovieList/>
        </Main>
        <Footer>
          <Logo/>
        </Footer>
      </>
    );
  }
}

export default hot(module)(App);