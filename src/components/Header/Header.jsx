import React from 'react';
import Logo from "../Logo";
import AddMovie from "../AddMovie"
import SearchMovie from '../SearchMovie';
import './Header.css';
//import img from '../../../public/images/headerBackground.jpg';

const Header = () => (
    <header className="header">
        <div className="headerWrapper">
            <Logo/>
            <AddMovie/>
        </div>
        <h1>FIND YOUR MOVIE</h1>
        <SearchMovie/>

    </header>
);

export default Header