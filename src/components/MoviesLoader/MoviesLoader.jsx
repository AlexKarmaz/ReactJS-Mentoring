import React from 'react';
import { connect } from 'react-redux'
import StyledButton from '../Common/StyledButton'
import {movieActions} from '../../store/actions'
import './MoviesLoader.css';

const MoviesLoader = ({loadMovies}) => (
    <div className="moviesLoader">
        <StyledButton text='Load more' size='medium' type='confirm' onClick={loadMovies} />
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    loadMovies: () => dispatch(movieActions.loadMovies(false))
})
  
export default connect(null, mapDispatchToProps)(MoviesLoader);
