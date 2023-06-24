import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Children from './children';

const Folder = ({ isOpen, handleOpen, index, children }) => {
  return (
    <div className='pfolder-contain' onClick={() => handleOpen(index)}>
      <div className='fs-arrow'>
        {isOpen ? (
          <KeyboardArrowDownIcon sx={{ fontSize: 24, marginBottom: '-2px', marginRight: '-5px' }} />
        ) : (
          <KeyboardArrowRightIcon sx={{ fontSize: 24, marginBottom: '-2px', marginRight: '-5px' }} />
        )}
        {children}
      </div>
      <Children isOpen={isOpen} />
    </div>
  );
};

export default Folder;
