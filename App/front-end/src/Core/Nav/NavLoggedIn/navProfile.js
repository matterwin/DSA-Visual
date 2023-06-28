import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import DefaultPic from '../../profilePics/pika.png';
import { NavLink } from "react-router-dom";
import deleteCookies from '../../../Cookies/deleteCookies'
import readCookies from '../../../Cookies/readCookies';
import CustomizedTooltip from '../../Custom/customTooltip';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import "./navIn.css"

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
    borderRadius: 2,
    padding:'10px 10px 10px 0px',
    marginTop: theme.spacing(0.5),
    width: 10,
    minWidth: 140,
    color:'#efeff1',
    backgroundColor: '#887777',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px, rgba(0, 0, 0, 0.2) 0px 5px 5px 0px', // Updated box shadow
    '& .MuiMenu-list': {
      padding: '4px 0',
      display: 'flex',
      flexDirection: 'column', // Set menu items to be in a column
      alignItems: 'flex-start', // Align items to the left
      justifyContent:'center'
    },
    '& .MuiMenuItem-root': {
      color: '#fff',
      borderRadius: 5,
      marginTop:1,
      marginBottom:1,
      '& .MuiSvgIcon-root': {
        // fontSize: 24,
        // color: theme.palette.text.secondary,
        // marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: 'yellow'
      },
      '&:hover': {
        backgroundColor: '#a0a08d',
        color:'#efeff1',
        borderRadius: 5,
      },
    },
  },
}));


export default function NavProfile() {
    const [showArrowDown, setShowArrowDown] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const userId = readCookies();

//     useEffect(() => {

//       const url = `http://localhost:8000/api/userAuthControllerInfo?id=${userId}`;

//       fetch(url, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       })
//       .then(response => {
//         if (response.status === 404) {
//           throw new Error("User not found");
//         }
//         return response.json();     
//       })
//       .then(data => {
//         if(data) { 
//           setUsername(data.username);
//           if(data.url == null)
//             setUserProfilePic(DefaultPic);
//         }
//       })
//       .catch(error => {       
//         console.error(error);
//       });

//   },[userId])

    // function handleLogOut() {
    //   deleteCookies();
    // }

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
            className='parent-div-pfp'
        >   
          <div className="pfp-div">
              <CustomizedTooltip title={"Profile"}>
                <img className="profile-pic" src={DefaultPic} alt="ProfilePicture" />      
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
          <NavLink end to="/Profile">
            <MenuItem onClick={handleClose} disableRipple>
              <div className='div-for-menu'>
                <Person2OutlinedIcon sx={{color:'#efeff1', fontSize:'20px'}}/>
                <p style={{fontSize:'15px', fontWeight:'bold'}}>Profile</p>
              </div>
            </MenuItem>
          </NavLink>
          <NavLink end to="/Settings">
            <MenuItem onClick={handleClose} disableRipple>
              <div className='div-for-menu'>
                <SettingsOutlinedIcon sx={{color:'#efeff1', fontSize:'20px'}}/>
                <p style={{fontSize:'15px', fontWeight:'bold'}}>Settings</p>
              </div>
            </MenuItem>
          </NavLink>
          <Divider sx={{ backgroundColor: 'silver', marginTop:'5px', marginBottom:'5px' }} />
          <NavLink onClick={() => {deleteCookies(); window.location.href = '/';}}>
            <MenuItem disableRipple>
              <div className='div-for-menu'>
                <LogoutOutlinedIcon sx={{color:'#efeff1', fontSize:'20px', transform: 'scaleX(-1)',}}/>
                <p style={{fontSize:'15px', fontWeight:'bold'}}>Log out</p>
              </div>
            </MenuItem>
          </NavLink>
        </StyledMenu>
    </div>
  );
}