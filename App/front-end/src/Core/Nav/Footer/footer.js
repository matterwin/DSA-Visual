import React from 'react'
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import readCookies from '../../../Cookies/readCookies';

import './footer.css'

const Footer = () => {
    const pp = readCookies('pp');

    return (
        <div className='footer-container'>
            <div className='footer-div-color'>
                <div className='footer-buttons'>
                    <a href='/' className='btns-and-notes-div'>
                        <CottageOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'25px', fontStyle:'bold'}}/>
                        <p className='footer-notes'>Home</p>
                    </a>
                    <a href='/chat' className='btns-and-notes-div'>
                        <AutoStoriesOutlinedIcon  sx={{stroke: "#fff", strokeWidth: 0.4, color:'#efeff1', fontSize:'25px', fontStyle:'bold'}}/>
                        <p className='footer-notes'>Chat</p>
                    </a>
                    <div className='btns-and-notes-div'>
                        <AddOutlinedIcon sx={{stroke: "#fff", strokeWidth: 1.4, color:'#fff', fontSize:'27px'}}/>
                        <p className='footer-notes'>Post</p>
                    </div>
                    <div className='btns-and-notes-div'>
                        <GraphicEqOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.7, color:'#fff', fontSize:'25px' }}/>
                        <p className='footer-notes'>Visuals</p>
                    </div>
                    <div className='btns-and-notes-div'>
                        <div className="cust-pfp-div-chat">
                            <img className="cust-profile-pic-chat" src={pp} alt="ProfilePicture" />                         
                        </div>
                        <p className='footer-notes'>Profile</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer