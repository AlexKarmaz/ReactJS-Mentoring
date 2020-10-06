import React from 'react';
import MovieCard from '../MovieCard';
import './MovieList.css';

const MovieList = ({ movieList, onMovieClick, onMovieDelete, onMovieEdit}) => {

    return (
        <div className='movieList'>
            {movieList.map((movie) => (
                <MovieCard
                    key={movie.id}
                    movieItem={movie}
                    onMovieDelete={onMovieDelete}
                    onMovieEdit={onMovieEdit}
                    onClick={onMovieClick}
                />
            ))}
        </div>
    );
};

export default MovieList;
