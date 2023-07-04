import React from 'react'
import {useState, useEffect} from 'react';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import { mergeSort } from './mergeAlgo';
import './test.css'

const Test = () => {
  const [array, setArray] = useState([]);
  const [arrayCopy, setArrayCopy] = useState([]);
  const arrayLength = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

  useEffect(() => {
    setArray(generate());
  }, []);

  const generate = () => {
    const newArray = [];
    for (var i = 0; i < arrayLength; i++)
        newArray.push(Math.floor(Math.random() * 701));

    setArrayCopy(newArray);
    return newArray;
  }

  const sortArray = () => {
    const sortedArray = array.slice();
    mergeSort(sortedArray);
    console.log(sortedArray);
    setArray(sortedArray);
  };

  const restart = () => {
    setArray(arrayCopy);
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
                  <div className='vis-sub-nav-boxes-active' onClick={restart}>
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
                  <div className='vis-sub-nav-boxes-active' onClick={sortArray}>
                    <div className='sub-nav-icon-contain'>
                      <AutorenewOutlinedIcon sx={{stroke: "#fff", strokeWidth: 0.4, padding: '0', margin:'0', cursor: 'pointer', color:'#bbb', fontSize:'20px' }}/>
                      <p className='sub-nav-p'>Sort</p>
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
                <div 
                  key={index} 
                  className='bars-actual' 
                  style={{ 
                    height: value + 'px', 
                    fontSize:'10px'
                  }}
                >
                  {value}
                </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Test