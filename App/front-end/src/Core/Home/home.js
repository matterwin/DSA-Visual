import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import Filesys from './FileSys/filesys';
import Readme from './Readme/readme';
import Extra from './Extra/extra';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import SafetyDividerOutlinedIcon from '@mui/icons-material/SafetyDividerOutlined';
import { exports } from './FileSys/allInfo';
import readCookies from '../../Cookies/readCookies';
import { createChatCookie } from '../../Cookies/createCookies';

import "../../App.css"
import "./home.css"

function Home() {
    const [focusedFile, setFocusedFile] = useState(exports.merge);
    const [showLiveChat, setShowLiveChat] = useState();

    useEffect(() => {
        const rememChat = readCookies('showChat');
        if(rememChat === 'true')
            setShowLiveChat(true);
        else
            setShowLiveChat(false);
    }, []); 

    const handleFocusedFile = () => {
        setFocusedFile(exports.quick);
    };

    const handleShowLiveChat = () => {
        setShowLiveChat(!showLiveChat);
        createChatCookie(!showLiveChat);
    };

    return (
        <div>
            <div className='sub-nav-container'>
                <div className="sub-inside-nav">
                    <div className="sub-nav-l-r-container">
                    <div className="sub-left-side">
                        <div className='sub-left-side-row-contain'>
                        <NavLink end to="/readme" className={({ isActive }) => (isActive ? 'sub-nav-boxes-active' : 'sub-nav-boxes')}>
                            <div className='sub-nav-icon-contain'>
                            <DescriptionOutlinedIcon sx={{ stroke: "#fff", strokeWidth: 0.4, padding: '0', margin: '0', cursor: 'pointer', color: '#bbb', fontSize: '20px' }} />
                            <p className='sub-nav-p'>Readme</p>
                            </div>
                        </NavLink>
                        <NavLink end to="/code" className={({ isActive }) => (isActive ? 'sub-nav-boxes-active' : 'sub-nav-boxes')}>
                            <div className='sub-nav-icon-contain'>
                            <CodeOutlinedIcon sx={{ stroke: "#fff", strokeWidth: 0.4, padding: '0', margin: '0', cursor: 'pointer', color: '#bbb', fontSize: '20px' }} />
                            <p className='sub-nav-p'>Code</p>
                            </div>
                        </NavLink>
                        <NavLink end to="/visuals" className={({ isActive }) => (isActive ? 'sub-nav-boxes-active' : 'sub-nav-boxes')}>
                            <div className='sub-nav-icon-contain'>
                            <GraphicEqOutlinedIcon sx={{ stroke: "#fff", strokeWidth: 0.4, padding: '0', margin: '0', cursor: 'pointer', color: '#bbb', fontSize: '20px' }} />
                            <p className='sub-nav-p'>Visuals</p>
                            </div>
                        </NavLink>
                        <NavLink end to="/comments" className={({ isActive }) => (isActive ? 'sub-nav-boxes-active' : 'sub-nav-boxes')}>
                            <div className='sub-nav-icon-contain'>
                            <SmsOutlinedIcon sx={{ stroke: "#fff", strokeWidth: 0.4, padding: '0', margin: '0', cursor: 'pointer', color: '#bbb', fontSize: '20px' }} />
                            <p className='sub-nav-p'>Comments</p>
                            </div>
                        </NavLink>
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
            <div className="container">
            <div className="left-side-home">
                <Filesys focusedFile={focusedFile} handleFocusedFile={handleFocusedFile} />
            </div>
            <div className="center-side-home">
                <Readme focusedFile={focusedFile} />
            </div>
            <div className="right-side-home">
                {/* {showLiveChat && <Extra showLiveChat handleShowLiveChat={handleShowLiveChat} />} */}
            </div>
            </div>
        </div>
    );
}

export default Home;
