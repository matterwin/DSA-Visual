import React from 'react'
import Tabs from '../tabs';

import './readme.css'

function Readme({focusedFile}){

  console.log(focusedFile);

  return (
    <div className='readme-container'>
        <div className='tabs-readme-container'>
            <Tabs />
        </div>
        <div>
            <h1 className='title-of-panel'>{focusedFile.title}</h1>
            <p className='title-note'>{focusedFile.note}</p>
        </div>
        <div>
            <p>{focusedFile.desc}</p>
        </div>
    </div>
  )
}

export default Readme