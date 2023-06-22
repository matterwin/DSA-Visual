// import React, { useEffect, useState } from 'react';
// import { NavLink, useLocation } from "react-router-dom";
// import Tooltip from '@mui/material/Tooltip';
// import WidgetsIcon from '@mui/icons-material/Widgets';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
import { NavLink } from "react-router-dom";
import "./nav.css"

const Nav = () => {
  return (
    <div className='nav-container'>
      <div>
        <div className="left-nav-container">
          <NavLink end to="/">
            <h3>Home</h3>
          </NavLink> 
          <a href="/register"><h3>register</h3></a>
          <a href="/login"><h3>login</h3></a>
        </div>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Nav
