import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Searchbar from '../searchbar';
import NavProfile from './navProfile';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import CustomizedTooltip from '../../Custom/customTooltip';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import CustomMenu from '../../Custom/customMenu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import "../nav.css"
import "./navIn.css"
import "../subnav.css"

const CloseBtn = () => {
  return(
    <><CloseOutlinedIcon />Close</>
  );
}

const DSABtn = () => {
  return(
    <><GraphicEqOutlinedIcon />DSA Visuals<ArrowDropDownIcon/></>   
  );
}

const NavIn = () => {
  const [showDSABtn, setShowDSABtn] = useState(true)

  const handleClickDSABtn = () => {
    setShowDSABtn(!showDSABtn);
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
            <div className="right-side-nav-in">
              <NavLink end to="/" className="nav-link-div">
                <h4 className="linkers">Home</h4>
              </NavLink> 
              <NavLink end to="/chat" className="nav-link-div">
                <h4 className="linkers">Chat</h4>
              </NavLink> 
              <Divider orientation="vertical" style={{ backgroundColor: 'grey', height: '25px', width:'1px' }} />
              <CustomizedTooltip title={"Add Post"}>
                <div className="nav-link-div-icons">
                  <AddOutlinedIcon sx={{ padding: '0', margin:'0', cursor: 'pointer', color:'#fff', fontSize:'25px'}}/>
                </div>
              </CustomizedTooltip>
              <CustomizedTooltip title={"Notification"}>
                <div className="nav-link-div-icons">
                  <NotificationsOutlinedIcon sx={{ padding: '0', margin:'0', cursor: 'pointer', color:'#fff', fontSize:'25px' }}/>
                </div>
              </CustomizedTooltip>             
              <div className="nav-link-div-pp">
                <CustomMenu />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='sub-nav-container'>
        <div className="sub-inside-nav">
          <div className="sub-nav-l-r-container">
            <div className="sub-left-side">
              {showDSABtn && (<>
                <button className='dsa-btn' onClick={handleClickDSABtn}>
                  <div className='dsa-btn-inside'>
                    <DSABtn />
                  </div>                      
                </button>
              </>)}
              {!showDSABtn && (<>
                <button className='dsa-btn-close' onClick={handleClickDSABtn}>
                  <div className='dsa-btn-inside'>
                    <CloseBtn />
                  </div>                      
              </button>
              </>)}
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
