import React from 'react'
import Tabs from '../tabs';
import './readme.css'
import '../../../Fonts/fonts.css'
import { Divider } from '@mui/material';

function Readme({focusedFile}){

  return (
    <div className='readme-container'>
      {/* <div className='tabs-readme-container'>
          <Tabs />
      </div> */}
      <div>
          <h1 className='title-of-panel' style={{ fontFamily: 'roobert' }}>{focusedFile.title}</h1>
          <p className='title-note' style={{ fontFamily: 'roobert' }}>{focusedFile.note}</p>
      </div>
      <div>
          <p className='file-desc'>{focusedFile.desc}</p>
      </div>
      <Divider orientation="horizontal" style={{ backgroundColor: '#f4f4f5', height: '1px', width:'100%' }} />
      <div className='section-div'>
        <p className='section-title' style={{ fontFamily: 'roobert' }}>{focusedFile.sections[0].title}</p>
        <div className='section'>
          <p>{focusedFile.sections[0].content[0]}</p>   
          <p>{focusedFile.sections[0].content[1]}</p>
          <p>{focusedFile.sections[0].content[2]}</p>
          <p>{focusedFile.sections[0].content[3]}</p>
        </div>
      </div>
      <Divider orientation="horizontal" style={{ backgroundColor: '#f4f4f5', height: '1px', width:'100%' }} />
      <div className='section-div'>
        <p className='section-title' style={{ fontFamily: 'roobert' }}>{focusedFile.sections[1].title}</p>
        <div className='section'>
          <p>{focusedFile.sections[1].content}</p>   
        </div>
      </div>
      <Divider orientation="horizontal" style={{ backgroundColor: '#f4f4f5', height: '1px', width:'100%' }} />
      <div className='section-div'>
        <p className='section-title' style={{ fontFamily: 'roobert' }}>{focusedFile.sections[2].title}</p>
        <div className='section'>
          <p>{focusedFile.sections[2].content}</p>   
        </div>
      </div>
    </div>
  )
}

export default Readme