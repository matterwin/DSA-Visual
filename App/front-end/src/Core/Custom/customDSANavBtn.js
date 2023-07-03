import DataThresholdingOutlinedIcon from '@mui/icons-material/DataThresholdingOutlined';
import React, { useState, useEffect, useRef } from 'react';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CustomizedTooltip from './customTooltip';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';
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
                <CustomizedTooltip title={"Visuals"}>
                    <div className="nav-link-div-icons">
                        <GraphicEqOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.7, padding: '0', margin:'0', cursor: 'pointer', color:'#fff', fontSize:'25px' }}/>
                    </div>
                </CustomizedTooltip>
            </div>
            {isOpen &&
                <div className='dsa-nav-menu-div-contain'>

                    <p className='title-dsa'>SORT</p>
                    <NavLink end to="/visuals/test">
                        <div className='dsa-contain-flex'>
                            <p>Test</p>
                        </div>
                    </NavLink>
                    <NavLink end to="/visuals/merge">
                        <div className='dsa-contain-flex'>
                            <p>Merge</p>
                        </div>
                    </NavLink>
                    <NavLink end to="/visuals/quick">
                        <div className='dsa-contain-flex'>
                            <p>Quick</p>
                        </div>
                    </NavLink>
                    <NavLink end to="/visuals/insertion">
                        <div className='dsa-contain-flex'>
                            <p>Insertion</p>
                        </div>
                    </NavLink>
                    <NavLink end to="/visuals/selection">
                        <div className='dsa-contain-flex'>
                            <p>Selection</p>
                        </div>
                    </NavLink>
                    <NavLink end to="/visuals/bubble">
                        <div className='dsa-contain-flex'>
                            <p>Bubble</p>
                        </div>
                    </NavLink>

                    <Divider sx={{ backgroundColor: 'silver', marginTop:'10px', marginBottom:'10px' }} />

                    <p className='title-dsa'>SEARCH</p>
                    <NavLink end to="/visuals/binarysearch">
                        <div className='dsa-contain-flex'>
                            <p>Binary</p>
                        </div>
                    </NavLink>
                    <NavLink end to="/visuals/dfs">
                        <div className='dsa-contain-flex'>
                            <p>DFS</p>
                        </div>
                    </NavLink>
                    <NavLink end to="/visuals/bfs">
                        <div className='dsa-contain-flex'>
                            <p>BFS</p>
                        </div>
                    </NavLink>                                        
                </div>
            }
        </div>
    );
}

export default CustomDSANavBtn;
