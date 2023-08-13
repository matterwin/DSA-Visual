import React from 'react';

import './customForms.css';

const CustomForms = ({ label, defaultValue, value, onChange, showTextAreaInstead }) => {
    return (
      <div className='form-div'>
            <label className='label-text'>{label}</label>
            {
                !showTextAreaInstead &&
                <input
                    type="text"
                    value={value}
                    onChange={(event) => onChange(event.target.value)} // Use the provided onChange function
                    className='input-box-profile'
                />
            }
            {
                showTextAreaInstead &&
                <textarea
                    value={value}
                    onChange={(event) => onChange(event.target.value)} // Use the provided onChange function
                    className='textarea-box-profile'
                />
            }
      </div>
    )
  }
  

export default CustomForms