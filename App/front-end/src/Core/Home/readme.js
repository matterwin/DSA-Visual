import React from 'react'
import Tabs from './tabs';

import './readme.css'

const readme = () => {
  return (
    <div className='readme-container'>
        <div className='tabs-readme-container'>
            <Tabs />
        </div>
        <div>
            <h1 className='title-of-panel'>Merge Sort</h1>
            <p className='title-note'>• Divide and Conquer algorithm</p>
        </div>
        <div>
            <p>Adipisicing id elit magna irure esse amet. Eiusmod deserunt in sint elit irure eu est. Quis amet ex esse sit culpa qui duis est est est in sint incididunt. Aliquip ea veniam amet culpa magna mollit culpa in anim laboris culpa tempor. Aliquip Lorem occaecat duis velit ullamco sit nisi aliqua anim aliquip qui aliqua eu. Do eiusmod dolore voluptate excepteur non aute est. Ut Lorem aliqua aliquip culpa voluptate duis exercitation proident deserunt cillum amet.</p>
        </div>
    </div>
  )
}

export default readme