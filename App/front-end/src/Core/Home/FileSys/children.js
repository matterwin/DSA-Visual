import React, { useState, useEffect } from 'react';

const Children = ({ childName, isOpen }) => {

  return (
    isOpen && (
      <div className={`children-contain`}>
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
