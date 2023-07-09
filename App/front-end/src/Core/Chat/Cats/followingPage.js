import React, { useEffect, useState } from 'react';
import ChatNav from '../chatNav';
import Extra from '../../Home/Extra/extra';
import { createChatCookie } from '../../../Cookies/createCookies';
import readCookies from '../../../Cookies/readCookies';
import Subnavchat from '.././subnavchat';
import { NavLink } from 'react-router-dom';
import SafetyDividerOutlinedIcon from '@mui/icons-material/SafetyDividerOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

import '../chat.css'

function FollowingPage() {
  const [showLiveChat, setShowLiveChat] = useState();

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
        <div className='sub-nav-container-chat'>
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
        <div className="chat-container">
          <div className="left-side-chat">
              <ChatNav />
          </div>
          <div className="center-side-chat">
              Following
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

export default FollowingPage
