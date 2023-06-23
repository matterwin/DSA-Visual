import React, { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './filesys.css';

const Filesys = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleOpen = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <div className='fs-contain'>
      <div className='fs-folders-contain'>
        <div className='pfolder-contain'>
          <div className='fs-arrow' onClick={() => handleOpen(0)}>
            {openIndexes.includes(0) ? (
              <KeyboardArrowDownIcon sx={{ fontSize: 24, marginBottom: '-2px', marginRight: '-5px' }} />
            ) : (
              <KeyboardArrowRightIcon sx={{ fontSize: 24, marginBottom: '-2px', marginRight: '-5px' }} />
            )}
            <p>Sort</p>
          </div>
          <div className='children-container'>
            {openIndexes.includes(0) && (
              <>
                <p>Merge</p>
                <p>Quick</p>
              </>
            )}
          </div>
        </div>
        <div className='pfolder-contain' onClick={() => handleOpen(1)}>
          <div className='fs-arrow'>
            {openIndexes.includes(1) ? (
              <KeyboardArrowDownIcon sx={{ fontSize: 24, marginBottom: '-2px', marginRight: '-5px' }} />
            ) : (
              <KeyboardArrowRightIcon sx={{ fontSize: 24, marginBottom: '-2px', marginRight: '-5px' }} />
            )}
            <p>Search</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filesys;
