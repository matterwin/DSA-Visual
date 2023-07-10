import React from 'react'
import readCookies from '../../../Cookies/readCookies'
import './postBox.css'

const PostBox = () => {
    const pp = readCookies('pp')

  return (
    <div className='box-contain'>
        <div className='box-div'>
            <div>
                <div className="chat-cust-pfp-div">
                    <img className="chat-cust-profile-pic" src={pp} alt="ProfilePicture" />    
                </div>
            </div>
            <input className='prop-box' type="text" placeholder="Make a post"/>
        </div>
    </div>
  )
}

export default PostBox