import React, {useState} from 'react';
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
import DeleteMovieDialog from '../../components/DeleteMovieDialog'

const HomePage = () => {
    const movies = [
        {
            title: 'Pulp Fiction',
            description: 'Action & Adventure',
            year: '2004',
            id: '001',
        },
        {
            title: 'Bohemian Rhapsody',
            description: 'Drama, Biography',
            year: '2003',
            id: '002',
        },
        {
            title: 'Kill Bill',
            description: 'Oscar winning Movie',
            year: '1994',
            id: '003',
        },
        {
            title: 'Pulp Fiction 2',
            description: 'Action & Adventure',
            year: '2004',
            id: '004',
        },
        {
            title: 'Bohemian Rhapsody 2',
            description: 'Drama, Biography',
            year: '2003',
            id: '005',
        },
        {
            title: 'Kill Bill 2',
            description: 'Oscar winning Movie',
            year: '1994',
            id: '006',
        },
    ];

    const [movieForDeletion, setMovieForDeletion] = useState();

    const closeDialog = () => {
        setMovieForDeletion(null);
      };

    const onMovieEdit = (movieId) => {
        editMovieById(movieId);
    }

    const editMovieById = (movieId) => {
        console.log('Edit ' + movieId);
    }

    const onMovieDelete = (movieId) => {
        setMovieForDeletion(movieId);
    }

    // const deleteMovieById = (movieId) => {
    //     console.log('Deleted film with ID:' + movieId);
    // }
    
    return (
        <>
            <Header />
            <Main>
                <Toolbar leftToolbar={<Filter />} rightToolbar={<Sorting />} />
                <MoviesCount />
                <ErrorBoundary>
                    <MovieList
                        movieList={movies}
                        onMovieEdit={onMovieEdit}
                        onMovieDelete={onMovieDelete}
                    />
                </ErrorBoundary>
            </Main>
            <Footer>
                <Logo />
            </Footer>
            {movieForDeletion && (
                <DeleteMovieDialog
                    onClose={closeDialog}
                    // onDelete={processFilmDeletion}
                />
            )}
        </>
    );
    
}

export default HomePage;
