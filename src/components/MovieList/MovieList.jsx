import React from 'react';
import MovieCard from '../MovieCard'
import './MovieList.css'

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
    },
    {
        title: "Pulp Fiction 2",
        description: "Action & Adventure",
        year: "2004",
        id: "004"
    },
    {
        title: "Bohemian Rhapsody 2",
        description: "Drama, Biography",
        year: "2003",
        id: "005"
    },
    {
        title: "Kill Bill 2",
        description: "Oscar winning Movie",
        year: "1994",
        id: "006"
    }
]

const MovieList = (props) => (
    <div className="movieList"> 
        {movies.map((movie) => (
            <MovieCard
                title={movie.title}
                description={movie.description}
                year={movie.year} 
                key={movie.id}
            />
        ))}
    </div>
);

export default MovieList
