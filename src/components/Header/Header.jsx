import React from 'react';
import Logo from '../Logo';
import Search from '../Search';
import StyledButton from '../Common/StyledButton'
import './Header.css';

const Header = () => (
    <header className='header'>
        <div className='headerWrapper'>
            <Logo />
            <StyledButton
                text='+ Add movie'
                size='medium'
                type='action'
                onClick={() => console.log('film added')}
            />
        </div>
        <Search />
    </header>
);

export default Header;
