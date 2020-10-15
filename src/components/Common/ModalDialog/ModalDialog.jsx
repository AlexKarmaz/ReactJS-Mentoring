import React, {useEffect} from 'react';
import CloseButton from '../CloseButton';
import './ModalDialog.css';

const ModalDialog = ({dialogTitle, onDialogClose, children}) => {
    //const onClose = useCallback(() => onDialogClose(), [onDialogClose]);

    useEffect (() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'visible';
        };
    }, []);

    return (
        <div className='modalDialog-overlay'>
            <div className='modalDialog'>
                <h2 className='modalDialog-title'>{dialogTitle}</h2>
                <div className='modalDialog-content'>
                    {children}
                </div>
                <CloseButton onClick={onDialogClose} size='medium' />
            </div>
        </div>
    );
};

export default ModalDialog;
