import React, {useCallback} from 'react';
import StyledButton from '../StyledButton'
import './MovieForm.css'

const MovieForm = ({onSubmit, onReset}) => {
    const onFormSubmit = useCallback(() => onSubmit(), [onSubmit]);
    const onFormReset = useCallback(() => onReset(), [onReset]);

    return (
        <form className='movieForm' onSubmit={onFormSubmit}>
            <p>MovieForm</p>
            <div className='movieForm-footer'>
                <StyledButton
                    text='Reset'
                    size='medium'
                    type='reset'
                    onClick={onFormReset}
                />
                <StyledButton
                    text='Submit'
                    size='medium'
                    type='confirm'
                    onClick={onFormSubmit}
                />
            </div>
        </form>
    );
};

export default MovieForm;
