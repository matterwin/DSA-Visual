import React, { useState, useEffect } from 'react'
import CustomizedTooltip from '../../Custom/customTooltip'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOffAltOutlinedIcon from '@mui/icons-material/ThumbDownOffAltOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import { Divider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './postBox.css'
import './userPosts.css'

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress style={{ color: '#a9c9a3' }} />
      </Box>
    </div>
  );
}

const UserPosts = () => {
    const [feed, setFeed] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); // init page
    const [totalPages, setTotalPages] = useState(1);
    const [isBottom, setIsBottom] = useState(false);
    const [subtractTotalPages, setSubtractTotalPages] = useState(1);
    const [loadingMorePages, setLoadingMorePages] = useState(false);

    const fetchFeed = async () => {
        if(totalPages > 0){
            try {
                const url = `http://localhost:5000/feed/homeFeed/all?page=${page}`;
            
                const response = await fetch(url);
            
                if (response.status !== 200) {
                    throw new Error("Feed went wrong");
                }
            
                const data = await response.json();
            
                setFeed((prevFeed) => [...prevFeed, ...data.feed]);
                setLoading(false);
                setLoadingMorePages(false);
                console.log(data.feed);
                setPage((prevPage) => prevPage + 1);
                setTotalPages(data.totalPages - subtractTotalPages);
                setSubtractTotalPages((prev) => prev + 1);
            } catch (err) {
                console.log(err);
            }
        }
    };
      
      useEffect(() => {
        fetchFeed(); // Initial fetch
      }, []);

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

      const getFeed = () => {
        return feed.map((post) => (
            <div className='user-posts-container' key={post._id}>
                <div className='div-for-padding'>
                    <div className='split-side-container'>
                        <div className='left-contain-post'>
                            <div className='top-level-div'>
                                <CustomizedTooltip title={post.user.username}>
                                    <div className="chat-cust-pfp-div">
                                        <img className="chat-cust-profile-pic" src={post.user.profilePic} alt="ProfilePicture" />    
                                    </div>
                                </CustomizedTooltip>
                                <div className='like-counter-container'>
                                    <div className='new-icon-word-div-thumbs-up'>
                                        <ThumbUpOutlinedIcon className='thumbs-up-icon' />
                                    </div>
                                    <p className='likes-text'>{post.likes.length}</p>
                                    <div className='new-icon-word-div-thumbs-down'>
                                        <ThumbDownOffAltOutlinedIcon className='thumbs-down-icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='top-and-text-div'>
                            <div className='top-contain'>
                                <div className='left-top-div'>
                                    <p className='likes-text'>@{post.user.username} &nbsp;</p>
                                    <p> • 6h</p>
                                </div>
                                <div className='right-top-div'>
                                    <CustomizedTooltip title="info">
                                        <MoreHorizOutlinedIcon sx={{stroke: "#4d3939", strokeWidth: 0.4, color:'#4d3939', fontSize:'22px', fontStyle:'bold'}}/>
                                    </CustomizedTooltip>
                                </div>
                            </div>
                            <div>
                                <p className='title-text'>{post.title}</p>
                                <p className='post-text'>{post.message}</p>
                            </div>
                        </div>
                    </div>
                    <Divider sx={{ backgroundColor: 'silver', marginTop:'10px', marginBottom:'10px', width:'100%' }} />
                    <div className='bottom-post-div'>
                        <div className='center-row-align'>
                            <div className='new-icon-word-div-replies'>
                                <MapsUgcOutlinedIcon className='replies-icon' />
                                <p className='replies-text' style={{ fontWeight:'500' }}>{post.replies.length} Replies</p>
                            </div>
                        </div>
                        <div className='new-icon-word-div-repost'>
                            <SyncOutlinedIcon className='repost-icon' />
                            <p className='repost-text' style={{ fontWeight:'500' }}>Repost</p>
                        </div>
                    </div>
                </div>
            </div>
        ));
      };

    return (
        <div>
            {loading && <Loading />}
            {!loading && getFeed()}
            {(loadingMorePages && <Loading />)} 
        </div>
    )
}

export default UserPosts