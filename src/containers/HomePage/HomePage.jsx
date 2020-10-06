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
    movies,
    loadedMoviesCount,
    loadMovies,
    addMovieDialog,
    movieForDeletion,
    setMovieForDeletion,
    setMoviePreview,
    movieForEdit,
    setMovieForEdit
}) => {
    const sortingOptions = [
        {
            id: '011',
            title: 'Release date',
            onClick: () => console.log('Release date'),
        },
        {
            id: '022',
            title: 'Title',
            onClick: () => console.log('Title'),
        },
    ];

    const onMovieClick = (movie) => {
        setMoviePreview(movie);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    useEffect(() => loadMovies(), [loadMovies]);

    return (
        <>
            <Header />
            <Main>
                <Toolbar
                    leftToolbar={<Filter />}
                    rightToolbar={<Sorting options={sortingOptions} />}
                />
                <MoviesCount />
                <ErrorBoundary>
                    {loadedMoviesCount > 0 && (
                        <MovieList
                            movieList={movies}
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
    movies: state.moviesData.movies,
    loadedMoviesCount: state.moviesData.movies.length,
    addMovieDialog: state.commonData.addMovieDialog,
    movieForDeletion: state.moviesData.movieForDeletion,
    movieForEdit: state.moviesData.movieForEdit,
});

const mapDispatchToProps = (dispatch) => ({
    loadMovies: () => dispatch(movieActions.loadMovies()),
    setMovieForDeletion: (movieId) => dispatch(movieActions.setMovieForDeletion(movieId)),
    setMoviePreview: (movie) => dispatch(movieActions.setMoviePreview(movie)),
    setMovieForEdit: (movie) => dispatch(movieActions.setMovieForEdit(movie))
});
  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
