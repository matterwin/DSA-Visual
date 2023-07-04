import React from 'react'
import { useState } from 'react';
import './extra.css'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import CustomizedTooltip from '../../Custom/customTooltip';

const Extra = () => {
  const [showChat, setShowChat] = useState(true);

  return (
    <div>
      {showChat && 
      <>
        <div className='extra-contain'>
          <div className='chat-bar-nav-contain'>
            <div className='chat-bar-nav'>

              <CustomizedTooltip title={"Collapse"}>
                <div className='left-chat-nav' onClick={() => {setShowChat(false)}}>
                  <CloseFullscreenOutlinedIcon sx={{ stroke: "#fff", strokeWidth: 0.4, color: '#efeff1', fontSize: '22px' }}/>
                </div>
              </CustomizedTooltip>

              <div className='center-chat-nav'>
                <p className='chat-title'>LIVE CHAT</p>
              </div>

              <div className='go-to-right'>
                <CustomizedTooltip title={"Users"} >
                  <div className='right-chat-nav'>
                    <PeopleAltOutlinedIcon sx={{ stroke: "#fff", strokeWidth: 0.4, color: '#efeff1', fontSize: '22px' }}/>
                  </div>  
                </CustomizedTooltip>
              </div> 

            </div>
          </div>

          <div className='chat-box-contain'>
           {/* Do ad irure dolor consequat. Eiusmod do mollit ad id aute tempor elit ad voluptate nulla esse anim proident. Cupidatat nostrud ullamco cupidatat eiusmod officia nulla dolore proident. Nostrud amet proident irure mollit sint consequat. Do Lorem reprehenderit ex do qui minim sunt ad ipsum proident ut ut aliqua sint. Minim ex dolore enim deserunt qui Lorem proident cillum culpa amet eiusmod non. Consequat consectetur aliquip amet quis elit proident et sint incididunt do esse. */}
            I psum sint Lorem sit ex quis labore deserunt quis quis eiusmod. Non et dolore tempor do in aliquip nulla non ea consequat irure mollit veniam. Minim ullamco consectetur laboris consequat mollit nisi consectetur duis eiusmod in. Excepteur mollit elit laboris quis quis veniam laboris.
          </div>

          <div className='msg-box-contain'>
            <input className='msg-box' type="text" placeholder="Send a message"></input>
            <div className='chat-btn-div-contain'>
              <div className='chat-btn-div'>
                <p className='chat-btn-p'>Chat</p>
              </div>
            </div>
          </div>
          
        </div>
      </>
      }  
    </div>
  )
}

export default Extra