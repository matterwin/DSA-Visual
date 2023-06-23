// import React, { useEffect, useState } from 'react';
// import { NavLink, useLocation } from "react-router-dom";
// import Tooltip from '@mui/material/Tooltip';
// import WidgetsIcon from '@mui/icons-material/Widgets';
// import Button from '@mui/material/Button';
// import Divider from '@mui/material/Divider';
import { NavLink } from "react-router-dom";

import Searchbar from './searchbar';
import "./nav.css"
import "./subnav.css"

const Nav = () => {
  return (
    <div>
      <div className='nav-container'>
        <div className="inside-nav">
          <div className="nav-l-r-container">
            <div className="left-side">
              <NavLink end to="/">
                <h3 className="headline">Heyso</h3>
              </NavLink> 
            </div>
            <div className="right-side">
              <NavLink end to="/">
                <h3>Home</h3>
              </NavLink> 
              <a href="/register"><h3>register</h3></a>
              <a href="/login"><h3>login</h3></a>
            </div>
          </div>
        </div>
      </div>
      <div className='sub-nav-container'>
      <div className="sub-inside-nav">
        <div className="sub-nav-l-r-container">
          <div className="sub-left-side">
            <NavLink end to="/">
              <h3 className="sub-headline">Heyso</h3>
            </NavLink> 
          </div>
          <div className="sub-right-side">
            <Searchbar />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Nav
