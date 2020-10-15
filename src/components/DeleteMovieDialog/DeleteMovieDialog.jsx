import React from 'react';
import ModalDialog from '../Common/ModalDialog';
import StyledButton from '../Common/StyledButton';
import { connect } from 'react-redux'
import {movieActions, commonActions} from '../../store/actions'
import './DeleteMovieDialog.css'

const DeleteMovieDialog = ({ onClose, onDelete }) => {
    //const onDialogClose = useCallback(() => onClose(), [onClose]);
    //const onConfirmDeletion = useCallback(() => onDelete(), [onDelete]);

    return (
        <ModalDialog dialogTitle='Delete movie' onDialogClose={onClose}>
            <p>Are you sure you want to delete this movie?</p>
            <div className='deleteDialogConfirm-button'>
                <StyledButton
                    text='Confirm'
                    size='medium'
                    type='confirm'
                    onClick={onDelete}
                />
            </div>
        </ModalDialog>
    );
};

const mapDispatchToProps = (dispatch) => ({
    onClose: () => dispatch(commonActions.closeDeleteMovieDialog()),
    onDelete: () => dispatch(movieActions.deleteMovie())
})

export default connect(null, mapDispatchToProps)(DeleteMovieDialog);
