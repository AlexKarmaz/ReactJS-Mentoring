import React, {useCallback} from 'react';
import ModalDialog from '../Common/ModalDialog';
import MovieForm from '../Common/MovieForm'

const EditMovieDialog = ({onClose, movieForEdit}) => {
    const onDialogClose = useCallback(() => onClose(), [onClose]);

    return (
        <ModalDialog dialogTitle='Edit movie' onDialogClose={onDialogClose}>
            <MovieForm
                onReset={onDialogClose}
                onSubmit={() => console.log('Edited')}
                movieData={movieForEdit}
            />
        </ModalDialog>
    );
};

export default EditMovieDialog
