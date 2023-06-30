import React, { useState, useEffect } from 'react';

const Children = ({ childName, isOpen, childIndex, onClick, cIndex, setcIndex }) => {
  const [focusedIndex, setFocusedIndex] = useState(false);

  useEffect(() => {
    setFocusedIndex(cIndex);
  }, [cIndex]);

  const handleChildClick = () => {
    if (childIndex === focusedIndex) {
      setFocusedIndex(false);
      setcIndex(0);
    } else {
      setFocusedIndex(childIndex);
      setcIndex(childIndex);
    }
    onClick(childIndex);
  };

  return (
    isOpen && (
      <div className={`children-contain ${childIndex === focusedIndex ? 'clicked' : ''}`} onClick={handleChildClick}>
        <div className='children-content'>
          <div className='child1'>
            <p className='inter-for-files'>{childName}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Children;
