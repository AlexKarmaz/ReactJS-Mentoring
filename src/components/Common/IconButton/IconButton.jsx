import React from 'react';
import './IconButton.css';

//PATTERN: Stateless component
const IconButton = ({size='medium', onClick, imgSrc}) => (
    <button className={`iconButton ${size}`} onClick={onClick}>
        <img className='iconButton-image' src={imgSrc} />
    </button>
);

export default IconButton;
