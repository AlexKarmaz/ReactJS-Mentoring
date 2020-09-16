import React, { useCallback } from 'react';
import ModalDialog from '../Common/ModalDialog';
import StyledButton from '../Common/StyledButton';
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

export default DeleteMovieDialog;
