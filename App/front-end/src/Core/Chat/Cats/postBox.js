import React from 'react'
import readCookies from '../../../Cookies/readCookies'
import CustomizedTooltip from '../../Custom/customTooltip'
import './postBox.css'

const PostBox = () => {
    const pp = readCookies('pp')
    const username = readCookies('name');

    return (
        <div className='box-contain'>
            <div className='box-div'>
                <CustomizedTooltip title={username}>
                    <div className="chat-cust-pfp-div">
                        <img className="chat-cust-profile-pic" src={pp} alt="ProfilePicture" />    
                    </div>
                </CustomizedTooltip>
                <input className='prop-box' type="text" placeholder="Make a post"/>
            </div>
        </div>
    ) 
}

export default PostBox