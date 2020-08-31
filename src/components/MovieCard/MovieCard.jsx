import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import MovieSettings from '../MovieSettings'
import './MovieCard.css';
import defaultPoster from '../../../public/images/defaultPoster.jpg';

const MovieCard = ({ details, onMovieDelete, onMovieEdit}) => {
    const [hovered, setHovered] = useState(false);
    const onEdit = useCallback(() => onMovieEdit(details), [
        onMovieEdit,
        details,
    ]);
    const onDelete = useCallback(() => onMovieDelete(details.id), [
        onMovieDelete,
        details,
    ]);

    return (
        <div 
            className='movieCard'
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img className='moviePoster' src={details.img ? details.img : defaultPoster} />
            <div className='movieInfo'>
                <h3>{details.title}</h3>
                <p className='movieYear'>{details.year}</p>
            </div>
            <p className='movieDescription'>{details.description}</p>
            <MovieSettings onDelete={onDelete} onEdit={onEdit} isHovered={hovered}/>
        </div>
    )
};

MovieCard.defaultProps = {
    details: {
        img: defaultPoster,
        description: 'Descriprion',
        year: 'Some year',
    },
};

MovieCard.propTypes = {
    details: PropTypes.shape({
        img: PropTypes.string,
        description: PropTypes.string,
        year: PropTypes.string,
    }).isRequired,
};

export default MovieCard;
