import React from 'react';
import './Filter.css';

const Filter = (props) => (
    <ul className='filterList'>
        <li className='filterListItem active'>All</li>
        <li className='filterListItem'>Documentary</li>
        <li className='filterListItem'>Comedy</li>
        <li className='filterListItem'>Horror</li>
        <li className='filterListItem'>Crime</li>
    </ul>
);

export default Filter;
