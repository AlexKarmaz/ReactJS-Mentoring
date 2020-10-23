import React, { useCallback } from 'react';
import Logo from '../Logo';
import Search from '../Search';
import StyledButton from '../Common/StyledButton';
import IconButton from '../Common/IconButton';
import MoviePreview from '../MoviePreview';
import searhIcon from '../../../public/images/searchIcon-white.jpg';
import { connect } from 'react-redux';
import { commonActions } from '../../store/actions';
import {
    Switch,
    Route,
    useRouteMatch,
    Redirect,
    useHistory,
} from 'react-router';
import './Header.css';

const Header = ({ onAddMovie, moviePreview = false, resetMoviePreview, searchString }) => {
    const { path } = useRouteMatch();
    const history = useHistory();

    const onBackToSearch = useCallback(
        () => {
            history.push(`/search/${searchString}`);
            resetMoviePreview();
        },
        [history, resetMoviePreview, searchString]
    );

    return (
        <header className='header'>
            <div className='headerWrapper'>
                <Logo />
                {moviePreview ? (
                    <IconButton
                        size={'medium'}
                        onClick={onBackToSearch}
                        imgSrc={searhIcon}
                    />
                ) : (
                    <StyledButton
                        text='+ Add movie'
                        size='medium'
                        type='action'
                        onClick={onAddMovie}
                    />
                )}
            </div>
            <Switch>
                <Route exact path={`${path}films/:id`}>
                    <MoviePreview />
                </Route>
                <Route exact path={[path, `${path}search/:searchQuery`, `${path}search/`]}>
                    <Search />
                </Route>
                <Redirect to='/404' />
            </Switch>
        </header>
    );
};

const mapStateToProps = (state) => ({
    moviePreview: state.commonData.moviePreview,
    searchString: state.commonData.searchString,
});

const mapDispatchToProps = (dispatch) => ({
    onAddMovie: () => dispatch(commonActions.openAddMovieDialog()),
    resetMoviePreview: () => dispatch(commonActions.setMoviePreview(null))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
