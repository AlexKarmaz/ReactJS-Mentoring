import React, {useCallback} from 'react';
import Logo from '../Logo';
import Search from '../Search';
import StyledButton from '../Common/StyledButton'
import IconButton from '../Common/IconButton'
import MoviePreview from '../MoviePreview'
import searhIcon from '../../../public/images/searchIcon-white.jpg';
import './Header.css';

const Header = ({onAddMovie, moviePreview=false, onBackToSearch}) => {
    const onAddMovieClick = useCallback(() => onAddMovie(), [onAddMovie]);
    const onSearchIconClick = useCallback(() => onBackToSearch(), [onBackToSearch]);

    return (
        <header className='header'>
            <div className='headerWrapper'>
                <Logo />
                {moviePreview
                    ?  <IconButton
                        size={'medium'}
                        onClick={onSearchIconClick}
                        imgSrc={searhIcon}
                        />
                    : <StyledButton
                        text='+ Add movie'
                        size='medium'
                        type='action'
                        onClick={onAddMovieClick}
                        />
                }
            </div>
            {moviePreview
                ? <MoviePreview movie={moviePreview}/>
                : <Search />
            }
        </header>
    );
};

export default Header;
