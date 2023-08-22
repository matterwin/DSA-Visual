import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useNavigate
import ChatNav from '../chatNav';
import { Divider } from '@mui/material';
import UserPanel from '../userPanel';
import CustomDSANavBtnReplica from '../../Custom/customDSABtnReplica';
import readCookies from '../../../Cookies/readCookies';
import ChatInfo from '../chatInfo';
import { getData } from '../../../UserAuth/UserContext';
import EastIcon from '@mui/icons-material/East';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import CustomizedTooltip from '../../Custom/customTooltip';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import NavigationIcon from '@mui/icons-material/Navigation';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Footer from '../../Nav/Footer/footer';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import CircularWithValueLabel from '../../Custom/CircularWithValueLabel';

import './singlePost.css'

const chatInfo = {
    title:'Post',
    msg:`Some more details on the post you've clicked on`
}

const Loading = () => { //height: '30vh'
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress style={{ color: '#a9c9a3' }} />
        </Box>
      </div>
    );
}

const SinglePost = () => {
    const userData = getData();
    const { post } = useParams();
    const [loading, setLoading] = useState(true);
    const [userPost, setUserPost] = useState(null);
    const [replies, setReplies] = useState(null);
    const [replyWordCount, setReplyWordCount] = useState(0);

    const navigate = useNavigate(); // Get the navigate function

    const handleGoBack = () => {
      navigate(-1); // Navigate back by one step
    };

    const fetchPostReplies = async () => {
        try {
            const url = `http://localhost:5000/feed/posts/replies/${post}`

            const res = await fetch(url);
            const data = await res.json();

            setReplies(data.replies);
            console.log(data.replies);
        } catch (error) {
            return;
        }
    }

    const fetchUserPost = async () => {
        try {
            const userId = readCookies('auth-token');
            const url = `http://localhost:5000/feed/homeFeed/getPost?postId=${post}&userId=${userId}`
        
            const res = await fetch(url);
            const data = await res.json();

            setLoading(false);
            setUserPost(data.post);
            console.log(data.post);
        } catch (error) {
            window.location.href = `/`;
        }
    }

    useEffect(() => {
        fetchUserPost();
        fetchPostReplies();
    },[])

    const likePost = async (specificPostId) => {
        try {
            const userId = readCookies('auth-token');
            const postId = specificPostId;
            console.log(userId);
            console.log(postId);
            const url = `http://localhost:5000/feed/homeFeed/like`;
        
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, postId }),
            });
        
            if (response.status !== 200) {
                throw new Error("Already liked post");
            }
        
            const data = await response.json();
            console.log("data: " + data.msg);
        
            setUserPost((prevPost) => ({
                ...prevPost,
                likeToDislikeCount: data.updatedLikeToDislikeCount,
                hasLiked: true,
                hasDisliked: false
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const dislikePost = async (specificPostId) => {
        try {
            const userId = readCookies('auth-token');
            const postId = specificPostId;
            console.log(userId);
            console.log(postId);
            const url = `http://localhost:5000/feed/homeFeed/dislike`;
        
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, postId }),
            });
        
            if (response.status !== 200) {
                throw new Error("Already liked post");
            }
        
            const data = await response.json();
        
            setUserPost((prevPost) => ({
                ...prevPost,
                likeToDislikeCount: data.updatedLikeToDislikeCount,
                hasDisliked: true,
                hasLiked: false
            }));
        } catch (err) {
            console.log(err);
        }
    };

    const getReplies = () => {
        if (replies === null) {
            return null;
        }
    
        return replies.map((reply, index) => {
            return (
                <div key={index} className={`user-posts-container ${loading ? '' : 'bubble-animation'}`} style={{ animationDelay: '400ms' }}>
                    <div className='div-for-padding-for-replies'>
                        <div className='split-side-container'>
                            <div className='left-contain-post'>
                                <div className='top-level-div' onClick={(e) => e.preventDefault()}>
                                    <CustomizedTooltip title={reply.user.username} color="#4d3939" textColor="#fff">
                                        <div className="chat-cust-pfp-div">
                                            <img className="chat-cust-profile-pic" src={reply.user.profilePic} alt="ProfilePicture" />
                                        </div>
                                    </CustomizedTooltip>
                                </div>
                            </div>
                            <div className='top-and-text-div'>
                                <div className='top-contain'>
                                    <div className='left-top-div' onClick={(e) => e.preventDefault()}>
                                        <p className='likes-text'>{reply.user.firstname} {reply.user.lastname}</p>
                                        <p className='username-at'>@{reply.user.username} &nbsp;</p>
                                    </div>
                                    <div className='right-top-div-new'>
                                        <p className='post-text'>{reply.postedAgo}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className='post-text'>{reply.message}</p>
                        </div>
                            <div className='bottom-post-div'>
                                <div className='center-row-align'>
                                    <div className='like-counter-container' onClick={(e) => e.preventDefault()}>
                                        {/* { !userPost.hasLiked && */}
                                            <div className='new-icon-word-div-thumbs-up'>
                                                <NavigationOutlinedIcon className='thumbs-up-icon'  style={{ color:'red !important'}}  />
                                            </div>
                                        
                                        {/* { userPost.hasLiked && 
                                            <div className='new-icon-word-div-thumbs-up-active'>
                                                <NavigationIcon className='thumbs-up-icon-filled-in' />
                                            </div>
                                        } */}
                                        {/* <p className='likes-text' style={{ color: userPost.hasLiked ? '#a9c9a3' : userPost.hasDisliked ? '#7193ff' : 'inherit' }}>
                                            {userPost.likeToDislikeCount}
                                            </p> */}
                                        {/* { !userPost.hasDisliked && */}
                                            <div className='new-icon-word-div-thumbs-down' >
                                                <NavigationOutlinedIcon className='thumbs-down-icon'  style={{ color:'red !important'}} />                                        
                                            </div>
                                        {/* } */}
                                        {/* { userPost.hasDisliked &&
                                            <div className='new-icon-word-div-thumbs-down-active'>
                                                <NavigationIcon className='thumbs-down-icon-filled' />
                                            </div>
                                        } */}
                                    </div>
                                    {/* <div className='new-icon-word-div-replies'>
                                        <BubbleChartOutlinedIcon className='replies-icon' />
                                        <p className='replies-text' style={{ fontWeight:'500' }}>{userPost.replies.length} Replies</p>
                                    </div> */}
                                    <div className='right-top-div'>
                                        <CustomizedTooltip title="info" color="#4d3939" textColor="#fff">
                                            <MoreHorizOutlinedIcon className='more-info'/>
                                        </CustomizedTooltip>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            );
        });
    };
    
      

    const getPost = () => {
        return (                
            <div>
                <div className={`user-posts-container ${loading ? '' : 'bubble-animation'}`} style={{ animationDelay: '300ms' }}>
                    <div>
                        <div className='div-for-padding'>
                            <div className='split-side-container'>
                                <div className='left-contain-post'>
                                    <div className='top-level-div' onClick={(e) => e.preventDefault()}>
                                        <CustomizedTooltip title={userPost.user.username} color="#4d3939" textColor="#fff">
                                            <div className="chat-cust-pfp-div">
                                                <img className="chat-cust-profile-pic" src={userPost.user.profilePic} alt="ProfilePicture" />    
                                            </div>
                                        </CustomizedTooltip>
                                    </div>
                                </div>
                                <div className='top-and-text-div'>
                                    <div className='top-contain'>
                                        <div className='left-top-div' onClick={(e) => e.preventDefault()}>
                                            <p className='likes-text'>{userPost.user.firstname} {userPost.user.lastname}</p> 
                                            <p className='username-at'>@{userPost.user.username} &nbsp;</p>                                
                                        </div>
                                        <div className='right-top-div-new'>
                                            <p className='post-text'>{userPost.postedAgo}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='title-text'>{userPost.title}</p>
                                <p className='post-text'>{userPost.message}</p>
                            </div>
                            <Divider sx={{ backgroundColor: 'silver', marginTop:'20px', marginBottom:'-5px', width:'100%' }} />
                            <div className='bottom-post-div'>
                                <div className='center-row-align'>
                                    <div className='like-counter-container' onClick={(e) => e.preventDefault()}>
                                        { !userPost.hasLiked &&
                                            <div className='new-icon-word-div-thumbs-up' onClick={() => likePost(userPost._id)}>
                                                <NavigationOutlinedIcon className='thumbs-up-icon' />
                                            </div>
                                        }
                                        { userPost.hasLiked && 
                                            <div className='new-icon-word-div-thumbs-up-active'>
                                                <NavigationIcon className='thumbs-up-icon-filled-in' />
                                            </div>
                                        }
                                        <p className='likes-text' style={{ color: userPost.hasLiked ? '#a9c9a3' : userPost.hasDisliked ? '#7193ff' : 'inherit' }}>{userPost.likeToDislikeCount}</p>
                                        { !userPost.hasDisliked &&
                                            <div className='new-icon-word-div-thumbs-down' onClick={() => dislikePost(userPost._id)}>
                                                <NavigationOutlinedIcon className='thumbs-down-icon'/>                                        
                                            </div>
                                        }
                                        { userPost.hasDisliked &&
                                            <div className='new-icon-word-div-thumbs-down-active'>
                                                <NavigationIcon className='thumbs-down-icon-filled' />
                                            </div>
                                        }
                                    </div>
                                    <div className='new-icon-word-div-replies'>
                                        <BubbleChartOutlinedIcon className='replies-icon' />
                                        <p className='replies-text' style={{ fontWeight:'500' }}>{userPost.replies.length} Replies</p>
                                    </div>
                                    <div className='right-top-div' onClick={(e) => e.preventDefault()}>
                                        <CustomizedTooltip title="info" color="#4d3939" textColor="#fff">
                                            <MoreHorizOutlinedIcon className='more-info'/>
                                        </CustomizedTooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={`user-posts-container ${loading ? '' : 'bubble-animation'}`} style={{ animationDelay: '300ms' }}>
                    <div className='extra-divs'>
                        <CustomizedTooltip title={userPost.formattedCreatedAt} color="#4d3939" textColor="#fff">
                            <div className='icon-to-data-div'>
                                <AccessTimeIcon style={{ color: '#4d3939', cursor:'pointer !important' }}/>
                                <p className='data-text'>{userPost.formattedCreatedAt}</p>
                            </div>
                        </CustomizedTooltip>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>   
            <div className='profile-nav-container'>
                <div className='profile-nav'>
                    <CustomizedTooltip title="Go back" color="#4d3939" textColor="#fff">
                        <div onClick={handleGoBack}>
                            <EastIcon className='go-back-arrow' style={{ fontSize:'25px' }}/>
                        </div>
                    </CustomizedTooltip>
                    <p className='save-p-text' style={{ marginLeft:'10px' }}>Post</p>
                </div>
            </div>
            <div className='postbox-div'>
                <div className='sub-nav-container-chat' style={{zIndex:'1'}}>
                    <div className="sub-inside-nav">
                        <div className="sub-nav-l-r-container">
                            <div className="sub-left-side">
                                <div className='sub-left-side-row-contain'>
                                    <CustomDSANavBtnReplica />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat-container">
                <div className="left-side-chat">
                    <UserPanel />
                    <ChatNav /> 
                </div>
                <div className="center-side-chat">
                    {loading && <Loading />}
                    {!loading && getPost()}
                    {!loading &&
                        <>
                            <div className={`user-posts-container ${loading ? '' : 'bubble-animation'}`} style={{ animationDelay: '400ms' }}>
                                <div className='comment-post-container'>
                                    <div className="chat-cust-pfp-div">
                                        <img className="chat-cust-profile-pic" src={userData.pic} alt="ProfilePicture" />
                                    </div>
                                    <div className='reply-box-and-btn-div'>
                                        <textarea 
                                            className='input-from-user' 
                                            placeholder='Reply to this post'
                                            onChange={(e) => setReplyWordCount(e.target.value.length)}
                                        />
                                        <div className='bottom-of-reply-div'>
                                            {replyWordCount > 0 && <>
                                                <CircularWithValueLabel replyWordCount={replyWordCount} />
                                                <Divider sx={{ backgroundColor: 'silver', width:'2px', height:'30px' }}/>
                                            </>}
                                            <button
                                                className='reply-btn'
                                                style={{ opacity: replyWordCount <= 0 || replyWordCount > 300 ? 0.5 : 1 }}
                                                disabled={replyWordCount <= 0 || replyWordCount > 300}
                                                >
                                                <p>Reply</p>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='reply-container'>
                                {replies != null && getReplies()}
                            </div>
                        </>
                    }
                </div>
                <div className="right-side-chat">
                <ChatInfo title={chatInfo.title} msg={chatInfo.msg} showButton={false}/>
                <p className='copyright'>© 2023 Matthew Erwin</p>
                </div>
            </div>
            <div className='hide-footer'>
                <Footer />
            </div>
        </div>
    )
}

export default SinglePost;