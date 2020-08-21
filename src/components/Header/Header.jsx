import React from 'react';
import Logo from "../Logo";
import AddMovie from "../AddMovie"
import SearchMovie from '../SearchMovie';
import './Header.css';
import img from '../../../public/images/searchBackground.jpg';

const Header = () => (
    <header className="header">
        <div className="headerWrapper">
            <Logo/>
            <AddMovie/>
        </div>
        <h1>FIND YOUR MOVIE</h1>
        <SearchMovie/>
        <img src="../../../public/images/searchBackground.jpg" alt=""/>
    </header>
);

export default Header