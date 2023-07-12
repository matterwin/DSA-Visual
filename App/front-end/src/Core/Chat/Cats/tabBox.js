import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import './tabBox.css'

const TabBox = ({ title1, title2, title1Link, title2Link, active1, active2}) => {
    const [showTitle2, setShowTitle2] = useState(title2);
    // const [activeTitle, setActiveTitle] = useState(active)

    useEffect(() => {
        if(showTitle2) setShowTitle2(false);
        else setShowTitle2(true)
    },[])

  return (
    <div className='tab-box-contain'>
        <div className='box-div'>
            <NavLink end to={title1Link} className='tab-box-div'>
                <p className={active1 ? 'tab-box-p-active' : 'tab-box-p'}>{title1}</p>
            </NavLink>
            {!showTitle2 && 
            <>
                <NavLink end to={title2Link} className='tab-box-div'>
                    <p className={active2 ? 'tab-box-p-active' : 'tab-box-p'}>{title2}</p>
                </NavLink>
            </>
            }
        </div>
    </div>
  )
}

export default TabBox