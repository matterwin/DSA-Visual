import React from 'react'
import './userPanel.css'
import readCookies from '../../Cookies/readCookies'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import FollowTheSignsOutlinedIcon from '@mui/icons-material/FollowTheSignsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import { Divider } from '@mui/material';

const UserPanel = () => {

    const pp = readCookies('pp');
    const username = readCookies('name');
    const color = readCookies('color');
    const auth = readCookies('auth-token');

    return (
        <div>
            {auth}
            <div className='user-panel-container'>
                <div className='color-bg' style={{ backgroundColor:`#${color}`}} />      
                <div className='info-divs'>
                    <div className='info-centering'>
                        <a href={'/' + username} className="user-panel-pfp-div">
                            <img className="user-panel-profile-pic" src={pp} alt="ProfilePicture" />                         
                        </a>
                        <p className='user-panel-username'>{username}</p>
                        <div className='user-stats-div'>
                            <div className='col-stats'>
                                <p className='user-panel-follow'>0</p>
                                <p className='user-panel-follow'>Posts</p>
                            </div> 
                            <Divider sx={{ backgroundColor: '#ccc', width:'2px', height:'40px' }}/>
                            <div className='col-stats'>
                                <p className='user-panel-follow'>0</p>
                                <p className='user-panel-follow'>Likes</p>
                            </div>
                        </div>
                        
                    </div> 
                    <Divider sx={{ backgroundColor: '#ccc', width:'100%', marginTop:'10px', marginBottom:'10px' }} />
                    <a href={'/' + username} className='row-nav-div'>
                        <div className="cust-pfp-div-chat">
                            <img className="cust-profile-pic-chat" src={pp} alt="ProfilePicture" />                         
                        </div>
                        <p className='p-in-navs'>Profile</p>
                    </a>
                    <div className='row-nav-div'>
                        <CottageOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>Your Posts</p>
                    </div>
                    {/* <div className='row-nav-div'>
                        <MailOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>Messages</p>
                    </div> */}
                    {/* <div className='row-nav-div'>
                        <NotificationsOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>Notifications</p>
                    </div> */}
                    <Divider sx={{ backgroundColor: '#ccc', width:'100%', marginTop:'10px', marginBottom:'10px' }} />
                    <div className='row-nav-div-post'>
                        {/* <AddOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/> */}
                        <p className='p-in-navs' style={{ fontWeight:'600' }}>Create Post</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPanel