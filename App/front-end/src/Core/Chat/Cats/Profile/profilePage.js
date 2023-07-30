import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ChatNav from '../../chatNav';
import Extra from '../../../Home/Extra/extra';
import { createChatCookie } from '../../../../Cookies/createCookies';
import readCookies from '../../../../Cookies/readCookies';
import SafetyDividerOutlinedIcon from '@mui/icons-material/SafetyDividerOutlined';
import UserPanel from '../../userPanel';

import '../../chat.css'
import './profilePage.css'

function ProfilePage() {
    const [showLiveChat, setShowLiveChat] = useState(false);
    const pp = readCookies('pp');
    const color = readCookies('color');
    const username = readCookies('name');

    useEffect(() => {
        document.title = "Profile | Heyso";
    }, []);

    useEffect(() => {
        const rememChat = readCookies('showChat');
        if(rememChat === 'true')
            setShowLiveChat(true);
        else
            setShowLiveChat(false);
    }, []); 
  
    const handleShowLiveChat = () => {
        setShowLiveChat(!showLiveChat);
        createChatCookie(!showLiveChat);
    };

  return (
    <div>   
        <div className='postbox-div'>
            <div className='sub-nav-container-chat' style={{zIndex:'1'}}>
                <div className="sub-inside-nav">
                    <div className="sub-nav-l-r-container">
                        <div className="sub-left-side">
                            <div className='sub-left-side-row-contain'>
                            <div className='sub-nav-boxes'>
                                <div className='sub-nav-icon-contain'>
                                <p className='sub-nav-p' >f</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        {!showLiveChat &&
                        <div className='sub-right-side'>
                            <div className='sub-nav-boxes-active' onClick={handleShowLiveChat}>
                                <div className='sub-nav-icon-contain'>
                                <SafetyDividerOutlinedIcon sx={{ stroke: "#fff", strokeWidth: 0.4, padding: '0', margin: '0', cursor: 'pointer', color: '#bbb', fontSize: '20px' }} />
                                <p className='sub-nav-p'>Live chat</p>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div className="chat-container">
          <div className="left-side-chat">
                <UserPanel />
                <ChatNav /> 
          </div>
          <div className="center-side-chat">
            <div className='teste'>
                <div className='backg-for-profile-div'>
                    <div className='color-bg-profile-page' style={{ backgroundColor:`#${color}`}} />
                        <div className='div-for-everything-else-in-profile'>
                            <div className='basic-info-div'>
                                <div className="prof-page-pfp-div">
                                    <img className="prof-page-profile-pic" src={pp} alt="ProfilePicture" />                         
                                </div>
                                <p className='username-p-prof-page'>{username}</p>
                            </div> 
                        </div>  
                        <div className='container-for-tabs'>
                            <NavLink end to={'/' + username} className={({ isActive }) => (isActive ? 'div-of-tab-words-active' : 'div-of-tab-words')}>
                                <p className='tab-p-more'>Posts</p>
                            </NavLink>
                            <NavLink end to={'/' + username + '/replies'} className={({ isActive }) => (isActive ? 'div-of-tab-words-active' : 'div-of-tab-words')}>
                                <p className='tab-p-more'>Replies</p>
                            </NavLink>
                            <NavLink end to={'/' + username + '/likes'} className={({ isActive }) => (isActive ? 'div-of-tab-words-active' : 'div-of-tab-words')}>
                                <p className='tab-p-more'>Likes</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
          </div>
          <div className="right-side-chat">
            {!showLiveChat && 
            <>
                <div className='open-btn'>
                    <div className='open-live-center' onClick={handleShowLiveChat}>
                        <p style={{ color:'#fff', fontSize:'15px', fontFamily:'Inter' }}>Open Chat</p>
                    </div>
                </div>
            </>
            }
            {showLiveChat && <Extra showLiveChat handleShowLiveChat={handleShowLiveChat} />}
          </div>
        </div>
    </div>
  );
}

export default ProfilePage
