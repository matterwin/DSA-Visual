import React, { useEffect } from 'react'
import '../visuals.css'

const Binary = () => {
  useEffect(() => {
    document.title = "Visuals | Heyso";
  }, []);

  return (
    <div className='container'>Binary</div>
  )
}

export default Binary