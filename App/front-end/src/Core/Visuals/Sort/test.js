import React from 'react'
import {useState, useEffect} from 'react';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import './test.css'

const Test = () => {
    const [array, setArray] = useState([]);
    const arrayLength = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

    useEffect(() => {
        setArray(generate());
    }, []);

    const generate = () => {
        const newArray = [];
        for (var i = 0; i < arrayLength; i++)
            newArray.push(Math.floor(Math.random() * 701));
        return newArray;
    }

    const calculateFontSize = (value) => {
        const ratio = 2 / array.length;
        const max = Math.max(...array);
        const fontSize = 20 - ratio * 10; // Adjust the scaling factor (10) as needed
        return `${ratio}px`;
      };

  return (
    <div>
        <div className='sub-nav-container'>
        <div className="sub-inside-nav">
          <div className="sub-nav-l-r-container">
            <div className="sub-left-side">
              <div className='sub-left-side-row-contain'>
                  <div className='vis-sub-nav-boxes-active'>
                    <div className='sub-nav-icon-contain'>
                      <PlayCircleOutlineOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.4, padding: '0', margin:'0', cursor: 'pointer', color:'#bbb', fontSize:'20px' }}/>
                      <p className='sub-nav-p'>Start</p>
                    </div>
                  </div>
                  <div className='vis-sub-nav-boxes-active'>
                    <div className='sub-nav-icon-contain'>
                      <RestartAltOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.4, padding: '0', margin:'0', cursor: 'pointer', color:'#bbb', fontSize:'20px' }}/>
                      <p className='sub-nav-p'>Restart</p>
                    </div>
                  </div>
                  <div className='vis-sub-nav-boxes-active' onClick={() => {setArray(generate());}}>
                    <div className='sub-nav-icon-contain'>
                      <AutorenewOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.4, padding: '0', margin:'0', cursor: 'pointer', color:'#bbb', fontSize:'20px' }}/>
                      <p className='sub-nav-p'>Generate</p>
                    </div>
                  </div>                                                                          
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='test-div'>
        <div className='test-again'>
        <div className='bars-container'>
            {array.map((value, index) => (
                <div key={index} className='bars-actual' style={{ height: value + 'px', fontSize:calculateFontSize(value) }}>{value}</div>
            ))}
        </div>
        </div>
    </div>
    </div>


  )
}

export default Test