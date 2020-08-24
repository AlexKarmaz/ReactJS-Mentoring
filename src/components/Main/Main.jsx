import React from 'react';
import PropTypes from 'prop-types';
import './Main.css'

const Main = (props) => (
    <div className="main">
        {props.children}
    </div>
);

Main.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
};

export default Main
