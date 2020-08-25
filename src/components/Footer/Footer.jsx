import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = (props) => <div className='footer'>{props.children}</div>;

Footer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default Footer;
