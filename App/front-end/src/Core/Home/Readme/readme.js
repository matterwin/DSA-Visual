import React, { useEffect, useRef } from 'react';
import './readme.css'
import '../../../Fonts/fonts.css'
import { Divider } from '@mui/material';

function Readme({focusedFile, handleNavFocus, refProp}){
  const myRef = useRef();

  useEffect(() => {
    if(focusedFile.title.includes(refProp)){
       myRef.current?.scrollIntoView({ behavior: "auto", block: "center", inline: "nearest" });
    }
  }, [refProp]);

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 1.0, // Fully visible in the viewport triggers the callback
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(focusedFile.title);
          handleNavFocus(focusedFile.title);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    if (myRef.current) {
      observer.observe(myRef.current);
    }

    // Clean up the observer when the component is unmounted
    return () => {
      if (myRef.current) {
        observer.unobserve(myRef.current);
      }
    };
  }, [focusedFile]);
  

  return (
    <div ref={myRef}>


    <div className='readme-container' >
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
        </div>    </div>
    </div>
  )
}

export default Readme