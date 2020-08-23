import React from 'react';

const MovieCard = (props) => (
    <div className="movieCard">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <p>{props.year}</p>
    </div>
);

MovieCard.defaultProps = {
    title: "Title",
    description: "Descriprion",
    year: "Some year"
}

export default MovieCard
