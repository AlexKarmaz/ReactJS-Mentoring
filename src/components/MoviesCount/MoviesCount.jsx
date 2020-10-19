import React from 'react';
import { connect } from 'react-redux'
import './MoviesCount.css';

const MoviesCount = ({totalMoviesCount}) => (
    <>
        {totalMoviesCount > 0 && (   
            <div className='moviesCount'>
                <span>
                    <b>{totalMoviesCount}</b> movies found
                </span>
            </div>
        )}
    </>
);

const mapStateToProps = (state) => ({
    totalMoviesCount: state.moviesData.totalMoviesCount
});

export default connect(mapStateToProps)(MoviesCount);
