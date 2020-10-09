import React, {useCallback} from 'react';
import ModalDialog from '../Common/ModalDialog';
import MovieForm from '../Common/MovieForm'
import { connect } from 'react-redux'
import {movieActions} from '../../store/actions'

const EditMovieDialog = ({onClose, movieForEdit, onConfirm, genres}) => {
    const onDialogClose = useCallback(() => onClose(), [onClose]);
    const onSubmit = useCallback((data) => onConfirm(data), [onConfirm]);

    return (
        <ModalDialog dialogTitle='Edit movie' onDialogClose={onDialogClose}>
            <MovieForm
                onSubmit={onSubmit}
                movieData={movieForEdit}
                genres={genres}
            />
        </ModalDialog>
    );
};

const mapStateToProps = (state) => ({
    movieForEdit: state.moviesData.movieForEdit,
    genres: state.moviesData.genres,
});

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(movieActions.closeEditMovieDialog()),
    onConfirm: (data) => dispatch(movieActions.editMovie(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieDialog);
