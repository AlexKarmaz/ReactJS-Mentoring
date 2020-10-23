import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import MoviePreview from './MoviePreview';
import { movieActions } from '../../store/actions';

const MoviePreviewContainer = ({loadMovieById}) => {
  const { id } = useParams();
  //const history = useHistory();
  const movie = useMemo(() => loadMovieById(id), [id]);

//   useEffect(() => {
//     if (!movie) {
//         alert('There is no movie with such id:' + id);
//         history.goBack();
//     }
//   }, [movie, id]);

  return movie ? <MoviePreview movie={movie} /> : null;
};

const mapDispatchToProps = (dispatch) => ({
    loadMovieById: (id) => dispatch(movieActions.getMovieById(id)),
});

export default connect(null, mapDispatchToProps)(MoviePreviewContainer);
