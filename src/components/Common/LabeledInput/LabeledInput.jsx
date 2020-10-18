import React from 'react';
import './LabeledInput.css';

const LabeledInput = ({
    title,
    name,
    type = 'text',
    value,
    onChange,
    placeholder,
    readOnly = false,
    onBlur,
    validationError = '',
}) => (
    <>
        <label>
            {title}
            <input
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                readOnly={readOnly}
                onBlur={onBlur}
            />
        </label>
        {validationError !== '' && <p className="labeledInput-error">{validationError}</p>}
    </>
);

export default LabeledInput;
