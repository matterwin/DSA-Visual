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
import readCookies from './Cookies/readCookies';
 
import './App.css';

function App() {

  const { pathname } = window.location;

  const validNavPath = pathname === '/' 
                    || pathname === '/chat'
                    || pathname === '/login'
                    || pathname === '/register'
                    || pathname === '/profile'
                    || pathname === '/profile/settings'

  const HideNavIf = pathname === '/register' 
                    || pathname === '/login'  
                
  const userLoggedIn = (readCookies()) ? true : false;

  const HideNav = validNavPath && !HideNavIf && (
    userLoggedIn ? <NavIn /> : <NavOut />
  );

  console.log(userLoggedIn);

  return (
    <div>
       <Router>

          {HideNav}
        
          <Routes>
            <Route caseSensitive path="/" element={<Home />}/>
            <Route caseSensitive path="/chat" element={<Chat />}/>
            {!userLoggedIn && <Route caseSensitive path="/login" element={<Login />}/>}
            {!userLoggedIn && <Route caseSensitive path="/register" element={<Register />}/>}
            {userLoggedIn && <Route caseSensitive path="/profile" element={<Profile />}/>}
            {userLoggedIn && <Route caseSensitive path="/profile/settings" element={<Settings />}/>}
            <Route path="*" element={<Notfound />} />
          </Routes>

        </Router>
    </div>
  );
}

export default App;
