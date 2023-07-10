import React, { useState, useEffect } from 'react'
import readCookies from '../../../Cookies/readCookies'
import CustomizedTooltip from '../../Custom/customTooltip'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import './postBox.css'
import './userPosts.css'

const UserPosts = () => {
    const [likes, setLikes] = useState(54);
    const [date, setDate] = useState('6h');
    const pp = readCookies('pp')
    const username = readCookies('name');

    return (
        <div className='user-posts-container'>
            <div className='div-for-padding'>
                <div className='split-side-container'>
                    <div className='testee'>
                        <div className='top-level-div'>
                            <CustomizedTooltip title={username}>
                                <div className="chat-cust-pfp-div">
                                    <img className="chat-cust-profile-pic" src={pp} alt="ProfilePicture" />    
                                </div>
                            </CustomizedTooltip>
                            <div className='like-counter-container'>
                                <div className='likes-icon-div-up'>
                                    <ThumbUpOutlinedIcon style={{stroke: "#4d3939", strokeWidth: 0.4, color:'#4d3939', fontSize:'22px', fontStyle:'bold'}} />
                                </div>
                                <p className='likes-text'>{likes}</p>
                                <div className='likes-icon-div-down'>
                                    <ThumbDownOffAltOutlinedIcon sx={{stroke: "#4d3939", strokeWidth: 0.4, color:'#4d3939', fontSize:'22px', fontStyle:'bold'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='top-and-text-div'>
                        <div className='top-contain'>
                            <div className='left-top-div'>
                                <p className='likes-text'>@{username} &nbsp;</p>
                                <p> • {date}</p>
                            </div>
                            <div className='right-top-div'>
                                <CustomizedTooltip title="info">
                                    <MoreHorizOutlinedIcon sx={{stroke: "#4d3939", strokeWidth: 0.4, color:'#4d3939', fontSize:'22px', fontStyle:'bold'}}/>
                                </CustomizedTooltip>
                            </div>
                        </div>
                        <div>
                            <p className='title-text'>News Flash for you</p>
                            <p className='post-text'>Officia nulla dolore nostrud nostrud dolor velit et deserunt. Ea sit aliquip nulla culpa consequat sint eu pariatur ipsum. Id cupidatat duis exercitation id eiusmod culpa incididunt. Nulla reprehenderit cillum et laborum. Velit culpa incididunt mollit duis adipisicing dolore dolore mollit duis sit non aliqua tempor excepteur. Cillum sint cupidatat excepteur non deserunt cillum sunt. Labore ut ex id mollit id officia.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPosts