import React, { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Children from './children';

const Folder = ({ name, isOpen, handleOpen, index, items}) => {

  return (
    <div className='pfolder-contain'>
      <div className='fs-arrow' onClick={() => handleOpen(index)}>
        {isOpen ? (
          <KeyboardArrowDownIcon sx={{ fontSize: 24, marginBottom: '-2px', marginRight: '-5px' }} />
        ) : (
          <KeyboardArrowRightIcon sx={{ fontSize: 24, marginBottom: '-2px', marginRight: '-5px' }} />
        )}
        <p className='inter-for-files'>{name}</p>
      </div>
      {items && (
        <div className='child-content'>
          {items.map((item, itemIndex) => (
            <a href={'/' + item.toLowerCase()}>
              <Children
                key={itemIndex}
                childName={item}
                isOpen={isOpen}
                childIndex={itemIndex}
                items={items}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
