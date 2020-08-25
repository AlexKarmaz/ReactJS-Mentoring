import React from 'react';
import Logo from '../Logo';
import AddMovie from '../AddMovie';
import Search from '../Search';
import './Header.css';

const Header = () => (
    <header className='header'>
        <div className='headerWrapper'>
            <Logo />
            <AddMovie />
        </div>
        <Search />
    </header>
);

export default Header;
