import React from 'react';
import ModalDialog from '../Common/ModalDialog'

const DeleteMovieDialog = () => (
    <ModalDialog dialogTitle='Delete movie' onDialogClose={() => console.log("CloseDialog")}>
        <p>Are you sure you want to delete this movie?</p>
        <button>Confirm</button>
    </ModalDialog>
);

export default DeleteMovieDialog;
