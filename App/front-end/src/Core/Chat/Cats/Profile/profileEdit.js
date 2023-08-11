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
import ThreePIcon from '@mui/icons-material/ThreeP';
import NavigationIcon from '@mui/icons-material/Navigation';
import readCookies from '../../../../Cookies/readCookies';
import CustomizedTooltip from '../../../Custom/customTooltip';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import EastIcon from '@mui/icons-material/East';

import '../../chat.css'
import './profilePage.css'
import './profileEdit.css'

const chatInfo = {
    title:'Profile',
    msg:'Your profile page. Here you can see your likes and posts.'
}

function ProfileEdit() {
    const userData = getData();
    const [numberOf, setNumberOf] = useState([]);

    useEffect(() => {
        document.title = "Profile | Heyso";
    }, []);

    const getCounts = async() => {
        const userId = readCookies('auth-token');
        const url = `http://localhost:5000/user/numberOf`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
        });
    
    
        if (response.status !== 200) {
            throw new Error("Feed went wrong");
        }
    
        const data = await response.json();
    
        setNumberOf(data.numberOf);
        // setLoading(false);
    }

    useEffect(() => {
        getCounts();
    },[])

  return (
    <div>   
        <div className='profile-nav-container'>
            <div className='profile-nav'>
                <div>
                    <a href={'/' + userData.username }>
                        <EastIcon className='go-back-arrow' />
                    </a>
                </div>
                <p className='save-p-text' style={{ marginLeft:'10px' }}>Edit Profile</p>
                <div className='save-profile-btn'><p className='save-p'>Save</p></div>
            </div>
        </div>
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
                    <div className='color-bg-profile-page' style={{ backgroundColor:`#${userData.color}`, borderRadius: '0px'}} />
                        <div className='div-for-everything-else-in-profile'>
                            <div className='basic-info-div'>
                                <div className='top-div-offsets'>
                                    <div className="prof-page-pfp-div">
                                        <img className="prof-page-profile-pic" src={userData.pic} alt="ProfilePicture" />     
                                    </div>
                                </div>
                                <p className='name-p-prof-page'>{userData.first} {userData.last}</p>
                                <p className='username-p-prof-page'>@{userData.username}</p>
                                <p className='bio'>{userData.bio}</p>
                            </div> 
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

export default ProfileEdit
