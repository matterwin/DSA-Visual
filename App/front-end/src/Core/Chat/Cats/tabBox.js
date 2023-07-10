import React, { useState, useEffect } from 'react'
import './tabBox.css'

const TabBox = ({ title1, title2}) => {
    const [showTitle2, setShowTitle2] = useState(title2);

    useEffect(() => {
        if(showTitle2) setShowTitle2(false);
        else setShowTitle2(true)
    },[])

  return (
    <div className='tab-box-contain'>
        <div className='box-div'>
            <div className='tab-box-div'>
                <p className='tab-box-p'>{title1}</p>
            </div>
            {!showTitle2 && 
            <>
                <div className='tab-box-div'>
                    <p className='tab-box-p'>{title2}</p>
                </div>
            </>
            }
        </div>
    </div>
  )
}

export default TabBox