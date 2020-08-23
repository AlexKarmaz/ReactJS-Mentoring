import React from 'react';
import MovieCard from '../MovieCard'

let movies = [
    {
        title: "Pulp Fiction",
        description: "Action & Adventure",
        year: "2004",
        id: "001"
    },
    {
        title: "Bohemian Rhapsody",
        description: "Drama, Biography",
        year: "2003",
        id: "002"
    },
    {
        title: "Kill Bill",
        description: "Oscar winning Movie",
        year: "1994",
        id: "003"
    }
]

const MovieList = (props) => (
    <>
        {movies.map((movie) => (
            <MovieCard
                title={movie.title}
                description={movie.description}
                year={movie.year} 
                key={movie.id}
            />
        ))}
    </>
);

export default MovieList
