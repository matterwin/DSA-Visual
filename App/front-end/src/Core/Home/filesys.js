import React, { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './filesys.css';

const Filesys = () => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(!open)
	}

  return (
    <div className='filesys-container'>
        <div className='file-container'>
			<div className='parent-container'>
				<div className='parent-folder' onClick={handleOpen}>
					<div>
						{!open && <KeyboardArrowRightIcon  sx={{ fontSize: 24, marginBottom: '-5px', marginRight: '-2px' }}/>}
						{open && <KeyboardArrowDownIcon  sx={{ fontSize: 24, marginBottom: '-5px', marginRight: '-2px'}}/>}
					</div>
					<div>
						<p className='parent-tag'>Sorting</p>
					</div>
				</div>
				<div className='parent-folder'>
					<p>Trees</p>
				</div>
				<div className='parent-folder'>
					<p>Graphs</p>
				</div>
				<div className='parent-folder'>
					<p>Traversals</p>
				</div>
			</div>
		</div>
    </div>
  )
}

export default Filesys