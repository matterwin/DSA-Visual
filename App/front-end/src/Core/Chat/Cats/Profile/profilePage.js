import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ChatNav from '../../chatNav';
import { Divider } from '@mui/material';
import UserPanel from '../../userPanel';
import CustomDSANavBtnReplica from '../../../Custom/customDSABtnReplica';
import ChatInfo from '../../chatInfo';
import { getData, setData } from '../../../../UserAuth/UserContext';
import UserPostsList from './userPostsList';
import TabBox from '../tabBox';

import '../../chat.css'
import './profilePage.css'

const chatInfo = {
    title:'Profile',
    msg:'Your profile page. Here you can see your likes and posts.'
}

function ProfilePage() {
    const userData = getData();

    useEffect(() => {
        document.title = "Profile | Heyso";
    }, []);

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
                    <div className='color-bg-profile-page' style={{ backgroundColor:`#${userData.color}`}} />
                        <div className='div-for-everything-else-in-profile'>
                            <div className='basic-info-div'>
                                <div className="prof-page-pfp-div">
                                    <img className="prof-page-profile-pic" src={userData.pic} alt="ProfilePicture" />                         
                                </div>
                                <p className='name-p-prof-page'>{userData.first} {userData.last}</p>
                                <p className='username-p-prof-page'>@{userData.username}</p>
                                <p className='bio'>{userData.bio}</p>
                            </div> 
                        </div>  
                        <Divider sx={{ backgroundColor: 'silver', marginTop:'10px', marginBottom:'10px', width:'100%' }} />
                        <TabBox title1="Posts" title1Link={'/' + userData.username}  active1={true} title2="Likes" title2Link={'/' + userData.username + '/likes'} onClick={() => window.location.reload()}/>
                        {/* <div className='container-for-tabs'>
                            <NavLink end to={'/' + userData.username} className={({ isActive }) => (isActive ? 'div-of-tab-words-active' : 'div-of-tab-words')}>
                                <p className='tab-p-more'>Posts</p>
                            </NavLink>
                            <NavLink end to={'/' + userData.username + '/likes'} className={({ isActive }) => (isActive ? 'div-of-tab-words-active' : 'div-of-tab-words')}>
                                <p className='tab-p-more'>Likes</p>
                            </NavLink>
                        </div> */}
                        <div className='likes-div'>
                            <UserPostsList />
                        </div>
                    </div>
                </div>
          </div>
          <div className="right-side-chat">
            <ChatInfo title={chatInfo.title} msg={chatInfo.msg} showButton={false}/>
            <p className='copyright'>© 2023 Matthew Erwin</p>
          </div>
        </div>
    </div>
  );
}

export default ProfilePage
