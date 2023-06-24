import React, { useState } from 'react';
import './filesys.css';
import Folder from './folder';

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
        <Folder isOpen={openIndexes.includes(0)} handleOpen={handleOpen} index={0}>
          <p>Sort</p>
        </Folder>
        <Folder isOpen={openIndexes.includes(1)} handleOpen={handleOpen} index={1} children={0}>
          <p>Search</p>
        </Folder>
      </div>
    </div>
  );
};

export default Filesys;
