import React, { useState, useEffect } from 'react'
import './tabBox.css'

const TabBox = ({ title1, title2, title1Link, title2Link}) => {
    const [showTitle2, setShowTitle2] = useState(title2);

    useEffect(() => {
        if(showTitle2) setShowTitle2(false);
        else setShowTitle2(true)
    },[])

  return (
    <div className='tab-box-contain'>
        <div className='box-div'>
            <a href={title1Link} className='tab-box-div'>
                <p className='tab-box-p'>{title1}</p>
            </a>
            {!showTitle2 && 
            <>
                <a href={title2Link} className='tab-box-div'>
                    <p className='tab-box-p'>{title2}</p>
                </a>
            </>
            }
        </div>
    </div>
  )
}

export default TabBox