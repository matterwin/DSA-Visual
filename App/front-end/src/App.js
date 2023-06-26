import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './UserAuth/login';
import Register from './UserAuth/register';
import Home from './Core/Home/home';
import Nav from './Core/Nav/nav';
import Notfound from './Core/NotFound/notfound';
import Chat from './Core/Chat/chat';
import readCookies from './Cookies/readCookies';
import './App.css';

function App() {

  const { pathname } = window.location;

  const validNavPath = pathname === '/' 
                    || pathname === '/chat'
                    || pathname === '/login'
                    || pathname === '/register' 

  const HideNavIf = pathname === '/register' 
                    || pathname === '/login'  
                
  const HideNav = (validNavPath && !HideNavIf) ? <Nav /> : null;
  const userLoggedIn = (readCookies()) ? true : false;
  console.log(userLoggedIn);

  return (
    <div>
       <Router>

          {HideNav}
        
          <Routes>
            <Route caseSensitive path="/" element={<Home />}/>
            <Route caseSensitive path="/chat" element={<Chat />}/>
            <Route caseSensitive path="/login" element={<Login />}/>
            <Route caseSensitive path="/register" element={<Register />}/>
            <Route path="*" element={<Notfound />} />
          </Routes>

        </Router>
    </div>
  );
}

export default App;
