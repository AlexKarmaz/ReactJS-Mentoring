import React from 'react';
import MovieCard from '../MovieCard';
import './MovieList.css';

const MovieList = ({ movieList, onMovieDelete, onMovieEdit}) => {

    return (
        <div className='movieList'>
            {movieList.map((movie) => (
                <MovieCard
                    key={movie.id}
                    details={movie}
                    onMovieDelete={onMovieDelete}
                    onMovieEdit={onMovieEdit}
                />
            ))}
        </div>
    );
};

export default MovieList;
