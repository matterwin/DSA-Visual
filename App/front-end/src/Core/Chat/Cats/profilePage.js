import React, { useEffect, useState } from 'react';
import ChatNav from '../chatNav';
import Extra from '../../Home/Extra/extra';
import { createChatCookie } from '../../../Cookies/createCookies';
import readCookies from '../../../Cookies/readCookies';
import Subnavchat from '.././subnavchat';
import { NavLink } from 'react-router-dom';
import SafetyDividerOutlinedIcon from '@mui/icons-material/SafetyDividerOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ChatInfo from '../chatInfo';
import { Divider } from '@mui/material';
import PostBox from './postBox';
import TabBox from './tabBox';
import PostBoxModal from './postBoxModal';
import UserPanel from '../userPanel';
import UserPosts from './userPosts';

import '../chat.css'

const chatInfo = {
    title:'Home',
    msg:'Your personal frontpage. Come here to view the most recent posts.'
}

function ProfilePage() {
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showPostBox, setShowBoxPost] = useState(false);

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
                {/* //here you set up the profile page */}
            </div>
            
          </div>
          <div className="right-side-chat">
            <ChatInfo title={chatInfo.title} msg={chatInfo.msg} />
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
