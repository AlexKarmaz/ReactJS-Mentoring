import React from 'react';
import './Search.css';

const Search = () => (
    <div className='searchWrapper'>
        <h1 className='searchTitle'>Find your movie</h1>
        <div className='search'>
            <input
                className='searchInput'
                type='text'
                placeholder='What do you want to watch?'
            />
            <button className='searchButton'>Search</button>
        </div>
    </div>
);

export default Search;
