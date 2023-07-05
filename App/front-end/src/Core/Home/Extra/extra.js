import * as React from 'react';
import { useState, useEffect } from 'react';
import './extra.css'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CloseFullscreenOutlinedIcon from '@mui/icons-material/CloseFullscreenOutlined';
import CustomizedTooltip from '../../Custom/customTooltip';
import CircularProgress from '@mui/material/CircularProgress';
import readCookies from '../../../Cookies/readCookies';
import Box from '@mui/material/Box';

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress style={{ color: '#a9c9a3' }} />
      </Box>
    </div>
  );
}

const Extra = () => {
  const [showChat, setShowChat] = useState(true);
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchChat = () => {
    const url = 'http://localhost:5000/livechat/seeChat';
    
    fetch(url)
      .then(res => {
        if (res.status !== 200) {
          throw new Error("Email is taken");           
        }
        return res.json();
      })
      .then((data) => {
        setChat(data.chat);
        setLoading(false);
        console.log(data.chat);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchChat(); // Initial fetch

    const intervalId = setInterval(fetchChat, 5000); // Fetch every 5 seconds

    return () => {
      clearInterval(intervalId); // Cleanup on component unmount
    };
  }, []);


  const getChat = () => {
    return chat.map((comment) => (
      <div className='single-msg-contain' key={comment._id}>
        <p className='word-warping'>
          <span className='name-of-comment' style={{ color: comment.user.color }}>
          {comment.user.username}
          </span>
          <span className='msg-of-user'>
            :&nbsp;{comment.message}
          </span>
        </p>
      </div>
    ));
  };

  const postMsg = (e) => {
    e.preventDefault(); // Prevent the form from submitting
  
    const inputField = document.querySelector('.msg-box');
    const msg = inputField.value;
  
    if (readCookies('auth-token')) {
      const url = 'http://localhost:5000/livechat/postComment';
  
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: readCookies('auth-token'), message: msg }),
      })
        .then(res => {
          if (res.status !== 201) {
            throw new Error("Email is taken");
          }
  
          inputField.value = ''; // Clear the input field
          return fetchChat();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  

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
            {loading && <Loading />}
            {!loading && getChat()}
          </div>

          <div className='msg-box-contain'>
            <input className='msg-box' type="text" placeholder="Send a message"></input>
            <div className='chat-btn-div-contain'>
              <div className='chat-btn-div' onClick={postMsg}>
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