import DataThresholdingOutlinedIcon from '@mui/icons-material/DataThresholdingOutlined';
import React, { useState, useEffect, useRef } from 'react';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CustomizedTooltip from './customTooltip';
import Divider from '@mui/material/Divider';
import './customDSANavBtn.css';
import './customDSABtnReplica.css';


function CustomDSANavBtnReplica() {
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
                <div className='vis-sub-nav-boxes-active'>
                    <div className='sub-nav-icon-contain'>
                    <GraphicEqOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.4, padding: '0', margin:'0', cursor: 'pointer', color:'#bbb', fontSize:'20px' }}/>
                      <p className='sub-nav-p'>Visuals</p>
                    </div>
                </div>
            </div>
            {isOpen &&
                <div className='rep-dsa-nav-menu-div-contain'>

                    <p className='title-dsa'>Sort</p>
                    <a href="/visuals/test">
                        <div className='dsa-contain-flex'>
                            <p>Test</p>
                        </div>
                    </a>
                    <a href="/visuals/merge">
                        <div className='dsa-contain-flex'>
                            <p>Merge</p>
                        </div>
                    </a>
                    <a href="/visuals/quick">
                        <div className='dsa-contain-flex'>
                            <p>Quick</p>
                        </div>
                    </a>
                    <a href="/visuals/insertion">
                        <div className='dsa-contain-flex'>
                            <p>Insertion</p>
                        </div>
                    </a>
                    <a href="/visuals/selection">
                        <div className='dsa-contain-flex'>
                            <p>Selection</p>
                        </div>
                    </a>
                    <a href="/visuals/bubble">
                        <div className='dsa-contain-flex'>
                            <p>Bubble</p>
                        </div>
                    </a>

                    <Divider sx={{ backgroundColor: 'silver', marginTop:'10px', marginBottom:'10px' }} />

                    <p className='title-dsa'>Search</p>
                    <a href="/visuals/binarysearch">
                        <div className='dsa-contain-flex'>
                            <p>Binary</p>
                        </div>
                    </a>
                    <a href="/visuals/dfs">
                        <div className='dsa-contain-flex'>
                            <p>DFS</p>
                        </div>
                    </a>
                    <a href="/visuals/bfs">
                        <div className='dsa-contain-flex'>
                            <p>BFS</p>
                        </div>
                    </a>                                        
                </div>
            }
        </div>
    );
}

export default CustomDSANavBtnReplica;
