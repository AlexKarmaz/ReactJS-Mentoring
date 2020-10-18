import React from 'react';
import ModalDialog from '../Common/ModalDialog';
import MovieFormWithFormik from '../Common/MovieFormWithFormik'
import { connect } from 'react-redux'
import {movieActions, commonActions} from '../../store/actions'

const EditMovieDialog = ({onClose, movieForEdit, onConfirm, genres}) => (
    <ModalDialog dialogTitle='Edit movie' onDialogClose={onClose}>
        <MovieFormWithFormik
            onSubmit={onConfirm}
            movieData={movieForEdit}
            genres={genres}
        />
    </ModalDialog>
);

const mapStateToProps = (state) => ({
    movieForEdit: state.commonData.movieForEdit,
    genres: state.moviesData.genres,
});

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(commonActions.closeEditMovieDialog()),
    onConfirm: (data) => dispatch(movieActions.editMovie(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditMovieDialog);
