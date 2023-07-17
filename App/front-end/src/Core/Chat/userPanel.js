import React, { useState, useEffect } from 'react'
import readCookies from '../../Cookies/readCookies'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import { Divider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './userPanel.css'

const Loading = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress style={{ color: '#a9c9a3' }} />
        </Box>
      </div>
    );
}

const UserPanel = () => {
    const [loading, setLoading] = useState(true);
    const [numberOf, setNumberOf] = useState();
    const pp = readCookies('pp');
    const username = readCookies('name');
    const color = readCookies('color');
    const auth = readCookies('auth-token');

    const fetchInfo = async () => {
        try {
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
                throw new Error("Info went wrong");
            }
        
            const data = await response.json();
        

            console.log(data.userInfo.numberOf);
            setNumberOf(data.userInfo.numberOf);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchInfo(); // Initial fetch
    }, []);

    return (
        <div>
            <div className='user-panel-container'>
                <div className='color-bg' style={{ backgroundColor:`#${color}`}} />      
                <div className='info-divs'>
                    <div className='info-centering'>
                        <a href={'/' + username} className="user-panel-pfp-div">
                            <img className="user-panel-profile-pic" src={pp} alt="ProfilePicture" />                         
                        </a>
                        <p className='user-panel-username'>{username}</p>
                        <div className='user-stats-div'>
                            {loading && <Loading />}
                            {!loading && 
                            <>
                                <div className='col-stats'>
                                    <p className='user-panel-follow'>{numberOf.posts}</p>
                                    <p className='user-panel-follow-p'>Posts</p>
                                </div> 
                                <Divider sx={{ backgroundColor: '#ccc', width:'2px', height:'40px' }}/>
                                <div className='col-stats'>
                                    <p className='user-panel-follow'>{numberOf.likes}</p>
                                    <p className='user-panel-follow-p'>Likes</p>
                                </div>
                            </>
                            }                          
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