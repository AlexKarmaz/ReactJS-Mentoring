import React, {useCallback} from 'react';
import ModalDialog from '../Common/ModalDialog';

const DeleteMovieDialog = ({onClose}) => {
    const onDialogClose = useCallback(() => onClose(), [onClose]);

    return (
        <ModalDialog dialogTitle='Delete movie' onDialogClose={onDialogClose}>
            <p>Are you sure you want to delete this movie?</p>
            <button>Confirm</button>
        </ModalDialog>
    );
};

export default DeleteMovieDialog;
