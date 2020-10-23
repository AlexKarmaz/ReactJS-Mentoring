import React from 'react';
import Search from '../Search';
import MoviePreview from '../MoviePreview';
import {
    Switch,
    Route,
    useRouteMatch,
    Redirect,
} from 'react-router';
import './Header.css';

const Header = () => {
    const { path } = useRouteMatch();

    return (
        <header className='header'>
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

export default Header;
