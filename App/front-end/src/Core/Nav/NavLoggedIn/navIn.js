import React from 'react';
import Divider from '@mui/material/Divider';
import Searchbar from '../searchbar';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import CustomizedTooltip from '../../Custom/customTooltip';
import CustomMenu from '../../Custom/customMenu';
import CustomDSANavBtn from '../../Custom/customDSANavBtn';
import Oldsearch from '../oldsearch';
import "../nav.css"
import "./navIn.css"
import "../subnav.css"

const NavIn = () => {

  return (
      <div className='nav-container'>
        <div className="inside-nav">
          <div className="nav-l-r-container">
            <div className="left-side">
              <a href="/">
                <h3 className="headline">H</h3>
              </a>
              <Oldsearch />
            </div>

            {/* <div className='center-side'>
              <Searchbar />
            </div> */}

            <div className="right-side-nav-in">
              <a href="/" className="nav-link-div">
                <h4 className="linkers">Home</h4>
              </a> 
              <a href="/chat/home" className="nav-link-div">
                <h4 className="linkers">Chat</h4>
              </a> 
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
  )
}

export default NavIn
