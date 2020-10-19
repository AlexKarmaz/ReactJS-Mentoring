import React from 'react';
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
import NoFoundMovies from '../../components/NoFoundMovies'
import {commonActions} from '../../store/actions'

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

    const onMovieClick = (movie) => {
        setMoviePreview(movie);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

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
                        <MovieList
                            movieList={filteredMovies}
                            onMovieEdit={setMovieForEdit}
                            onMovieDelete={setMovieForDeletion}
                            onMovieClick={onMovieClick}
                        />
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
