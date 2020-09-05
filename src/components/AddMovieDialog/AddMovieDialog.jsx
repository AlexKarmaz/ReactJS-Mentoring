import React, {useCallback} from 'react';
import ModalDialog from '../Common/ModalDialog';
import MovieForm from '../Common/MovieForm'
import './AddMovieDialog.css';

const AddMovieDialog = ({onClose}) => {
    const onDialogClose = useCallback(() => onClose(), [onClose]);

    return (
        <ModalDialog dialogTitle='Add movie' onDialogClose={onDialogClose}>
            <MovieForm onReset={onDialogClose} onSubmit={() => console.log('submit')}/>
        </ModalDialog>
    );
};

export default AddMovieDialog
