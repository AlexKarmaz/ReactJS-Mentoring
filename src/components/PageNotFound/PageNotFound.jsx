import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton from '../Common/StyledButton'
import notFoundImage from '../../../public/images/404.png';

import './PageNotFound.css';

const PageNotFound = () => (
    <div className='pageNotFound'>
        <h1 className='pageNotFound-title'>Page not found</h1>
        <img src={notFoundImage} />
        <Link to="/">
            <StyledButton
                text='Go back to home'
                size='medium'
                type='reset'
            />
        </Link>
    </div>
);

export default PageNotFound;
