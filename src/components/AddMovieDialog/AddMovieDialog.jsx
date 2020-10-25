import React from 'react';
import ModalDialog from '../Common/ModalDialog';
import MovieFormWithFormik from '../Common/MovieFormWithFormik'
import { connect } from 'react-redux'
import {commonActions, movieActions} from '../../store/actions'

const AddMovieDialog = ({onClose, onConfirm, genres}) => (
    <ModalDialog dialogTitle='Add movie' onDialogClose={onClose}>
        <MovieFormWithFormik onSubmit={onConfirm} genres={genres}/>
    </ModalDialog>
);

const mapStateToProps = (state) => ({
    genres: state.moviesData.genres.filter((genre) => genre !== 'All'),
})

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(commonActions.closeAddMovieDialog()),
    onConfirm: (data) => dispatch(movieActions.addMovie(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieDialog);
