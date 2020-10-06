import React, { useCallback } from 'react';
import ModalDialog from '../Common/ModalDialog';
import StyledButton from '../Common/StyledButton';
import { connect } from 'react-redux'
import {movieActions} from '../../store/actions'
import './DeleteMovieDialog.css'

const DeleteMovieDialog = ({ onClose, onDelete }) => {
    const onDialogClose = useCallback(() => onClose(), [onClose]);
    const onConfirmDeletion = useCallback(() => onDelete(), [onDelete]);

    return (
        <ModalDialog dialogTitle='Delete movie' onDialogClose={onDialogClose}>
            <p>Are you sure you want to delete this movie?</p>
            <div className='deleteDialogConfirm-button'>
                <StyledButton
                    text='Confirm'
                    size='medium'
                    type='confirm'
                    onClick={onConfirmDeletion}
                />
            </div>
        </ModalDialog>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(movieActions.closeDeleteMovieDialog()),
    onDelete: () => dispatch(movieActions.deleteMovie())
})

export default connect(null, mapDispatchToProps)(DeleteMovieDialog);
