import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//basics
import Login from './UserAuth/login';
import Register from './UserAuth/register';
import Home from './Core/Home/home';
import NavIn from './Core/Nav/NavLoggedIn/navIn';
import NavOut from './Core/Nav/NavLoggedOut/navOut';
import Notfound from './Core/NotFound/notfound';
import ProfileLikes from './Core/Chat/Cats/Profile/profileLikes';
import ProfileReplies from './Core/Chat/Cats/Profile/profileReplies';
import ForYouPage from './Core/Chat/Cats/foryouPage';
import HomePage from './Core/Chat/Cats/homePage';
import FollowingPage from './Core/Chat/Cats/followingPage';
import ProfilePage from './Core/Chat/Cats/Profile/profilePage';
import ProfileEdit from './Core/Chat/Cats/Profile/profileEdit';
import SinglePost from './Core/Chat/Cats/singlePost'; 
import RequestedPage from './Core/Home/requestedPage';

// import CustomSnackbar from './Core/Custom/customSnackbar';

//visuals -- sorting
import Test from './Core/Visuals/Sort/test';
import Merge from './Core/Visuals/Sort/Merge';
import Quick from './Core/Visuals/Sort/Quick';
import Insert from './Core/Visuals/Sort/Insert';
import Selection from './Core/Visuals/Sort/Selection';
import Bubble from './Core/Visuals/Sort/Bubble';

//visuals -- searching
import DFS from './Core/Visuals/Search/DFS';
import BFS from './Core/Visuals/Search/BFS';
import Binary from './Core/Visuals/Search/Binary';

//profile
import Profile from './Core/Profile/Profile/profile';
import SettingsNav from './Core/Profile/Settings/settingsNav';
import SettingsProfile from './Core/Profile/Settings/settingsProfile';
import SettingsChat from './Core/Profile/Settings/settingsChat';
import SettingsNotif from './Core/Profile/Settings/settingsNotif';

