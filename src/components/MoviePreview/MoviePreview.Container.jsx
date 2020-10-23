import React, { useEffect, useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import MoviePreview from './MoviePreview';
import { movieActions } from '../../store/actions';

const MoviePreviewContainer = ({loadMovieById, searchString}) => {
  const { id } = useParams();
  const history = useHistory();
  const movie = useMemo(() => loadMovieById(id), [id]);
//   useEffect(() => {
//     if (!movie) {
//         alert('There is no movie with such id:' + id);
//         history.goBack();
//     }
//   }, [movie, id]);

  const onBackToSearch = useCallback(() => history.push(`/search/${searchString}`),
    [history, searchString]
  );

  return movie ? <MoviePreview movie={movie} onBackToSearch={onBackToSearch} /> : null;
};

const mapStateToProps = (state) => ({
  searchString: state.commonData.searchString,
});

const mapDispatchToProps = (dispatch) => ({
    loadMovieById: (id) => dispatch(movieActions.getMovieById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePreviewContainer);
