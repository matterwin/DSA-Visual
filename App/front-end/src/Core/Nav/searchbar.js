import React from 'react'
import './searchbar.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Searchbar = () => {
  return (
    <div className='row-search-contain'>
      <input className='search-homemade' type="text" placeholder="Jump"></input>
      <div className='search-icon-div'>
        <SearchRoundedIcon sx={{stroke: "#fff", strokeWidth: 1, color:'#efeff1', fontSize:'22px'}}/>
      </div>
    </div>
  )
}

export default Searchbar