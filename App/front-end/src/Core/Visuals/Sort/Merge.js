import React, { useState, useEffect } from 'react';
import '../visuals.css';
import './merge.css';

const Merge = () => {
  const [array, setArray] = useState([]);
  const initRanNum = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

  useEffect(() => {
    generateArray();
  }, []);
  
  function generateArray() {
    const newArray = [];
    for (let i = 0; i < initRanNum; i++) {
      newArray.push(Math.floor(Math.random() * (100 - 5 + 1)) + 5);
    }
    setArray(newArray);
  }

  const calculateFontSize = () => {
    const maxLength = 60; // Define the maximum length of the array
    const minLength = 10; // Define the minimum length of the array
    const maxSize = 32; // Define the maximum font size
    const minSize = 16; // Define the minimum font size

    const length = array.length;
    const fontSize =
      ((maxLength - length) / (maxLength - minLength)) * (maxSize - minSize) + minSize;

    return Math.round(fontSize);
  }

  return (
    <div className='visuals-container'>
      <div className='box-contain'>
        <button onClick={generateArray}>gen</button>
          <div className='row-contain-bar'>
            {array.map((value, index) => (
              <div
                key={index}
                className='bars'
                style={{
                  height: value / 2 + 'px',
                  color: '#fff',
                  backgroundColor: '#fff',
                  border: '1px solid #ccc',
                  fontSize: calculateFontSize(),
                }}
              >
                {value}
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default Merge;
