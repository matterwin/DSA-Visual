import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import FollowTheSignsOutlinedIcon from '@mui/icons-material/FollowTheSignsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import CS from '../../Images/cs.png'
import { Divider } from '@mui/material';

import './chatNav.css'

function ChatNav() {
    const [highlight, setHighlight] = useState('#fff');
    const [highlightTrends, setHighlightTrends] = useState('#fff');

    return(
        // <div className='sticky-uh'>
            <div className='chat-nav-container'>
                <div className='chat-nav-div'>
                    {/* <div className='title-in-navs'> */}
                        <p className='title-chat'>Feeds</p>
                    {/* </div> */}
                    
                    <a href='/chat/home' className='row-nav-div'>
                        <CottageOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>Home</p>
                    </a>
                    <a href='/chat/following' className='row-nav-div'>
                        <FollowTheSignsOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>Following</p>
                    </a>
                    <Divider sx={{ backgroundColor: '#ccc', width:'100%', marginTop:'10px', marginBottom:'10px' }} />
                    <p className='title-chat'>Communities</p>
                    <div className='row-nav-div'>
                        <div className="cust-pfp-div-chat">
                            <img className="cust-profile-pic-chat" src={CS} alt="ProfilePicture" />                         
                        </div>
                        <p className='p-in-navs'>csccareer</p>
                    </div>
                    <div className='row-nav-div' onMouseEnter={() => setHighlightTrends('red')} onMouseLeave={() => setHighlightTrends('#efeff1')}>
                        <WhatshotOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:highlightTrends, fontSize:'23px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>trends</p>
                    </div>
                    <div className='row-nav-div' onMouseEnter={() => setHighlight('gold')} onMouseLeave={() => setHighlight('#efeff1')}>
                        <EmojiObjectsOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.4, color:highlight, fontSize:'22px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>resources</p>
                    </div>
                    <Divider sx={{ backgroundColor: '#ccc', width:'100%', marginTop:'10px', marginBottom:'10px' }} />
                    {/* <div className='title-in-navs'> */}
                        <p className='title-chat'>Other</p>
                    {/* </div> */}
                    <div className='row-nav-div'>
                        <Person2OutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>Profile</p>
                    </div>
                    <div className='row-nav-div'>
                        <CottageOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>Your Posts</p>
                    </div>
                    <div className='row-nav-div'>
                        <MailOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>Messages</p>
                    </div>
                    <div className='row-nav-div'>
                        <NotificationsOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>Notifications</p>
                    </div>
                    <Divider sx={{ backgroundColor: '#ccc', width:'100%', marginTop:'10px', marginBottom:'10px' }} />
                    <div className='row-nav-div-post'>
                        {/* <AddOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/> */}
                        <p className='p-in-navs' style={{ fontWeight:'600' }}>Create Post</p>
                    </div>
                </div>
            </div>
        // </div>
    );
}

export default ChatNav;
