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
            genre: 'Action & Adventure',
            description:
                'Action & Adventure Action & Adventure Action & Adventure Action & Adventure',
            year: '2004',
            rating: '4.3',
            runtime: '125 min',
            id: '001',
        },
        {
            title: 'Bohemian Rhapsody',
            genre: 'Drama, Biography',
            description:
                'Drama, Biography Drama, BiographyDrama, Biography Drama, Biography',
            year: '2003',
            rating: '4.3',
            runtime: '125 min',
            id: '002',
        },
        {
            title: 'Kill Bill',
            genre: 'Oscar winning Movie',
            description:
                'Oscar winning Movie Oscar winning Movie Oscar winning Movie Oscar winning Movie Oscar winning  car winning Movie TEST TEST TEST TEST TEST  V Movie TEST TEST TEST TEST TEST  V ',
            year: '1994',
            rating: '4.3',
            runtime: '125 min',
            id: '003',
        },
        {
            title: 'Pulp Fiction 2',
            genre: 'Action & Adventure',
            description:
                'Action & Adventure Action & Adventure Action & Adventure Action & Adventure',
            year: '2004',
            rating: '4.3',
            runtime: '125 min',
            id: '004',
        },
        {
            title: 'Bohemian Rhapsody 2',
            genre: 'Drama, Biography',
            description:
                'Drama, Biography Drama, Biography Drama, Biography Drama, Biography',
            year: '2003',
            rating: '4.3',
            runtime: '125 min',
            id: '005',
        },
        {
            title: 'Kill Bill 2',
            genre: 'Oscar winning Movie',
            description:
                'Oscar winning Movie Oscar winning Movie Oscar winning Movie',
            year: '1994',
            rating: '4.3',
            runtime: '125 min',
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
    const [moviePreview, setMoviePreview] = useState();
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

    const onMovieClick = (movie) => {
        setMoviePreview(movie);
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
    
    return (
        <>
            <Header onAddMovie={onAddMovie} moviePreview={moviePreview} onBackToSearch={() => setMoviePreview(undefined)}/>
            <Main>
                <Toolbar leftToolbar={<Filter />} rightToolbar={<Sorting options={sortingOptions}/>} />
                <MoviesCount />
                <ErrorBoundary>
                    <MovieList
                        movieList={movies}
                        onMovieEdit={onMovieEdit}
                        onMovieDelete={onMovieDelete}
                        onMovieClick={onMovieClick}
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
