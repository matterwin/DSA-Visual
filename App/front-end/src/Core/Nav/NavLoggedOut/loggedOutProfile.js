import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DefaultPic from '../../profilePics/def.webp';
import CustomizedTooltip from '../../Custom/customTooltip';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import "./navOut.css"

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    border: '1px solid #fff',
    marginTop: theme.spacing(1),
    width: 10,
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[0],
    backgroundColor: '#3b4048',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      color: '#fff',
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
      '&:hover': {
        backgroundColor: '#1976d2',
        color: 'white',
      },
    },
  },
}));



export default function LoggedOutProfile() {
    const [showArrowDown, setShowArrowDown] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
      setShowArrowDown(!showArrowDown);
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setShowArrowDown(!showArrowDown);
      setAnchorEl(null);
    };

    return (
        <div>
            <div
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                onClick={handleClick}
                className='parent-div-pfp-logged-out'
            >   
            <div className="pfp-div-logged-out">
                <CustomizedTooltip title="Not signed in">
                    <img className="profile-pic-logged-out" src={DefaultPic} alt="ProfilePicture" />      
                </CustomizedTooltip>            
            </div>
        </div>
            <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            disableScrollLock={true}
            sx={{position: 'absolute'}}
            >
            
          {/* <MenuItem disableRipple>
              <div className="nav-usr-name">@{username}</div> 
          </MenuItem> */}

        <Divider sx={{ my: 0.5, backgroundColor: '#fff' }} />

        <NavLink end to="/Profile">
          <MenuItem onClick={handleClose} disableRipple>
          {/* <AccountBox /> */}
          Profile
          </MenuItem>
        </NavLink>

            <NavLink end to="/Settings">
          <MenuItem onClick={handleClose} disableRipple>
            {/* <Whatshot /> */}
            Settings
          </MenuItem>
        </NavLink>

        <Divider sx={{ my: 0.5, backgroundColor: '#fff' }} />

        {/* <NavLink end to="/Logout" className="navlink">
          <MenuItem onClick={handleClose} disableRipple>
            <Button variant="contained" sx={{ padding: '5px', paddingRight: '45px', paddingLeft: '45px' }}>Log Out</Button>
          </MenuItem>
        </NavLink> */}

        <MenuItem onClick={handleClose} disableRipple >
          <a><Button onClick={() => {window.location.href = '/';}} variant="contained" sx={{ padding: '5px', paddingRight: '45px', paddingLeft: '45px' }}>Log In</Button></a>
        </MenuItem>

        {/* <MenuItem onClick={handleClose} disableRipple >
          <a href="/"><Button variant="contained" sx={{ padding: '5px', paddingRight: '45px', paddingLeft: '45px' }} onClick={handleLogOut} >Log Out</Button></a>
        </MenuItem> */}
            </StyledMenu>
        </div>
    );
}