import React from 'react';
import CloseButton from '../CloseButton';
import './ModalDialog.css';

const ModalDialog = ({dialogTitle, onDialogClose, children}) => {
    const onClose = useCallback(() => onDialogClose(), [onDialogClose]);

    return (
        <div className='modalDialog'>
            <h2 className='modalDialog-title'>{dialogTitle}</h2>
            <div className='modalDialog-content'>
                {children}
            </div>
            {props.children}
            <CloseButton onClick={onClose} size='medium' />
         </div>
    );
};

export default ModalDialog;
