import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router';
import MoviePreview from './MoviePreview';
import { movieActions, commonActions } from '../../store/actions';

//PATTERN: Container component
const MoviePreviewContainer = ({loadMovieById, searchString, updateMovies, setSearchString}) => {
  const { id } = useParams();
  const history = useHistory();
  let movie = loadMovieById(id);

  useEffect(() => {
    if (!movie && history.location.state) {
      updateMovies({data:history.location.state.filteredMovies, offset:history.location.state.offset});
      setSearchString(history.location.state.searchString);
    } else if(!movie && !history.location.state){
      alert('There is no movie with such id:' + id);
      history.goBack();
    }
  }, [movie, loadMovieById, id, updateMovies, setSearchString, history]);

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
    updateMovies: (movies) => dispatch(movieActions.addMovies(movies)),
    setSearchString: (searchStr) => dispatch(commonActions.setSearchString(searchStr))
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePreviewContainer);
