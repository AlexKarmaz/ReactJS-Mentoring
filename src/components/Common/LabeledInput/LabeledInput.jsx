import React from 'react';

const LabeledInput = () => (
    <label htmlFor={id}>
        {title}
        <input
            id={id}
            name={name}
            type={type}
            style={{ disabled }}
            value={value}
            onChange={onChange}
        />
    </label>
);
