import React from 'react';
import defaultPoster from '../../../public/images/defaultPoster.jpg';
import './MoviePreview.css'

const MoviePreview = ({movie}) => (
    <div className='moviePreview'>
        <img src={movie.img ? movie.img : defaultPoster} />
        <div className='movieDetails'>
            <h1 className='movieTitle'>{movie.title}</h1>
            <p className='movieRating'>{movie.rating}</p>
            <p className='movieGenre'>{movie.genre}</p>
            <p className='movieYear'>{movie.year}</p>
            <p className="movieRuntime">{movie.runtime}</p>
            <p className='movieDescription'>{movie.description}</p>
        </div>
    </div>
);

MoviePreview.defaultProps = {
    movie: {
        img: defaultPoster,
        rating: 0.0,
        description: 'Descriprion',
        year: 'Some year',
    },
};

export default MoviePreview;
