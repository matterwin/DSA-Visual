import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './UserAuth/login';
import Home from './Core/Home/home';
import Nav from './Core/Nav/nav';
import './App.css';

function App() {
  return (
    <div>
       <Router>

          <Nav />
        
          <Routes>
            <Route caseSensitive path="/" element={<Home/>}/>
            <Route caseSensitive path="/login" element={<Login/>}/>

          </Routes>

        </Router>
    </div>
  );
}

export default App;
