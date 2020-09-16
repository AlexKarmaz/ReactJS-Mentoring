import React from 'react';

const LabeledInput = ({title, name, type='text', value, onChange, placeholder, readOnly=false}) => (
    <label>
        {title}
        <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            readOnly={readOnly}
        />
    </label>
);

export default LabeledInput;
