import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import FollowTheSignsOutlinedIcon from '@mui/icons-material/FollowTheSignsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';

import './chatNav.css'

function ChatNav() {

    return(
        // <div className='sticky-uh'>
            <div className='chat-nav-container'>
                <div className='chat-nav-div'>
                    <p style={{fontSize:'15px', fontFamily: 'Inter', color:'#ccc'}}>Feeds</p>
                    <div className='row-nav-div'>
                        <CottageOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p style={{fontSize:'15px', fontFamily: 'Inter', color:'#fff'}}>HOME</p>
                    </div>
                    <div className='row-nav-div'>
                        <FollowTheSignsOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p style={{fontSize:'15px', fontFamily: 'Inter', color:'#fff'}}>FOLLOWED CHANNELS</p>
                    </div>
                    <p style={{fontSize:'15px', fontFamily: 'Inter', color:'#ccc'}}>Other</p>
                    <div className='row-nav-div'>
                        <Person2OutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p style={{fontSize:'15px', fontFamily: 'Inter', color:'#fff'}}>PROFILE</p>
                    </div>
                    <div className='row-nav-div'>
                        <CottageOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p style={{fontSize:'15px', fontFamily: 'Inter', color:'#fff'}}>YOUR POSTS</p>
                    </div>
                    <div className='row-nav-div'>
                        <MailOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p style={{fontSize:'15px', fontFamily: 'Inter', color:'#fff'}}>MESSAGES</p>
                    </div>
                    <div className='row-nav-div'>
                        <NotificationsOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p style={{fontSize:'15px', fontFamily: 'Inter', color:'#fff'}}>NOTIFICATIONS</p>
                    </div>
                    <div className='row-nav-div-post'>
                        {/* <AddOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/> */}
                        <p style={{fontSize:'15px', fontFamily: 'Inter', color:'#fff'}}>CREATE POST</p>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default ChatNav;
