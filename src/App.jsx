import {hot} from "react-hot-loader";
import React from "react";
import Header from "./components/Header"
import Toolbar from "./components/Toolbar"
import Main from "./components/Main"
import MovieList from "./components/MovieList"
import MoviesCount from "./components/MoviesCount"
import Filter from "./components/Filter"
import Footer from "./components/Footer"
import Logo from "./components/Logo"
import Sorting from "./components/Sorting"
import "./App.css";

class App extends React.Component{
  render(){
    return (
      <>
        <Header/>
        <Main>
          <Toolbar
            leftToolbar={<Filter/>}
            rightToolbar={<Sorting/>}
          />
          <MoviesCount/>
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