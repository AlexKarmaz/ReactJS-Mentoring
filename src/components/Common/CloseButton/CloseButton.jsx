import React from 'react';
import './CloseButton.css'
import closeIcon from '../../../../public/images/icon-x-white.png';

const CloseButton = ({size='medium', onClick}) => (
    <button className={`closeButton ${size}`} onClick={onClick}>
        <img className='closeButton-image' src={closeIcon} />
    </button>
);

export default CloseButton;
