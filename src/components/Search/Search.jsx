import React from 'react';
import './Search.css';

const Search = () => (
    <div className="searchWrapper">
        <h1 className="searchTitle">FIND YOUR MOVIE</h1>
        <div className="search">
            <input className="searchInput" type="text" placeholder="What do you want to watch?"/>
            <button className="searchButton">SEARCH</button>
        </div>
    </div>
);

export default Search