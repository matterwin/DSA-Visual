import React, { useState, useEffect, useRef } from 'react';
import { a } from "react-router-dom";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import deleteCookies from '../../Cookies/deleteCookies';
import Divider from '@mui/material/Divider';
import CustomizedTooltip from './customTooltip';
import { getData } from '../../UserAuth/UserContext';
import './customMenu.css';
import readCookies from '../../Cookies/readCookies';

function CustomMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const username = readCookies('name');
    const pp = readCookies('pp')
    const userData = getData();

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

    const handleLogout = () => {
        deleteCookies('auth-token'); 
        deleteCookies('name'); 
        deleteCookies('pp');
        deleteCookies('showChat') 
        // Deleting items from localStorage
        localStorage.removeItem('name');
        localStorage.removeItem('color');
        localStorage.removeItem('first');
        localStorage.removeItem('last');
        localStorage.removeItem('pic');
        window.location.href = '/';
    }

    return (
        <div>
            <div
                onClick={handleClick}
                className='menu-parent'
                ref={menuRef}
            >
                <CustomizedTooltip title={"Profile"} color="#f8f8f8" textColor="black">
                    <div className="cust-pfp-div">
                        <img className="cust-profile-pic" src={userData.pic} alt="ProfilePicture" />                         
                    </div>
                </CustomizedTooltip>  
            </div>
            {isOpen &&
                <div className='menu-div-contain'>
                    
                        <div className='submenu-prof-div'>
                            <div className="submenu-cust-pfp-div">
                                <a href={'/' + username}>
                                    <img className="submenu-cust-profile-pic" src={userData.pic} alt="ProfilePicture" />  
                                </a>    
                            </div>
                            <p className='username-submenu'>{username}</p>
                        </div>
                    
                    <Divider sx={{ backgroundColor: 'silver', marginTop:'10px', marginBottom:'10px' }} />

                    <a href={'/' + username}>
                        <div className='contain-flex'>
                            <div className='custom-menu-row-div'>
                                <Person2OutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                                <p style={{fontSize:'15px', fontFamily: 'Inter', color:'#fff'}}>Profile</p>
                            </div>
                        </div>
                    </a>

                    <a href={'/settings/profile'} className='custom-a'>
                        <div className='contain-flex'>                          
                            <div className='custom-menu-row-div'>
                                <SettingsOutlinedIcon sx={{ stroke: "#fff", strokeWidth: 0.4, color: '#efeff1', fontSize: '22px' }} />
                                <p style={{ fontSize: '15px', fontFamily: 'Inter', color:'#fff' }}>Settings</p>
                            </div>                           
                        </div>
                    </a>

                    <Divider sx={{ backgroundColor: 'silver', marginTop:'10px', marginBottom:'10px' }} />

                    <a className='custom-a' onClick={handleLogout}>
                        <div className='contain-flex'> 
                            <div className='custom-menu-row-div'>
                                <LogoutOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', transform: 'scaleX(-1)'}}/>
                                <p style={{fontSize:'15px', fontFamily: 'Inter', color:'#fff'}}>Log out</p>
                            </div>
                        </div>
                    </a>
                </div>
            }
        </div>
    );
}

export default CustomMenu;
