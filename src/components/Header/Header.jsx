import React, {useCallback} from 'react';
import Logo from '../Logo';
import Search from '../Search';
import StyledButton from '../Common/StyledButton'
import './Header.css';

const Header = ({onAddMovie}) => {
    const onAddMovieClick = useCallback(() => onAddMovie(), [onAddMovie]);

    return (
        <header className='header'>
            <div className='headerWrapper'>
                <Logo />
                <StyledButton
                    text='+ Add movie'
                    size='medium'
                    type='action'
                    onClick={onAddMovieClick}
                />
            </div>
            <Search />
        </header>
    );
};

export default Header;
