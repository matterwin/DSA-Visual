import React from 'react'
import {useState, useEffect} from 'react';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
// import { mergeSort, mergeSortVisual } from './mergeAlgo';
import './test.css'

const Merge = () => {
  const [array, setArray] = useState([]);
  const [arrayCopy, setArrayCopy] = useState([]);
  const arrayLength = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

  useEffect(() => {
    generate();
  }, []);

  const generate = () => {
    const newArray = [];
    for (var i = 0; i < arrayLength; i++)
        newArray.push(Math.floor(Math.random() * 701));

    setArrayCopy(newArray);
    setArray(newArray);
  }

  const sortArray = () => {
    const sortedArray = array.slice();
    mergeSortVisual(sortedArray);
    console.log(sortedArray);
    setArray(sortedArray);
  };

  const restart = () => {
    setArray(arrayCopy);
  };

  function mergeVisual(a, l, r){
    var i = 0;
    var j = 0;

    while(i + j < a.length){
        if(j === r.length || (i<l.length && l[i] < r[j]))
            a[i+j] = l[i++];
        else
            a[i+j] = r[j++];
    }
}

 function mergeSortVisual(a) {
    if(a.length < 2) return;
    const len = a.length;

    const mid = len / 2;
    const l = a.slice(0,mid);
    const r = a.slice(mid);

    mergeSortVisual(l);
    mergeSortVisual(r);
    mergeVisual(a, l, r);

    return a;
}
    
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
                  <div className='vis-sub-nav-boxes-active' onClick={generate}>
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

export default Merge