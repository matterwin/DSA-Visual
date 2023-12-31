import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Searchbar from '../searchbar';
import LoggedOutProfile from "./loggedOutProfile";
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import "../nav.css"
import "../subnav.css"

const NavOut = () => {
  const [dsaOrHomeBtn, setdsaOrHomeBtn] = useState('DSA Visuals')

  const handleClickDSABtn = () => {
    if(dsaOrHomeBtn === 'DSA Visuals'){
      setdsaOrHomeBtn('Back Home')
    }
    else
      window.location.href = '/';
  }

  const handleReturnToHome = () => {
    window.location.href = '/';
  };

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
            <div className="right-side-nav-out">
              <NavLink end to="/" className="nav-link-div">
                <h4 className="linkers">Home</h4>
              </NavLink> 
              <NavLink end to="/chat" className="nav-link-div">
                <h4 className="linkers">Chat</h4>
              </NavLink> 
              <Divider orientation="vertical" style={{ backgroundColor: '#f4f4f5', height: '25px', width:'1px' }} />
              <a href="/register" className="sign-up"><h4 className="sign-up-h3">Sign Up</h4></a>
              <a href="/login" className="sign-in"><h4 className="sign-in-h3">Log In</h4></a>
              <div className="nav-link-div-pp">
                 <LoggedOutProfile />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='sub-nav-container'>
        <div className="sub-inside-nav">
          <div className="sub-nav-l-r-container">
            <div className="sub-left-side">
              <button className='dsa-btn' onClick={handleClickDSABtn}>
                <div className='dsa-btn-inside'>
                  <GraphicEqOutlinedIcon />{dsaOrHomeBtn}<ArrowDropDownIcon />
                </div>
              </button>
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

export default NavOut
