import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Searchbar from '../searchbar';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import CustomizedTooltip from '../../Custom/customTooltip';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import CustomMenu from '../../Custom/customMenu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CustomDSABtn from '../../Custom/customDSABtn';
import CustomDSANavBtn from '../../Custom/customDSANavBtn';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import "../nav.css"
import "./navIn.css"
import "../subnav.css"

const NavIn = () => {
  const [showRegSubNav, setShowRegSubNav] = useState(true)
  const location = useLocation();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    let currentPathname = location.pathname.substring(1);
    if(currentPathname === "") currentPathname = "Home";
    setPathname(currentPathname);
  }, [location]);

  useEffect(() => {
    if(pathname.includes('visual'))
      setShowRegSubNav(false);
    else
      setShowRegSubNav(true);
  }, [pathname]);


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

            <div className='center-side'>
              <Searchbar />
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
                  <AddOutlinedIcon sx={{stroke: "#fff", strokeWidth: 1.4, padding: '0', margin:'0', cursor: 'pointer', color:'#fff', fontSize:'25px'}}/>
                </div>
              </CustomizedTooltip>
              <CustomDSANavBtn />
              <CustomizedTooltip title={"Notification"}>
                <div className="nav-link-div-icons">
                  <NotificationsOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.7, padding: '0', margin:'0', cursor: 'pointer', color:'#fff', fontSize:'25px' }}/>
                </div>
              </CustomizedTooltip>             
              <div className="nav-link-div-pp">
                <CustomMenu />
              </div>
            </div>

          </div>
        </div>
      </div>

      {showRegSubNav && 
      <>
        <div className='sub-nav-container'>
          <div className="sub-inside-nav">
            <div className="sub-nav-l-r-container">
              <div className="sub-left-side">
                <div className='sub-left-side-row-contain'>
                    <NavLink end to="/readme" className={({ isActive }) => (isActive ? 'sub-nav-boxes-active' : 'sub-nav-boxes')}>
                      <div className='sub-nav-icon-contain'>
                        <DescriptionOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.4, padding: '0', margin:'0', cursor: 'pointer', color:'#bbb', fontSize:'20px' }}/>
                        <p className='sub-nav-p'>Readme</p>
                      </div>
                    </NavLink>
                    <NavLink end to="/code" className={({ isActive }) => (isActive ? 'sub-nav-boxes-active' : 'sub-nav-boxes')}>
                      <div className='sub-nav-icon-contain'>
                        <CodeOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.4, padding: '0', margin:'0', cursor: 'pointer', color:'#bbb', fontSize:'20px' }}/>
                        <p className='sub-nav-p'>Code</p>
                      </div>
                    </NavLink>
                    <NavLink end to="/visuals" className={({ isActive }) => (isActive ? 'sub-nav-boxes-active' : 'sub-nav-boxes')}>
                      <div className='sub-nav-icon-contain'>
                        <GraphicEqOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.4, padding: '0', margin:'0', cursor: 'pointer', color:'#bbb', fontSize:'20px' }}/>
                        <p className='sub-nav-p'>Visuals</p>
                      </div>
                    </NavLink>
                    <NavLink end to="/comments" className={({ isActive }) => (isActive ? 'sub-nav-boxes-active' : 'sub-nav-boxes')}>
                      <div className='sub-nav-icon-contain'>
                        <SmsOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.4, padding: '0', margin:'0', cursor: 'pointer', color:'#bbb', fontSize:'20px' }}/>
                        <p className='sub-nav-p'>Comments</p>
                      </div> 
                    </NavLink>       
                                                                            
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      }  
    </div>
  )
}

export default NavIn
