import React from 'react';
import './StyledButton.css';

const StyledButton = ({size='medium', onClick, text, type='confirm', className}) => (
    <button type='button' className={`styledButton ${className} ${size} ${type}`} onClick={onClick}>
        {text}
    </button>
);

export default StyledButton;
