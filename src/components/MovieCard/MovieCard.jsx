import React from 'react';
import './MovieCard.css'
import defaultPoster from '../../../public/images/defaultPoster.jpg';

const MovieCard = (props) => (
    <div className="movieCard">
        <img className="moviePoster" src={props.img}/>
        <div className="movieInfo">
            <h3>{props.title}</h3>
            <p className="movieYear">{props.year}</p>
        </div>
        <p className="movieDescription">{props.description}</p>
    </div>
);

MovieCard.defaultProps = {
    img: defaultPoster,
    title: "Title",
    description: "Descriprion",
    year: "Some year"
}

export default MovieCard
