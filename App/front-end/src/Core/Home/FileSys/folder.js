import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Children from './children';

const Folder = ({ name, isOpen, handleOpen, index, items }) => {
  return (
    <div className='pfolder-contain' onClick={() => handleOpen(index)}>
      <div className='fs-arrow'>
        {isOpen ? (
          <KeyboardArrowDownIcon sx={{ fontSize: 24, marginBottom: '-2px', marginRight: '-5px' }} />
        ) : (
          <KeyboardArrowRightIcon sx={{ fontSize: 24, marginBottom: '-2px', marginRight: '-5px' }} />
        )}
        <p>{name}</p>
      </div>
      {items && (
        <div className='child-content'>
          {items.map((item, itemIndex) => (
            <Children childName={item} isOpen={isOpen} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
