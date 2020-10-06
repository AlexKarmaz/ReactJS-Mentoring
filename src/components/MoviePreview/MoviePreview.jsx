import React, { useState, useEffect } from 'react';
import defaultPoster from '../../../public/images/defaultPoster.jpg';
import './MoviePreview.css'

const MoviePreview = ({movie}) => {
    const [src, setSrc] = useState(movie.poster_path);

    useEffect(() => setSrc(movie.poster_path), [movie.poster_path]);

    const replaceToDefaultPoster = () => setSrc(defaultPoster);

    return (
        <div className='moviePreview'>
            <img className='moviePoster' onError={replaceToDefaultPoster} src={src ? src : defaultPoster} />
            <div className='movieDetails'>
                <h1 className='movieTitle'>{movie.title}</h1>
                <p className='movieRating'>{movie.vote_average}</p>
                <p className='movieTagline'>{movie.tagline}</p>
                <p className='movieYear'>{new Date(movie.release_date).getFullYear()}</p>
                <p className="movieRuntime">{movie.runtime} {' min'}</p>
                <p className='movieDescription'>{movie.overview}</p>
            </div>
        </div>
    )
};

MoviePreview.defaultProps = {
    movie: {
        poster_path: defaultPoster,
        vote_average: 0.0,
        overview: 'Descriprion',
        release_date: 'Some year',
    },
};

export default MoviePreview;
