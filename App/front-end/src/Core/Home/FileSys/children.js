import React from 'react';

const Children = ({ childName, isOpen, focusOnFile, handleClick }) => {
  return (
    isOpen && (
      <div className={`children-contain`}>
        <div className={focusOnFile === true ? 'children-content-active' : 'children-content'} onClick={() => handleClick(childName)}>
          <div className='child1'>
            <p className='inter-for-files'>{childName}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default Children;
