import { NavLink } from "react-router-dom";
import Divider from '@mui/material/Divider';
import Searchbar from './searchbar';
import "./nav.css"
import "./subnav.css"

const Nav = () => {

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
            <div className="right-side">
              <NavLink end to="/" className="nav-link-div">
                <h4 className="linkers">Home</h4>
              </NavLink> 
              <NavLink end to="/" className="nav-link-div">
                <h4 className="linkers">Chat</h4>
              </NavLink> 
              
              <Divider orientation="vertical" style={{ backgroundColor: '#f4f4f5', height: '25px', width:'1px' }} />
              <a href="/register" className="sign-up"><h4 className="sign-up-h3">Sign Up</h4></a>
              <a href="/login"><h4 className="sign-in">Sign In</h4></a>
            </div>
          </div>
        </div>
      </div>
      <div className='sub-nav-container'>
      <div className="sub-inside-nav">
        <div className="sub-nav-l-r-container">
          <div className="sub-left-side">
            <button className='dsa-btn' onClick={handleReturnToHome}>
              DSA Visuals
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

export default Nav
