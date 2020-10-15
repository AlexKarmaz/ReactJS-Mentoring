import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import MovieSettings from '../MovieSettings'
import './MovieCard.css';
import defaultPoster from '../../../public/images/defaultPoster.jpg';

const MovieCard = ({ movieItem, onClick, onMovieDelete, onMovieEdit}) => {
    const [hovered, setHovered] = useState(false);
    const [src, setSrc] = useState(movieItem.poster_path);

    useEffect(() => setSrc(movieItem.poster_path), [movieItem.poster_path]);

    const onEdit = useCallback(() => onMovieEdit(movieItem), [
        onMovieEdit,
        movieItem,
    ]);
    const onDelete = useCallback(() => onMovieDelete(movieItem.id), [
        onMovieDelete,
        movieItem,
    ]);
    const onMovieClick = useCallback(() => onClick(movieItem), [
        onClick
    ]);

    const replaceToDefaultPoster = () => setSrc(defaultPoster);

    return (
        <div 
            className='movieCard'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img onClick={onMovieClick} className='moviePoster'  onError={replaceToDefaultPoster} src={src ? src : defaultPoster} />
            <div className='movieInfo'>
                <h3>{movieItem.title}</h3>
                <p className='movieYear'>{new Date(movieItem.release_date).getFullYear()}</p>
            </div>
            <p className='movieGenre'>{movieItem.genres.toString()}</p>
            <MovieSettings onDelete={onDelete} onEdit={onEdit} isHovered={hovered}/>
        </div>
    )
};

MovieCard.defaultProps = {
    movieItem: {
        poster_path: defaultPoster,
        genres: 'genres',
        release_date: 'Some year',
    },
};

MovieCard.propTypes = {
    movieItem: PropTypes.shape({
        poster_path: PropTypes.string,
        release_date: PropTypes.string,
    }).isRequired,
};

export default MovieCard;
