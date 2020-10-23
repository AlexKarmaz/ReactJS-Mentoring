import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Toolbar from '../Toolbar';
import Main from '../Main';
import MovieList from '../MovieList';
import MoviesCount from '../MoviesCount';
import Filter from '../Filter';
import Footer from '../Footer';
import Logo from '../Logo';
import Sorting from '../Sorting';
import ErrorBoundary from '../Common/ErrorBoundary';
import DeleteMovieDialog from '../DeleteMovieDialog';
import EditMovieDialog from '../EditMovieDialog';
import AddMovieDialog from '../AddMovieDialog';
import NoFoundMovies from '../NoFoundMovies';
import MoviesLoader from '../MoviesLoader';
import {commonActions} from '../../store/actions';
import { useHistory, useLocation } from 'react-router';

const HomePage = ({
    filteredMovies,
    addMovieDialog,
    movieForDeletion,
    setMovieForDeletion,
    setMoviePreview,
    movieForEdit,
    setMovieForEdit,
    setOrderForSorting
}) => {
    const sortingOptions = [
        {
            id: 'title001',
            title: 'Title',
            onClick: () => setOrderForSorting('title'),
        },
        {
            id: 'release_date002',
            title: 'Release date',
            onClick: () => setOrderForSorting('release_date'),
        },
        {
            id: 'vote_average003',
            title: 'Rating',
            onClick: () => setOrderForSorting('vote_average'),
        },
    ];

    const history = useHistory();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const onMovieClick = useCallback((movie) => {
        setMoviePreview(movie);
        history.push(`/films/${movie.id}`);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [history]);

    return (
        <>
            <Header />
            <Main>
                <Toolbar
                    leftToolbar={<Filter />}
                    rightToolbar={<Sorting options={sortingOptions}/>}
                />
                <MoviesCount />
                <ErrorBoundary>
                    {filteredMovies.length > 0 && (
                        <>
                            <MovieList
                                movieList={filteredMovies}
                                onMovieEdit={setMovieForEdit}
                                onMovieDelete={setMovieForDeletion}
                                onMovieClick={onMovieClick}
                            />
                            <MoviesLoader/>
                        </>
                    )}
                    {filteredMovies.length === 0 && (
                        <NoFoundMovies/>
                    )}
                </ErrorBoundary>
            </Main>
            <Footer>
                <Logo />
            </Footer>
            {movieForDeletion && <DeleteMovieDialog />}
            {movieForEdit && <EditMovieDialog />}
            {addMovieDialog && <AddMovieDialog />}
        </>
    );
};

const mapStateToProps = (state) => ({
    filteredMovies: state.moviesData.movies
        .filter((movie) =>
            state.commonData.genreForFilter == 'All' ||
            movie.genres.includes(state.commonData.genreForFilter)
        )
        .sort((a, b) => {
            if (a[state.commonData.orderForSorting] > b[state.commonData.orderForSorting]) {
                return -1;
            }
            return 1;
        }),
    addMovieDialog: state.commonData.addMovieDialog,
    movieForDeletion: state.commonData.movieForDeletion,
    movieForEdit: state.commonData.movieForEdit,
});

const mapDispatchToProps = (dispatch) => ({
    setMovieForDeletion: (movieId) => dispatch(commonActions.setMovieForDeletion(movieId)),
    setMoviePreview: (movie) => dispatch(commonActions.setMoviePreview(movie)),
    setMovieForEdit: (movie) => dispatch(commonActions.setMovieForEdit(movie)),
    setOrderForSorting: (order) => dispatch(commonActions.setOrderForSorting(order)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
