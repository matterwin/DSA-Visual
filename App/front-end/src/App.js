import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './UserAuth/login';
import Register from './UserAuth/register';
import Home from './Core/Home/home';
import NavIn from './Core/Nav/NavLoggedIn/navIn';
import NavOut from './Core/Nav/NavLoggedOut/navOut';
import Notfound from './Core/NotFound/notfound';
import Chat from './Core/Chat/chat';
import Profile from './Core/Profile/profile';
import Settings from './Core/Profile/settings';
import CustomSnackbar from './Core/Custom/customSnackbar';

import Test from './Core/Visuals/Sort/test';

//visuals -- sorting
import Merge from './Core/Visuals/Sort/Merge';
import Quick from './Core/Visuals/Sort/Quick';
import Insert from './Core/Visuals/Sort/Insert';
import Selection from './Core/Visuals/Sort/Selection';
import Bubble from './Core/Visuals/Sort/Bubble';

//visuals -- searching
import DFS from './Core/Visuals/Search/DFS';
import BFS from './Core/Visuals/Search/BFS';
import Binary from './Core/Visuals/Search/Binary';

import readCookies from './Cookies/readCookies';
import './App.css';

function App() {

  const { pathname } = window.location;
  const userLoggedIn = (readCookies('auth-token')) ? true : false;
  if(userLoggedIn) var name = readCookies('name');

  const validNavPath = pathname === '/' 
                    || pathname === '/chat'
                    || pathname === '/login'
                    || pathname === '/register'
                    || pathname === '/' + name
                    || pathname === '/' + name + '/settings'
                    || pathname === '/visuals/merge'
                    || pathname === '/visuals/quick'
                    || pathname === '/visuals/insertion'
                    || pathname === '/visuals/bubble'
                    || pathname === '/visuals/selection'
                    || pathname === '/visuals/dfs'
                    || pathname === '/visuals/bfs'
                    || pathname === '/visuals/binarysearch'
                    || pathname === '/visuals/test'


  const HideNavIf = pathname === '/register' 
                    || pathname === '/login'  

  const HideNav = validNavPath && !HideNavIf && (
    userLoggedIn ? <NavIn /> : <NavOut />
  );

  return (
    <div>
       <Router>

          {HideNav}
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
            <Route caseSensitive path="/visuals/binarysearch" element={<Binary />}/>
            {!userLoggedIn && <Route caseSensitive path="/login" element={<Login />}/>}
            {!userLoggedIn && <Route caseSensitive path="/register" element={<Register />}/>}
            {userLoggedIn && <Route caseSensitive path="/:username" element={<Profile />} />}
            {userLoggedIn && <Route caseSensitive path="/:username/settings" element={<Settings />}/>}
            <Route path="*" element={<Notfound />} />
          </Routes>

        </Router>
    </div>
  );
}

export default App;
