import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import './customMenu.css';

function CustomMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

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
        }
    };

    return (
        <div>
            <div
                onClick={handleClick}
                className='menu-parent'
                ref={menuRef}
            >
                <div>
                    <p>test</p>
                </div>
            </div>
            {isOpen &&
                <div className='menu-div-contain'>
                    <div className='menu-div-flex'>
                        <NavLink end to="/chat" className='custom-navlink'>
                            <div className='custom-menu-row-div'>
                                <SettingsOutlinedIcon sx={{ color: '#efeff1', fontSize: '20px' }} />
                                <p style={{ fontSize: '15px' }}>Settings</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            }
        </div>
    );
}

export default CustomMenu;
