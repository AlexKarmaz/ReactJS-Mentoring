import React, {useEffect} from 'react';
import CloseButton from '../CloseButton';
import PropTypes from 'prop-types';
import './ModalDialog.css';

const ModalDialog = ({dialogTitle, onDialogClose, children}) => {
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

ModalDialog.propTypes = {
    /**
     * Dialog title text
     */
    dialogTitle: PropTypes.string,
    /**
     * Close button handler
     */
    onDialogClose: PropTypes.func.isRequired,
};

ModalDialog.defaultProps = {
    dialogTitle: 'Dialog title',
};

export default ModalDialog;
