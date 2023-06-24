import React from 'react';

const Children = ({ isOpen }) => {
  return (
    isOpen && (
      <div className='children-contain'>
        <div className='children-content'>
          <div className='child1'>
            <p>Merge</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Children;
