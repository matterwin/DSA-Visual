import React from 'react'
import { NavLink } from 'react-router-dom';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import CottageIcon from '@mui/icons-material/Cottage';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import readCookies from '../../../Cookies/readCookies';

import './footer.css'

const Footer = () => {
    const pp = readCookies('pp');
    const username = readCookies('name');

    return (
        <div className='footer-container'>
            <div className='footer-div-color'>
                <div className='footer-buttons'>
                    <NavLink end to='/' className='btns-and-notes-div'>
                        {({ isActive }) => (
                            <>
                            {isActive ? (
                                <CottageIcon sx={{ stroke: '#a9c9a3', strokeWidth: 0.4, color: '#a9c9a3', fontSize: '25px', fontStyle: 'bold' }} />
                            ) : (
                                <CottageOutlinedIcon sx={{ stroke: '#fff', strokeWidth: 0.4, color: '#efeff1', fontSize: '25px', fontStyle: 'bold' }} />
                            )}
                            <p className='footer-notes'>Home</p>
                            </>
                        )}
                    </NavLink>
                    <NavLink end to='/chat' className='btns-and-notes-div'>
                        {({ isActive }) => (
                            <>
                            {isActive ? (
                                <AutoStoriesIcon  sx={{stroke: "#a9c9a3", strokeWidth: 0.4, color:'#a9c9a3', fontSize:'25px', fontStyle:'bold'}}/>
                            ) : (
                                <AutoStoriesOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'25px', fontStyle:'bold'}}/>
                            )}
                            <p className='footer-notes'>Chat</p>
                            </>
                        )}
                    </NavLink>
                    <div className='btns-and-notes-div'>
                        <AddOutlinedIcon sx={{stroke: "#fff", strokeWidth: 1.4, color:'#fff', fontSize:'27px'}}/>
                        <p className='footer-notes'>Post</p>
                    </div>
                    <NavLink end to='/visuals/merge' className='btns-and-notes-div'>
                        {({ isActive }) => (
                            <>
                            {isActive ? (
                                <GraphicEqIcon sx={{stroke: "#a9c9a3", strokeWidth: 0.7, color:'#a9c9a3', fontSize:'25px' }}/>
                            ) : (
                                <GraphicEqOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.7, color:'#fff', fontSize:'25px' }}/>
                            )}
                            <p className='footer-notes'>Visuals</p>
                            </>
                        )}
                    </NavLink>
                    <a href={'/' + username} className='btns-and-notes-div'>
                        <div className="cust-pfp-div-chat">
                            <img className="cust-profile-pic-chat" src={pp} alt="ProfilePicture" />                         
                        </div>
                        <p className='footer-notes'>Profile</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer