import React, { useState, useEffect } from 'react'
import CustomizedTooltip from '../../Custom/customTooltip'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import { useNavigate } from "react-router-dom";
import { Divider } from '@mui/material';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import NavigationIcon from '@mui/icons-material/Navigation';
import CircularProgress from '@mui/material/CircularProgress';
import BubbleChartOutlinedIcon from '@mui/icons-material/BubbleChartOutlined';
import Box from '@mui/material/Box';

import './postBox.css'
import './userPosts.css'
import readCookies from '../../../Cookies/readCookies';

const Loading = () => { //height: '30vh'
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress style={{ color: '#a9c9a3' }} />
      </Box>
    </div>
  );
}

const UserPosts = ({ setSortBy, sortBy }) => {
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); // init page
    const [totalPages, setTotalPages] = useState(1);
    const [isBottom, setIsBottom] = useState(false);
    const [subtractTotalPages, setSubtractTotalPages] = useState(1);
    const [loadingMorePages, setLoadingMorePages] = useState(false);
    const [endOfList, setEndOfList] = useState(false);
    const [sort, setSort] = useState()
    const navigate = useNavigate();

    console.log('rerender');

    useEffect(() => {
        setTotalPages(1);
        setPage(1);
        setSubtractTotalPages(1);
        setLoadingMorePages(false);
        setEndOfList(false);
        setLoading(true);
        setFeed([]);
        fetchFeed(false);
    }, [sortBy]);

    const fetchFeed = async (pass) => {
        console.log(totalPages);
        if(totalPages > 0){
            try {
                const userId = readCookies('auth-token');
                const getSortType = localStorage.getItem('sortType');
                const url = `http://localhost:5000/feed/homeFeed/allSortBy?page=${page}&userId=${userId}&sortBy=${getSortType}`;
            
                const response = await fetch(url);
            
                if (response.status !== 200) {
                    throw new Error("Feed went wrong");
                }
            
                const data = await response.json();
                if(pass) //not working
                    setFeed(data.feed);
                else 
                    setFeed((prevFeed) => [...prevFeed, ...data.feed]);
                setLoading(false);
                setLoadingMorePages(false);
                setPage((prevPage) => prevPage + 1);
                setTotalPages(data.totalPages - subtractTotalPages);
                setSubtractTotalPages((prev) => prev + 1);
            } catch (err) {
                console.log(err);
            }
        }
        else{
            console.log('test');
            setLoading(false);
            setLoadingMorePages(false);
            setEndOfList(true);
        }
    };

    function handleChange(){
        setLoading(true);
        setTotalPages(1);
        setPage(1);
        setSubtractTotalPages(1);
        setLoadingMorePages(false);
        setEndOfList(false);
        setFeed([]);
        setPage(1); // Reset the page to 1
        fetchFeed(true);
    }
      
    // useEffect(() => {
    //     fetchFeed(); // Initial fetch
    // }, []);

    useEffect(() => {
        if (isBottom && !loading) {
            setLoadingMorePages(true);
            fetchFeed();
          }
    }, [isBottom, loading]);

    useEffect(() => {
        function handleScroll() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            
            if (windowHeight + scrollTop >= documentHeight) {
            setIsBottom(true);
            } else {
            setIsBottom(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
        
            // Update the feed state with the updated likes count
            setFeed((prevFeed) =>
                prevFeed.map((post) => {
                    if (post._id === specificPostId) {
                        return { 
                            ...post, 
                            likeToDislikeCount: data.updatedLikeToDislikeCount,
                            hasLiked: true,
                            hasDisliked: false  
                        };
                    }
                    return post;
                })
            );
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
        
            // Update the feed state with the updated likes count
            setFeed((prevFeed) =>
                prevFeed.map((post) => {
                    if (post._id === specificPostId) {
                        return { 
                            ...post, 
                            likeToDislikeCount: data.updatedLikeToDislikeCount, 
                            hasDisliked: true,
                            hasLiked: false
                        };
                    }
                    return post;
                })
            );
            
        } catch (err) {
            console.log(err);
        }
    };

    const handleNavigation = (postId) => {
        window.location.href = `/chat/post/${postId}`;
    };

    const getFeed = () => {
        const handleSelection = (post, e) => {
            const selectedText = window.getSelection().toString();
            if (selectedText.length > 0) {
                return;
            }
            handleNavigation(post);
        };


        return feed.map((post, index) => {
            return (
                <div
                    className={`user-posts-container ${loading ? '' : 'bubble-animation'}`}
                    key={post._id}
                    style={{ transitionDelay: `${index * 100.2}s` }}
                >
                    <div
                        className="clickable-container"
                        onClick={(e) => handleSelection(post._id, e)}
                    >
                        <div className='div-for-padding'>
                            <div className='split-side-container'>
                                <div className='left-contain-post'>
                                    <div className='top-level-div' onClick={(e) => e.preventDefault()}>
                                        <CustomizedTooltip title={post.user.username} color="#4d3939" textColor="#fff">
                                            <div className="chat-cust-pfp-div">
                                                <img className="chat-cust-profile-pic" src={post.user.profilePic} alt="ProfilePicture" />    
                                            </div>
                                        </CustomizedTooltip>
                                    </div>
                                </div>
                                <div className='top-and-text-div'>
                                    <div className='top-contain'>
                                        <div className='left-top-div' onClick={(e) => e.preventDefault()}>
                                            <p className='likes-text'>{post.user.firstname} {post.user.lastname}</p> 
                                            <p className='username-at'>@{post.user.username} &nbsp;</p>                                
                                        </div>
                                        <div className='right-top-div-new'>
                                            <p className='post-text'>{post.postedAgo}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='title-text'>{post.title}</p>
                                <p className='post-text'>{post.message}</p>
                            </div>
                            <Divider sx={{ backgroundColor: 'silver', marginTop:'20px', marginBottom:'-5px', width:'100%' }} />
                            <div className='bottom-post-div'>
                                <div className='center-row-align'>
                                    <div className='like-counter-container' onClick={(e) => e.preventDefault()}>
                                        { !post.hasLiked &&
                                            <div className='new-icon-word-div-thumbs-up' onClick={(e) => { e.stopPropagation(); likePost(post._id); }}>
                                                <NavigationOutlinedIcon className='thumbs-up-icon' />
                                            </div>
                                        }
                                        { post.hasLiked && 
                                            <div className='new-icon-word-div-thumbs-up-active' onClick={(e) => { e.stopPropagation(); }}>
                                                <NavigationIcon className='thumbs-up-icon-filled-in' />
                                            </div>
                                        }
                                        <p className='likes-text' 
                                            style={{ 
                                                color: post.hasLiked ? '#a9c9a3' : post.hasDisliked 
                                                ? '#7193ff' : '#6b5151',
                                                textDecoration: 'none'
                                            }}
                                        >
                                            {post.likeToDislikeCount}
                                        </p>
                                        { !post.hasDisliked &&
                                            <div className='new-icon-word-div-thumbs-down' onClick={(e) => { e.stopPropagation(); dislikePost(post._id); }}>
                                                <NavigationOutlinedIcon className='thumbs-down-icon'/>                                        
                                            </div>
                                        }
                                        { post.hasDisliked &&
                                            <div className='new-icon-word-div-thumbs-down-active' onClick={(e) => { e.stopPropagation(); }}>
                                                <NavigationIcon className='thumbs-down-icon-filled' onClick={(e) => e.preventDefault()}/>
                                            </div>
                                        }
                                    </div>
                                    <div className='new-icon-word-div-replies'>
                                        <BubbleChartOutlinedIcon className='replies-icon' />
                                        <p className='replies-text' style={{ fontWeight:'500' }}>{post.replies.length} Replies</p>
                                    </div>
                                    <div className='right-top-div' onClick={(e) => { e.stopPropagation(); }}>
                                        <CustomizedTooltip title="info" color="#4d3939" textColor="#fff">
                                            <MoreHorizOutlinedIcon className='more-info'/>
                                        </CustomizedTooltip>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            {loading && <Loading />}
            {!loading && getFeed()}
            {(loadingMorePages && <Loading />)} 
            {/* {endOfList && <p>no more posts</p>} */}
        </div>
    )
}

export default UserPosts