import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { createChatCookie } from '../../Cookies/createCookies';
import readCookies from '../../Cookies/readCookies';
import SafetyDividerOutlinedIcon from '@mui/icons-material/SafetyDividerOutlined';

const Subnavchat = () => {
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
        <div className='sub-nav-container'>
            <div className="sub-inside-nav">
                <div className="sub-nav-l-r-container">
                <div className="sub-left-side">
                    <div className='sub-left-side-row-contain'>
                    {/* nothing */}
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
    )
}

export default Subnavchat