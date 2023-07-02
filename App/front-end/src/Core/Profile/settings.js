import React from 'react'
import { useParams } from 'react-router-dom';
import readCookies from '../../Cookies/readCookies';
import NotFound from '../NotFound/notfound';
import './settings.css'

function Settings() {
  const { username } = useParams();

  if(username !== readCookies('name')){
    return(<NotFound />);
  }

  return (
    <div className='container'>
        user settings
    </div>
  )
}

export default Settings