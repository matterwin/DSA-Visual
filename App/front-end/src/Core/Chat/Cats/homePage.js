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
import CustomDSANavBtnReplica from '../../Custom/customDSABtnReplica';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UserPanel from '../userPanel';
import UserPosts from './userPosts';
import CustomSortButton from '../../Custom/customSortButton';

import '../chat.css'

const chatInfo = {
    title:'Home',
    msg:'Your personal frontpage. Come here to view the most recent posts.'
}

const postDiv = () => {
    return(<>test</>)
}

function HomePage() {
    const [showLiveChat, setShowLiveChat] = useState(false);
    const [showPostBox, setShowBoxPost] = useState(false);

    useEffect(() => {
        const existingSortType = localStorage.getItem('sortType');
        if (existingSortType === null || existingSortType === undefined) {
            localStorage.setItem('sortType', 'Newest');
            setSortBy(localStorage.getItem('sortType'));
        }
        document.title = "Chat | Heyso";
    }, []);

    const [sortBy, setSortBy] = useState(localStorage.getItem('sortType'));

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
                                <CustomDSANavBtnReplica />
                            </div>
                        </div>
                        {/* {!showLiveChat &&
                        <div className='sub-right-side'>
                            <div className='sub-nav-boxes-active' onClick={handleShowLiveChat}>
                                <div className='sub-nav-icon-contain'>
                                <SafetyDividerOutlinedIcon sx={{ stroke: "#fff", strokeWidth: 0.4, padding: '0', margin: '0', cursor: 'pointer', color: '#bbb', fontSize: '20px' }} />
                                <p className='sub-nav-p'>Live chat</p>
                                </div>
                            </div>
                        </div>
                        } */}
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
                <div className='postbox-div'>
                    <PostBox />
                    <div className='sort-divider-div'>
                        <Divider className='remaining-divider' sx={{ backgroundColor: 'silver' }} />
                        <CustomSortButton setSortBy={setSortBy}/>
                    </div>
                </div>
                <div className='disappear-on-small-screen'>
                    <TabBox title1="Home" title1Link="/chat" active1={true} onClick={() => window.location.reload()} />
                </div>
                <div className='sort-divider-div-small-screen'>
                    <Divider className='remaining-divider' sx={{ backgroundColor: 'silver' }} />
                    <CustomSortButton setSortBy={setSortBy}/>
                </div>               
                <UserPosts setSortBy={setSortBy} sortBy={sortBy}/>
            </div>
            
          </div>
          <div className="right-side-chat">
            <ChatInfo title={chatInfo.title} msg={chatInfo.msg} showButton={true}/>
            <p className='copyright'>© 2023 Matthew Erwin</p>
            {/* {!showLiveChat && 
            <>
                <div className='open-btn'>
                    <div className='open-live-center' onClick={handleShowLiveChat}>
                        <p style={{ color:'#fff', fontSize:'15px', fontFamily:'Inter' }}>Open Chat</p>
                    </div>
                </div>
            </>
            }
            {showLiveChat && <Extra showLiveChat handleShowLiveChat={handleShowLiveChat} />} */}
          </div>
        </div>
    </div>
  );
}

export default HomePage
