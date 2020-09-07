import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';
import defaultPoster from '../../../public/images/defaultPoster.jpg';

const MovieCard = (props) => (
    <div className='movieCard'>
        <img className='moviePoster' src={props.img} />
        <div className='movieInfo'>
            <h3>{props.title}</h3>
            <p className='movieYear'>{props.year}</p>
        </div>
        <p className='movieDescription'>{props.description}</p>
    </div>
);

MovieCard.defaultProps = {
    img: defaultPoster,
    description: 'Descriprion',
    year: 'Some year',
};

MovieCard.propTypes = {
    title: PropTypes.string.isRequired,
};

export default MovieCard;