import readCookies from './Cookies/readCookies';
import { createChatCookie } from './Cookies/createCookies';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { getData, setData } from './UserAuth/UserContext'; 
import './App.css';
import 'prismjs/themes/prism.css';

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'75vh'}}>
      <Box sx={{ display: 'flex', justifyContent: 'center',alignItems: 'center', flexDirection:'column', gap:'15px'  }}>
        <p style={{color:'#a9c9a3', fontSize:'18px', fontFamily:'Inter'}}>Slow huh?</p>
        <CircularProgress style={{ color: '#a9c9a3' }} />
      </Box>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  const { pathname } = window.location;
  const userLoggedIn = (readCookies('auth-token')) ? true : false;

  if(readCookies('showChat') === undefined){
    createChatCookie(true);
  }

  if(userLoggedIn) var name = readCookies('name');

  const fetchInfo = async () => {
    try {
        const userId = readCookies('auth-token');
        const url = `http://localhost:5000/user/basicInfo`;
    
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
        });
    
        if (response.status !== 200) {
            throw new Error("Info went wrong");
        }
    
        const data = await response.json();
        setData(data.username, data.color, data.profPic, data.firstname, data.lastname, data.bio)
        setLoading(false);
        // console.log(getData());
    } catch (err) {
        console.log(err);
    }
  }

  useEffect(() => {
    if(userLoggedIn)
      fetchInfo(); // Initial fetch
    else
      setLoading(false);
  }, []);

  const validPath = pathname === '/' 
                    || pathname === '/chat'
                    || pathname === '/chat/following'
                    || pathname === '/chat/foryou'
                    || pathname === '/chat/foryou'
                    || pathname === '/login'
                    || pathname === '/register'
                    || pathname === '/' + name
                    // || pathname === '/' + name + '/edit'
                    || pathname === '/' + name + '/replies'
                    || pathname === '/' + name + '/likes'
                    || (userLoggedIn && pathname === '/settings/profile')
                    || (userLoggedIn && pathname === '/settings/chat')
                    || (userLoggedIn && pathname === '/settings/notifications')
                    || pathname === '/merge'
                    || pathname === '/quick'
                    || pathname === '/insertion'
                    || pathname === '/bubble'
                    || pathname === '/topological'
                    || pathname === '/selection'
                    || pathname === '/heap'
                    || pathname === '/visuals/merge'
                    || pathname === '/visuals/quick'
                    || pathname === '/visuals/insertion'
                    || pathname === '/visuals/bubble'
                    || pathname === '/visuals/selection'
                    || pathname === '/visuals/dfs'
                    || pathname === '/visuals/bfs'
                    || pathname === '/visuals/binarysearch'
                    || pathname === '/visuals/test'

  const validSettingsPath = (pathname.includes('/settings') ? true : false);
  // const validChatPath = (pathname.includes('/chat') ? true : false);

  const HideNavIf = pathname === '/register' 
                    || pathname === '/login'  

  const HideNav = validPath && !HideNavIf && (
    userLoggedIn ? <NavIn /> : <NavOut />
  );

  const ShowSettingsNavIf = (userLoggedIn && validSettingsPath && validPath) ? <SettingsNav /> : <></>;
  // const ShowChatNavIf = (validChatPath && validPath) ? <ChatNav /> : <></>;

  return (
    <div>

      {loading && <Loading />}
      {!loading && 
        <Router>

          {HideNav}
          {ShowSettingsNavIf}

          <Routes>
            <Route caseSensitive path="/" element={<Home />}/>
            <Route caseSensitive path="/visuals/merge" element={<Merge />}/>
            <Route caseSensitive path="/visuals/quick" element={<Quick />}/>
            <Route caseSensitive path="/visuals/insertion" element={<Insert />}/>
            <Route caseSensitive path="/visuals/bubble" element={<Bubble />}/>
            <Route caseSensitive path="/visuals/selection" element={<Selection />}/>
            <Route caseSensitive path="/visuals/test" element={<Test />}/>
            <Route caseSensitive path="/visuals/dfs" element={<DFS />}/>
            <Route caseSensitive path="/visuals/bfs" element={<BFS />}/>
            <Route caseSensitive path="/visuals/binarysearch" element={<Binary />}/>

            <Route caseSensitive path="/chat" element={<HomePage />}/>
            <Route caseSensitive path="/chat/post/:post" element={<SinglePost />}/>
            <Route caseSensitive path="/merge" element={<RequestedPage f="merge" />}/>
            <Route caseSensitive path="/quick" element={<RequestedPage f="quick" />}/>
            <Route caseSensitive path="/bubble" element={<RequestedPage f="bubble" />}/>
            <Route caseSensitive path="/insertion" element={<RequestedPage f="insertion" />}/>
            <Route caseSensitive path="/topological" element={<RequestedPage f="topological" />}/>
            <Route caseSensitive path="/heap" element={<RequestedPage f="heap" />}/>
            <Route caseSensitive path="/selection" element={<RequestedPage f="selection" />}/>

            {!userLoggedIn && <Route caseSensitive path="/login" element={<Login />}/>}
            {!userLoggedIn && <Route caseSensitive path="/register" element={<Register />}/>}
            {userLoggedIn && <Route caseSensitive path="/chat/following" element={<FollowingPage />}/>}
            {userLoggedIn && <Route caseSensitive path="/:username" element={<ProfilePage />}/>}
            {userLoggedIn && <Route caseSensitive path="/:username/edit" element={<ProfileEdit />}/>}
            {userLoggedIn && <Route caseSensitive path="/:username/replies" element={<ProfileReplies />}/>}
            {userLoggedIn && <Route caseSensitive path="/:username/likes" element={<ProfileLikes />}/>}
            {userLoggedIn && <Route caseSensitive path="/chat/foryou" element={<ForYouPage />}/>}
            {userLoggedIn && <Route caseSensitive path="/settings/profile" element={<SettingsProfile />}/>}
            {userLoggedIn && <Route caseSensitive path="/settings/chat" element={<SettingsChat />}/>}
            {userLoggedIn && <Route caseSensitive path="/settings/notifications" element={<SettingsNotif />}/>}
            
            <Route path="*" element={<Notfound />} />
          </Routes>

        </Router>
      }
    </div>
  );
}

export default App;