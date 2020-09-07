import React from 'react';
import Header from '../../components/Header';
import Toolbar from '../../components/Toolbar';
import Main from '../../components/Main';
import MovieList from '../../components/MovieList';
import MoviesCount from '../../components/MoviesCount';
import Filter from '../../components/Filter';
import Footer from '../../components/Footer';
import Logo from '../../components/Logo';
import Sorting from '../../components/Sorting';
import ErrorBoundary from '../../components/Common/ErrorBoundary';

class HomePage extends React.Component {
    render() {
        return (
            <>
                <Header />
                <Main>
                    <Toolbar
                        leftToolbar={<Filter />}
                        rightToolbar={<Sorting />}
                    />
                    <MoviesCount />
                    <ErrorBoundary>
                        <MovieList />
                    </ErrorBoundary>
                </Main>
                <Footer>
                    <Logo />
                </Footer>
            </>
        );
    }
}

export default HomePage;
