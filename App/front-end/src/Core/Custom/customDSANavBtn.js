import DataThresholdingOutlinedIcon from '@mui/icons-material/DataThresholdingOutlined';
import React, { useState, useEffect, useRef } from 'react';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Divider from '@mui/material/Divider';
import './customDSANavBtn.css';


function CustomDSANavBtn() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const [showDSABtn, setShowDSABtn] = useState(true)

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
            setShowDSABtn(true);
        }
    };

    return (
        <div>
            <div
                onClick={handleClick}
                className='dsa-menu-parent'
                ref={menuRef}
            >
                <div>
                    <GraphicEqOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.7, padding: '0', margin:'0', cursor: 'pointer', color:'#fff', fontSize:'25px' }}/>
                </div>
            </div>
            {isOpen &&
                <div className='dsa-nav-menu-div-contain'>

                    <p className='title-dsa'>SORT</p>
                    <div className='dsa-contain-flex'>
                        <p>Merge</p>
                    </div>
                    <div className='dsa-contain-flex'>
                        <p>Quick</p>
                    </div>
                    <div className='dsa-contain-flex'>
                        <p>Insertion</p>
                    </div>
                    <div className='dsa-contain-flex'>
                        <p>Selection</p>
                    </div>
                    <div className='dsa-contain-flex'>
                        <p>Bubble</p>
                    </div>
                    <Divider sx={{ backgroundColor: 'silver', marginTop:'10px', marginBottom:'10px' }} />

                    <p className='title-dsa'>SEARCH</p>
                    <div className='dsa-contain-flex'>
                        <p>Binary</p>
                    </div>
                    <div className='dsa-contain-flex'>
                        <p>DFS</p>
                    </div>
                    <div className='dsa-contain-flex'>
                        <p>BFS</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default CustomDSANavBtn;
