import React from 'react';
import Logo from '../Logo';
import Search from '../Search';
import StyledButton from '../Common/StyledButton'
import IconButton from '../Common/IconButton'
import MoviePreview from '../MoviePreview'
import searhIcon from '../../../public/images/searchIcon-white.jpg';
import { connect } from 'react-redux'
import {commonActions} from '../../store/actions'
import './Header.css';

const Header = ({onAddMovie, moviePreview=false, onBackToSearch}) => (
    <header className='header'>
        <div className='headerWrapper'>
            <Logo />
            {moviePreview
                ?  <IconButton
                    size={'medium'}
                    onClick={onBackToSearch}
                    imgSrc={searhIcon}
                    />
                : <StyledButton
                    text='+ Add movie'
                    size='medium'
                    type='action'
                    onClick={onAddMovie}
                    />
            }
        </div>
        {moviePreview
            ? <MoviePreview movie={moviePreview}/>
            : <Search />
        }
    </header>
);

const mapStateToProps = (state) => ({
    moviePreview: state.commonData.moviePreview,
})
  
const mapDispatchToProps = (dispatch) => ({
    onAddMovie: () => dispatch(commonActions.openAddMovieDialog()),
    onBackToSearch: () => dispatch(commonActions.setMoviePreview(null))
})
  
export default connect(mapStateToProps, mapDispatchToProps)(Header);
