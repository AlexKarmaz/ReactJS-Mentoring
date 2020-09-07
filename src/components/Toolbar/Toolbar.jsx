import React from 'react';
import './Toolbar.css';

const Toolbar = (props) => (
    <div className='toolbar'>
        <div className='leftToolbar'>{props.leftToolbar}</div>
        <div className='rightToolbar'>{props.rightToolbar}</div>
    </div>
);

export default Toolbar;
