import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ChatNav from '../../chatNav';
import { Divider } from '@mui/material';
import UserPanel from '../../userPanel';
import CustomDSANavBtnReplica from '../../../Custom/customDSABtnReplica';
import ChatInfo from '../../chatInfo';
import { getData, setData } from '../../../../UserAuth/UserContext';
import UserPostsList from './userPostsList';
import TabBox from '../tabBox';
import ThreePIcon from '@mui/icons-material/ThreeP';
import NavigationIcon from '@mui/icons-material/Navigation';
import readCookies from '../../../../Cookies/readCookies';
import CustomizedTooltip from '../../../Custom/customTooltip';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import EastIcon from '@mui/icons-material/East';
import CustomForms from './customForms';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import '../../chat.css'
import './profilePage.css'
import './profileEdit.css'

const chatInfo = {
    title:'Profile',
    msg:'Your profile page. Here you can see your likes and posts.'
}

function ProfileEdit() {
    const userData = getData();
    const [numberOf, setNumberOf] = useState([]);
    const [firstName, setFirstName] = useState(userData.first);
    const [lastName, setLastName] = useState(userData.last);
    const [bio, setBio] = useState(userData.bio);
    const [imageSelected, setImageSelected] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        document.title = "Profile | Heyso";
    }, []);

    const getCounts = async() => {
        const userId = readCookies('auth-token');
        const url = `http://localhost:5000/user/numberOf`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
        });
    
    
        if (response.status !== 200) {
            throw new Error("Feed went wrong");
        }
    
        const data = await response.json();
    
        setNumberOf(data.numberOf);
        // setLoading(false);
    }

    useEffect(() => {
        getCounts();
    },[])

    const uploadImage = async() => {
        const userId = readCookies('auth-token');
        const url = `http://localhost:5000/upload/changePP/${userId}`;

        console.log(imageSelected);
        const formData = new FormData();
        formData.append('image', imageSelected);

        const res = await fetch(url, {
            method: 'POST',
            body: formData,
        })

        const data = await res.json();
        console.log(data);
    }

    const handleImageSelect = (event) => {
        const selectedImage = event.target.files[0];
        setImageSelected(selectedImage);

         // Read the selected image and set the preview
        const reader = new FileReader();
        reader.onload = (e) => {
        setImagePreview(e.target.result);
        };
        reader.readAsDataURL(selectedImage);
    };

    const handleSave = () => {
        if(imageSelected === null){
            alert('no image is selected yet')
            return;
        }
        uploadImage();
    }

  return (
    <div>   
        <div className='profile-nav-container'>
            <div className='profile-nav'>
                <CustomizedTooltip title="Go back" color="#4d3939" textColor="#fff">
                    <a href={'/' + userData.username }>
                        <EastIcon className='go-back-arrow' style={{ fontSize:'25px' }}/>
                    </a>
                </CustomizedTooltip>
                <p className='save-p-text' style={{ marginLeft:'10px' }}>Edit Profile</p>
                <div className='save-profile-btn' onClick={handleSave}><h4  className='save-p'>Save</h4></div>
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
            <div className='teste'>
                <div className='backg-for-profile-div'>
                    <div 
                        className='color-bg-profile-page' 
                        style={{  background: `#${userData.color}`, borderRadius: '0px'}}
                    >
                        <input type="file" id="upload" hidden/>
                        <label htmlFor="upload">
                            <CustomizedTooltip title='Edit Image' color="#4d3939" textColor="#fff">
                                <PhotoCameraOutlinedIcon className='icons-for-bg' style={{ fontSize: '30px' }}/>
                            </CustomizedTooltip>
                        </label>
                        <CustomizedTooltip title='Delete Image' color="#4d3939" textColor="#fff">
                            <DeleteForeverOutlinedIcon className='icons-for-bg' style={{ fontSize: '30px' }}       type="file"/>
                        </CustomizedTooltip>
                        
                    </div>
                        <div className='div-for-everything-else-in-profile'>
                            <div className='basic-info-div'>
                                <div className='top-div-offsets'>
                                    <div className="prof-page-pfp-div">
                                        <input type="file" id="upload-for-pfp" hidden onChange={handleImageSelect}/>
                                        <label htmlFor="upload-for-pfp">
                                            <PhotoCameraOutlinedIcon className='icons-for-bg-for-pfp' style={{ fontSize: '30px' }}/>  
                                        </label>
                                        {imagePreview !== null ? (
                                            <img className="prof-page-profile-pic" src={imagePreview} alt="ProfilePreview" />
                                        ) : (
                                            <img className="prof-page-profile-pic" src={userData.pic} alt="ProfilePicture" />
                                        )}
                                    </div>
                                    <div className='name-n-username-div'>
                                        <p className='name-p-prof-page'>{firstName} {lastName}</p>
                                        <p className='username-p-prof-page'>@{userData.username}</p>
                                    </div>
                                </div>
                                <p className='bio'>{bio}</p>
                            </div> 
                        </div>
                    </div>
                </div>
                <Divider sx={{ backgroundColor: 'silver', marginTop:'10px', marginBottom:'10px', width:'100%' }} />
                <TabBox title1="Edit Profile" active1={true} onClick={() => window.location.reload()} />
                {/* <CustomForms label="First name*" defaultValue={firstName} showTextAreaInstead={false} handleFirstNameChange={handleFirstNameChange}/>
                <CustomForms label="Last name*" defaultValue={lastName} showTextAreaInstead={false}/>
                <CustomForms label="Bio" defaultValue={bio} showTextAreaInstead={true}/> */}
                <p className='about-you'>About you</p>
                <CustomForms label="First name*"  value={firstName} onChange={setFirstName} showTextAreaInstead={false}/>
                <CustomForms label="Last name*"  value={lastName} onChange={setLastName} showTextAreaInstead={false}/>
                <CustomForms label="Bio"  value={bio} onChange={setBio} showTextAreaInstead={true}/>
                <Divider sx={{ backgroundColor: 'silver', marginTop:'10px', marginBottom:'10px', width:'100%' }} />
                <p className='about-you'>Social</p>
                <CustomForms label="Github"  value={lastName}  showTextAreaInstead={false}/>
                <CustomForms label="LinkedIn" value={bio}  showTextAreaInstead={false}/>
                <Divider sx={{ backgroundColor: 'silver', marginTop:'10px', marginBottom:'10px', width:'100%' }} />
                <TabBox title1="Settings" active1={true} onClick={() => window.location.reload()}/>
          </div>
          <div className="right-side-chat">
            <ChatInfo title={chatInfo.title} msg={chatInfo.msg} showButton={false}/>
            <p className='copyright'>© 2023 Matthew Erwin</p>
          </div>
        </div>
    </div>
  );
}

export default ProfileEdit
