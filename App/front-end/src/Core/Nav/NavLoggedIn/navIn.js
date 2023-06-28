import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Searchbar from '../searchbar';
import NavProfile from './navProfile';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import "../nav.css"
import "./navIn.css"
import "../subnav.css"

const NavIn = () => {
  const [dsaOrHomeBtn, setdsaOrHomeBtn] = useState('DSA Visuals')

  const handleClickDSABtn = () => {
    if(dsaOrHomeBtn === 'DSA Visuals'){
      setdsaOrHomeBtn('Back Home')

    }
    else
      window.location.href = '/';
  }

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
              <NavLink end to="/" className="nav-link-div">
                <h4 className="linkers">Home</h4>
              </NavLink> 
              <NavLink end to="/chat" className="nav-link-div">
                <h4 className="linkers">Chat</h4>
              </NavLink> 
              <Divider orientation="vertical" style={{ backgroundColor: 'grey', height: '25px', width:'1px' }} />
              <div className="nav-link-div-icons">
                <AddOutlinedIcon sx={{ padding: '0', margin:'0', cursor: 'pointer', color:'#fff', fontSize:'25px'}}/>
              </div>
              <div className="nav-link-div-icons">
                <NotificationsOutlinedIcon sx={{ padding: '0', margin:'0', cursor: 'pointer', color:'#fff', fontSize:'25px' }}/>
              </div>
              <div className="nav-link-div-pp">
                 <NavProfile />
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
                  <GraphicEqOutlinedIcon />{dsaOrHomeBtn}
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

export default NavIn
