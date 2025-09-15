import React from 'react';
import "./input.css"

const Input = ({ label, type, id, value, onChange, placeholder, required }) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className='main-input'
                required
            />
        </div>
    );
};

export default Input;