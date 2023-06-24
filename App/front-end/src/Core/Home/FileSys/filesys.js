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
        <Folder name='Sort' isOpen={openIndexes.includes(0)} handleOpen={handleOpen} index={0} items={['Merge', 'Quick', 'Insertion']}/>
      </div>
    </div>
  );
};

export default Filesys;
