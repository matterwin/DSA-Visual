import React, { useEffect, useState } from 'react';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import readCookies from '../../Cookies/readCookies';
import CS from '../../Images/cs.png'
import Fire from '../../Images/Fire.gif'
import { Divider } from '@mui/material';

import './chatNav.css'

function ChatNav() {
    const [highlight, setHighlight] = useState('#fff');
    const [flickerCount, setFlickerCount] = useState(0);
    const pp = readCookies('pp');
    const username = readCookies('name');

    useEffect(() => {
        if (flickerCount > 0) {
            const flickerTimer = setTimeout(() => {
                setHighlight('#efeff1'); // Reset the highlight color after flickering
            }, 300);
            return () => clearTimeout(flickerTimer);
        }
    }, [flickerCount]);

    const startFlicker = () => {
        
        setFlickerCount((prevCount) => prevCount + 1);
    };

    const stopFlicker = () => {
        setFlickerCount((prevCount) => prevCount + 1); // Increment the flicker count to trigger the useEffect hook
    };

    return(
        // <div className='sticky-uh'>
            <div className='chat-nav-container'>
                <div className='chat-nav-div'>
                    {/* <div className='title-in-navs'> */}
                        <p className='title-chat'>Feeds</p>
                    {/* </div> */}
                    
                    <a href='/chat' className='row-nav-div'>
                        <CottageOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>Home</p>
                    </a>
                    {/* <a href='/chat/following' className='row-nav-div'>
                        <FollowTheSignsOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'22px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>Following</p>
                    </a> */}
                    {/* <Divider sx={{ backgroundColor: '#ccc', width:'100%', marginTop:'10px', marginBottom:'10px' }} />
                    <p className='title-chat'>Communities</p>
                    <div className='row-nav-div'>
                        <div className="cust-pfp-div-chat">
                            <img className="cust-profile-pic-chat" src={CS} alt="ProfilePicture" />                         
                        </div>
                        <p className='p-in-navs'>csccareer</p>
                    </div>
                    <div className='row-nav-div'>
                        <div className="cust-pfp-div-chat">
                            <img className="cust-profile-pic-chat" src={Fire} alt="ProfilePicture" />                         
                        </div>
                        <p className='p-in-navs'>trends</p>
                    </div>
                    <div className='row-nav-div' onMouseEnter={() => setHighlight('gold')} onMouseLeave={startFlicker}>
                        <EmojiObjectsOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.4, color:highlight, fontSize:'22px', fontStyle:'bold'}}/>
                        <p className='p-in-navs'>resources</p>
                    </div> */}
                </div>
            </div>
        // </div>
    );
}

export default ChatNav;
