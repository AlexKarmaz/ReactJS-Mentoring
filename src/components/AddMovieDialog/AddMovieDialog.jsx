import React, {useCallback} from 'react';
import ModalDialog from '../Common/ModalDialog';
import MovieForm from '../Common/MovieForm'
import { connect } from 'react-redux'
import {commonActions, movieActions} from '../../store/actions'

const AddMovieDialog = ({onClose, onConfirm, genres}) => {
    const onDialogClose = useCallback(() => onClose(), [onClose]);
    const onSubmit = useCallback((data) => onConfirm(data), [onConfirm]);

    return (
        <ModalDialog dialogTitle='Add movie' onDialogClose={onDialogClose}>
            <MovieForm onSubmit={onSubmit} genres={genres}/>
        </ModalDialog>
    );
};

const mapStateToProps = (state) => ({
    genres: state.moviesData.genres,
})

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(commonActions.closeAddMovieDialog()),
    onConfirm: (data) => dispatch(movieActions.addMovie(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieDialog);
