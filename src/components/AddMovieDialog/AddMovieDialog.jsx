import React from 'react';
import ModalDialog from '../Common/ModalDialog';
import MovieForm from '../Common/MovieForm'
import { connect } from 'react-redux'
import {commonActions, movieActions} from '../../store/actions'

const AddMovieDialog = ({onClose, onConfirm, genres}) => (
    <ModalDialog dialogTitle='Add movie' onDialogClose={onClose}>
        <MovieForm onSubmit={onConfirm} genres={genres}/>
    </ModalDialog>
);

const mapStateToProps = (state) => ({
    genres: state.moviesData.genres,
})

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(commonActions.closeAddMovieDialog()),
    onConfirm: (data) => dispatch(movieActions.addMovie(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieDialog);
