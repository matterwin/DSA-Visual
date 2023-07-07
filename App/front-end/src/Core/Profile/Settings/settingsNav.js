import React from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import readCookies from '../../../Cookies/readCookies';
import NotFound from '../../NotFound/notfound';
import './settingsNav.css'

function SettingsNav() {

  return (
    <div className='settings-container'>
      <h5 className='settings-title'>Settings</h5>
      <div className='tabs-settings-contain'>
        <NavLink end to='/settings/profile' className={({ isActive }) => (isActive ? 'settings-tabs-divs-active' : 'settings-tabs-divs')}>
          <p className='settings-tab-p'>Account</p>
        </NavLink>
        <NavLink end to='/settings/chat' className={({ isActive }) => (isActive ? 'settings-tabs-divs-active' : 'settings-tabs-divs')}>
          <p className='settings-tab-p'>Chat & Messaging</p>
        </NavLink>
        <NavLink end to='/settings/notifications' className={({ isActive }) => (isActive ? 'settings-tabs-divs-active' : 'settings-tabs-divs')}> 
          <p className='settings-tab-p'>Notifications</p>
        </NavLink>
      </div>
    </div>
  )
}

export default SettingsNav