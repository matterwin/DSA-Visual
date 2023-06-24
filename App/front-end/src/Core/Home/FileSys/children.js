import React from 'react';

const Children = ({ childName, isOpen }) => {
  return (
    isOpen && (
      <div className='children-contain'>
        <div className='children-content'>
          <div className='child1'>
            <p>{childName}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Children;
