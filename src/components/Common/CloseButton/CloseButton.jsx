import React from 'react';
import './CloseButton.css';
import PropTypes from 'prop-types';
import closeIcon from '../../../../public/images/icon-x-white.png';

//PATTERN: Stateless component
const CloseButton = ({ size = 'medium', onClick }) => (
    <button className={`closeButton ${size}`} onClick={onClick}>
        <img className='closeButton-image' src={closeIcon} />
    </button>
);

CloseButton.propTypes = {
    /**
     * How large should the button be?
     */
    size: PropTypes.string,
    /**
     * Click handler
     */
    onClick: PropTypes.func.isRequired,
};

CloseButton.defaultProps = {
    size: 'medium',
};

export default CloseButton;
