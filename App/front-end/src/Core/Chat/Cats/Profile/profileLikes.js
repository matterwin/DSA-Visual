import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ChatNav from '../../chatNav';
import { Divider } from '@mui/material';
import UserPanel from '../../userPanel';
import CustomDSANavBtnReplica from '../../../Custom/customDSABtnReplica';
import ChatInfo from '../../chatInfo';
import { getData, setData } from '../../../../UserAuth/UserContext';
import UserLikes from './userLikes';
import ThreePIcon from '@mui/icons-material/ThreeP';
import NavigationIcon from '@mui/icons-material/Navigation';
import TabBox from '../tabBox';
import CustomizedTooltip from '../../../Custom/customTooltip';

import '../../chat.css'
import './profilePage.css'

const chatInfo = {
    title:'Profile',
    msg:'Your profile page. Here you can see your likes and posts.'
}

function ProfileLikes() {
    const userData = getData();

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
                                <div className='icons-div-profile'>
                                    <div className='row-container-p-icons'>
                                        <CustomizedTooltip title="Posts">
                                            <ThreePIcon className='profile-icons-blue' style={{ fontSize:'15px' }}/>
                                        </CustomizedTooltip>
                                        <p className='count-p-icons'>3298</p>
                                    </div>
                                    <div className='row-container-p-icons'>
                                        <CustomizedTooltip title="Likes">
                                            <NavigationIcon className='profile-icons-green' style={{ fontSize:'15px' }} />
                                        </CustomizedTooltip>
                                        <p className='count-p-icons'>444</p>
                                    </div>
                                </div>
                            </div>  
                            <Divider sx={{ backgroundColor: 'silver', marginTop:'10px', marginBottom:'10px', width:'100%' }} />
                            <TabBox title1="Posts" title1Link={'/' + userData.username}  active2={true} title2="Likes" title2Link={'/' + userData.username + '/likes'} onClick={() => window.location.reload()}/>
                            <div className='likes-div'>
                                <UserLikes />
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

export default ProfileLikes
