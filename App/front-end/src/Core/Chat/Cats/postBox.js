import React, { useState, useRef } from 'react'
import readCookies from '../../../Cookies/readCookies'
import CustomizedTooltip from '../../Custom/customTooltip'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import './postBox.css'

const Loading = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress style={{ color: '#a9c9a3' }} />
        </Box>
      </div>
    );
}

const PostBox = () => {
    const [showPostBox, setShowBoxPost] = useState(false);
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [isPostValid, setIsPostValid] = useState(false);
    const pp = readCookies('pp')
    const username = readCookies('name');

    const handleSend = async () => {
        setLoading(true);
        const url = `http://localhost:5000/feed/homeFeed/post`;
    
        const userId = readCookies('auth-token');
    
        const requestBody = {
            userId,
            message
        };
        requestBody.message = message;
    
        if (title) {
            requestBody.title = title;
        }
    
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });
    
        // const data = await response.json();
        handleClose();
        window.location.reload();
    }
    

    const handleClose = () => {
        setShowBoxPost(false);
        setIsPostValid(false);
        setTitle('');
        setMessage('');
        setLoading(false);
    }

    return (
        <div className={`box-contain ${showPostBox ? 'box-contain-active' : ''}`}>
            <div className='box-contain-cols'>
                <div className='box-div'>
                    <CustomizedTooltip title={username}>
                        <div className="chat-cust-pfp-div">
                            <img className="chat-cust-profile-pic" src={pp} alt="ProfilePicture" />    
                        </div>
                    </CustomizedTooltip>
                    { !showPostBox && 
                        <input 
                            onClick={() => setShowBoxPost(true)} 
                            className='prop-box' type="text" 
                            placeholder="Make a post"       
                        /> 
                    }
                    { showPostBox && 
                    <>
                        {isPostValid &&       
                            <button className='send-btn-valid' onClick={handleSend}>
                                <p className='send-it'>Post</p>
                            </button>            
                        }
                        {!isPostValid &&       
                            <button className='send-btn-invalid'>
                                <p className='send-it'>Post</p>
                            </button>            
                        }
                    </> 
                    }
                    { showPostBox && 
                        <div className='exit-btn-div' onClick={handleClose}>
                            <CloseIcon className='exit-icon' style={{ fontSize:'40' }}/>
                        </div> 
                    }
                </div>
                { showPostBox && 
                <>
                    {!loading && 
                    <>
                        <input 
                            autoFocus={showPostBox} 
                            className='prop-box' 
                            onChange={(q) => setTitle(q.target.value)} 
                            value={title} type="text" 
                            placeholder="Title (optional)"/>
                        <input 
                            className='prop-box' 
                            onChange={(e) => {
                                setMessage(e.target.value);
                                if(e.target.value.length < 1)
                                    setIsPostValid(false);
                                else
                                    setIsPostValid(true);
                            }} 
                            type="text" value={message} 
                            placeholder="What do you what to post?"
                        />
                    </> 
                    }
                    {loading && <Loading />}
                </>
                } 
            </div>
        </div>
    ) 
}

export default PostBox