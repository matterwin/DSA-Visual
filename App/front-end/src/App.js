import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//basics
import Login from './UserAuth/login';
import Register from './UserAuth/register';
import Home from './Core/Home/home';
import NavIn from './Core/Nav/NavLoggedIn/navIn';
import NavOut from './Core/Nav/NavLoggedOut/navOut';
import Notfound from './Core/NotFound/notfound';
import Chat from './Core/Chat/chat';
import ChatNav from './Core/Chat/chatNav';
import ForYouPage from './Core/Chat/Cats/foryouPage';
import HomePage from './Core/Chat/Cats/homePage';
import FollowingPage from './Core/Chat/Cats/followingPage';

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
import './App.css';

function App() {

  const { pathname } = window.location;
  const userLoggedIn = (readCookies('auth-token')) ? true : false;

  if(readCookies('showChat') === undefined){
    createChatCookie(true);
  }

  if(userLoggedIn) var name = readCookies('name');

  const validPath = pathname === '/' 
                    || pathname === '/chat'
                    || pathname === '/chat/following'
                    || pathname === '/chat/home'
                    || pathname === '/chat/foryou'
                    || pathname === '/login'
                    || pathname === '/register'
                    || pathname === '/' + name
                    || (userLoggedIn && pathname === '/settings/profile')
                    || (userLoggedIn && pathname === '/settings/chat')
                    || (userLoggedIn && pathname === '/settings/notifications')
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
       <Router>

          {HideNav}
          {ShowSettingsNavIf}
          {/* {ShowChatNavIf} */}
          {/* <CustomSnackbar message={"testing from app"}/> */}

          <Routes>
            <Route caseSensitive path="/" element={<Home />}/>
            <Route caseSensitive path="/chat" element={<Chat />}/>
            <Route caseSensitive path="/visuals/merge" element={<Merge />}/>
            <Route caseSensitive path="/visuals/quick" element={<Quick />}/>
            <Route caseSensitive path="/visuals/insertion" element={<Insert />}/>
            <Route caseSensitive path="/visuals/bubble" element={<Bubble />}/>
            <Route caseSensitive path="/visuals/selection" element={<Selection />}/>
            <Route caseSensitive path="/visuals/test" element={<Test />}/>
            <Route caseSensitive path="/visuals/dfs" element={<DFS />}/>
            <Route caseSensitive path="/visuals/bfs" element={<BFS />}/>
            <Route caseSensitive path="/chat/home" element={<HomePage />}/>
            <Route caseSensitive path="/visuals/binarysearch" element={<Binary />}/>
            {!userLoggedIn && <Route caseSensitive path="/login" element={<Login />}/>}
            {!userLoggedIn && <Route caseSensitive path="/register" element={<Register />}/>}
            {userLoggedIn && <Route caseSensitive path="/chat/following" element={<FollowingPage />}/>}
            {userLoggedIn && <Route caseSensitive path="/chat/foryou" element={<ForYouPage />}/>}
            {userLoggedIn && <Route caseSensitive path="/:username" element={<Profile />} />}
            {userLoggedIn && <Route caseSensitive path="/settings/profile" element={<SettingsProfile />}/>}
            {userLoggedIn && <Route caseSensitive path="/settings/chat" element={<SettingsChat />}/>}
            {userLoggedIn && <Route caseSensitive path="/settings/notifications" element={<SettingsNotif />}/>}
            <Route path="*" element={<Notfound />} />
          </Routes>

        </Router>
    </div>
  );
}

export default App;
