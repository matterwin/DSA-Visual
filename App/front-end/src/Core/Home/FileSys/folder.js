import React, { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Children from './children';

const Folder = ({ name, isOpen, handleOpen, index, items, list}) => {
  const [focusChildIndex, setFocusChildIndexes] = useState(list);
  const [cIndex, setcIndex] = useState(-1);

  const handleChildFocus = (index) => {
    if (focusChildIndex.includes(index)) {
      setFocusChildIndexes(focusChildIndex.filter((i) => i !== index));
      setcIndex(0);
    } else {
      setFocusChildIndexes([...focusChildIndex, index]);
      setcIndex(index);
    }

    console.log(index);
  };

  return (
    <div className='pfolder-contain'>
      <div className='fs-arrow' onClick={() => handleOpen(index)}>
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
            <Children
              childName={item}
              isOpen={isOpen}
              childIndex={itemIndex}
              items={items}
              onClick={handleChildFocus}
              cIndex={cIndex} // Pass cIndex as a prop
              setcIndex={setcIndex} // Pass setcIndex as a prop
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Folder;
