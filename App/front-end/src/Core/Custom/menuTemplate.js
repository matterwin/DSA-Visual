import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import './customMenu.css';

function MenuTemplate() {
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
                    <p>Insert your icon here</p>
                </div>
            </div>
            {isOpen &&
                <div className='menu-div-contain'>

                    <NavLink end to="/insertendpointhere" className='custom-navlink'>
                        <div className='contain-flex'>                          
                            <div className='custom-menu-row-div'>
                                <SettingsOutlinedIcon sx={{ color: '#efeff1', fontSize: '20px' }} />
                                <p style={{ fontSize: '15px' }}>Settings</p>
                            </div>                           
                        </div>
                    </NavLink>
                    
                </div>
            }
        </div>
    );
}

export default MenuTemplate;
