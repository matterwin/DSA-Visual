import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from "react-router-dom";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import deleteCookies from '../../Cookies/deleteCookies';
import Divider from '@mui/material/Divider';
import CustomizedTooltip from './customTooltip';
import DefaultPic from '../profilePics/pika.png';
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
                <div className="cust-pfp-div">
                    <CustomizedTooltip title={"Profile"}>
                        <img className="cust-profile-pic" src={DefaultPic} alt="ProfilePicture" />      
                    </CustomizedTooltip>  
                </div>
            </div>
            {isOpen &&
                <div className='menu-div-contain'>
                    <NavLink end to="/Profile">
                        <div className='contain-flex'>
                            <div className='custom-menu-row-div'>
                                <Person2OutlinedIcon sx={{color:'#efeff1', fontSize:'20px'}}/>
                                <p style={{fontSize:'15px', fontFamily: 'Inter', color:'#fff'}}>Profile</p>
                            </div>
                        </div>
                    </NavLink>

                    <NavLink end to="/chat" className='custom-navlink'>
                        <div className='contain-flex'>                          
                            <div className='custom-menu-row-div'>
                                <SettingsOutlinedIcon sx={{ color: '#efeff1', fontSize: '20px' }} />
                                <p style={{ fontSize: '15px', fontFamily: 'Inter', color:'#fff' }}>Settings</p>
                            </div>                           
                        </div>
                    </NavLink>

                    <Divider sx={{ backgroundColor: 'silver', marginTop:'5px', marginBottom:'5px' }} />

                    <NavLink className='custom-navlink' onClick={() => {deleteCookies(); window.location.href = '/';}}>
                        <div className='contain-flex'> 
                            <div className='custom-menu-row-div'>
                                <LogoutOutlinedIcon sx={{color:'#efeff1', fontSize:'20px', transform: 'scaleX(-1)',}}/>
                                <p style={{fontSize:'15px', fontFamily: 'Inter', color:'#fff'}}>Log out</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
            }
        </div>
    );
}

export default CustomMenu;
