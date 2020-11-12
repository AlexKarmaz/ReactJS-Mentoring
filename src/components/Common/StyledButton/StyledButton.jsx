import React from 'react';
import PropTypes from 'prop-types';
import './StyledButton.css';

const StyledButton = ({size='medium', onClick, text, type='confirm', className}) => (
    <button type='button' className={`styledButton ${className} ${size} ${type}`} onClick={onClick}>
        {text}
    </button>
);

StyledButton.propTypes = {
    /**
     * How large should the button be?
     */
    size: PropTypes.string,
    /**
     * Click handler
     */
    onClick: PropTypes.func.isRequired,
    /**
     * Text for the button
     */
    text: PropTypes.string,
    /**
     * Button type
     */
    type: PropTypes.string,
    /**
     * CSS class
     */
    className: PropTypes.string,
};

StyledButton.defaultProps = {
    size: 'medium',
    text: 'button',
    className: 'className'
};

export default StyledButton;
