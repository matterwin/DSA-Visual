import React from 'react'
import Tabs from '../tabs';

import './readme.css'
import { Divider } from '@mui/material';

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
      <Divider orientation="horizontal" style={{ backgroundColor: '#f4f4f5', height: '1px', width:'100%' }} />
      <div className='section-div'>
        <p className='section-title'>{focusedFile.sections[0].title}</p>
        <div className='section'>
          <p>{focusedFile.sections[0].content[0]}</p>   
          <p>{focusedFile.sections[0].content[1]}</p>
          <p>{focusedFile.sections[0].content[2]}</p>
          <p>{focusedFile.sections[0].content[3]}</p>
        </div>
      </div>
    </div>
  )
}

export default Readme