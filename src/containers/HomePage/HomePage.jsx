import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
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
import DeleteMovieDialog from '../../components/DeleteMovieDialog';
import EditMovieDialog from '../../components/EditMovieDialog';
import AddMovieDialog from '../../components/AddMovieDialog';
import {movieActions} from '../../store/actions'

const HomePage = ({
    filteredMovies,
    loadedMoviesCount,
    loadMovies,
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

    const onMovieClick = (movie) => {
        setMoviePreview(movie);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {loadMovies()}, [loadMovies], []);

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
                    {loadedMoviesCount > 0 && (
                        <MovieList
                            movieList={filteredMovies}
                            onMovieEdit={setMovieForEdit}
                            onMovieDelete={setMovieForDeletion}
                            onMovieClick={onMovieClick}
                        />
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
            state.moviesData.genreForFilter == 'All' ||
            movie.genres.includes(state.moviesData.genreForFilter)
        )
        .sort((a, b) => {
            if (a[state.moviesData.orderForSorting] > b[state.moviesData.orderForSorting]) {
                return -1;
            }
            return 1;
        }),
    loadedMoviesCount: state.moviesData.movies.length,
    addMovieDialog: state.commonData.addMovieDialog,
    movieForDeletion: state.moviesData.movieForDeletion,
    movieForEdit: state.moviesData.movieForEdit,
});

const mapDispatchToProps = (dispatch) => ({
    loadMovies: () => dispatch(movieActions.loadMovies()),
    setMovieForDeletion: (movieId) => dispatch(movieActions.setMovieForDeletion(movieId)),
    setMoviePreview: (movie) => dispatch(movieActions.setMoviePreview(movie)),
    setMovieForEdit: (movie) => dispatch(movieActions.setMovieForEdit(movie)),
    setOrderForSorting: (order) => dispatch(movieActions.setOrderForSorting(order)),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
