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
import DeleteMovieDialog from '../../components/DeleteMovieDialog';
import EditMovieDialog from '../../components/EditMovieDialog';
import AddMovieDialog from '../../components/AddMovieDialog';

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

    const [movieForDeletion, setMovieForDeletion] = useState();
    const [movieForEdit, setMovieForEdit] = useState();
    const [addNewMovie, setAddNewMovie] = useState(false);

    const closeDialog = () => {
        setMovieForDeletion(null);
        setMovieForEdit(null);
        setAddNewMovie(false);
    };

    const onMovieEdit = (movie) => {
        setMovieForEdit(movie)
    }

    // const editMovieById = (movieId) => {
    //     console.log('Edit ' + movieId);
    // }

    const onMovieDelete = (movieId) => {
        setMovieForDeletion(movieId);
    }

    const deleteSelectedMovie = () => {
        console.log('Deleted movie with ID:' + movieForDeletion);
        setMovieForDeletion(null);
    }

    const onAddMovie = () =>  {
        setAddNewMovie(true);
    }
    
    return (
        <>
            <Header onAddMovie={onAddMovie} />
            <Main>
                <Toolbar leftToolbar={<Filter />} rightToolbar={<Sorting options={sortingOptions}/>} />
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
                    onDelete={deleteSelectedMovie}
                />
            )}
            {movieForEdit && (
                <EditMovieDialog
                    onClose={closeDialog}
                    movieForEdit={movieForEdit}
                />
            )}
            {addNewMovie && (
                <AddMovieDialog
                    onClose={closeDialog}
                />
            )}
        </>
    );
}

export default HomePage;
