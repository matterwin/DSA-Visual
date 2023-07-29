import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Children from './children';

import './filesys.css'

const Folder = ({ name, isOpen, handleOpen, index, items, file, handleClick}) => {

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
            <div
              key={itemIndex}
            >
              <Children
                key={itemIndex}
                childName={item}
                isOpen={isOpen}
                childIndex={itemIndex}
                items={items}
                focusOnFile={file.includes(item)}
                handleClick={handleClick}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
