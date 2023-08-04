import React from 'react'
import { Divider } from '@mui/material'
import './chatInfo.css'

const ChatInfo = ({ title, msg, showButton }) => {
  return (
    <div className='info-contain'>
        <div className='info-div'>
            <p style={{ fontFamily:'roobert', color:'#fff', fontSize:'16px', fontWeight:'600', letterSpacing:'1px' }}>{title}</p>
            <p style={{ fontFamily:'Inter', color:'#fff', fontSize:'15px', fontWeight:'400' }}>{msg}</p>
            <Divider sx={{ backgroundColor: '#ccc', width:'100%', marginTop:'10px', marginBottom:'10px' }} />
            {showButton && 
              <div className='chat-info-post'>
                  <p style={{ fontFamily:'Inter', color:'#6b5151', fontSize:'15px', fontWeight:'600' }}>Create Post</p>
              </div>
            }
        </div>
    </div>
  )
}

export default ChatInfo