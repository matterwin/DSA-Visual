import React, { useEffect, useState, useRef } from 'react';
import './readme.css'
import '../../../Fonts/fonts.css'
import { Divider } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Readme({focusedFile, handleNavFocus, refProp}){
  const code = focusedFile.code;
  const myRef = useRef();
  const [state, setState] = useState({ height: 200 });
  const [isHolding, setIsHolding] = useState(false);
  const [color, setColor] = useState('#353740')

  useEffect(() => {
    if(focusedFile.title.includes(refProp)){
       myRef.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
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
  
  const adjustHeight = (event) => {
    const deltaY = event.movementY;
    setState((prevState) => ({
      ...prevState,
      height: prevState.height + deltaY,
    }));
  
  };

  const changeToGreen = () => {
    setColor('#A9C9A3');
  }

  const changeToGrey = () => {
    setColor('#353740');
  }

  const handleMouseUp = () => {
    setColor('#353740');
    setIsHolding(false);
    window.removeEventListener('mousemove', adjustHeight);
    document.body.style.userSelect = ''; // Re-enable user selection
  };

  const handleMouseDown = () => {
    setColor('#A9C9A3');
    setIsHolding(true);
    window.addEventListener('mousemove', adjustHeight);
    window.addEventListener('mouseup', handleMouseUp);
    document.body.style.userSelect = 'none'; // Disable user selection
  };

  useEffect(() => {
    const adjustHeightRef = adjustHeight;

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', adjustHeightRef);
    };
  }, []);

  return (
    <div ref={myRef} style={{ width:'100%', boxSizing:'border-box' }}>
      <div className='readme-container' >
          {/* <div className='tabs-readme-container'>
              <Tabs />
          </div> */}
          <div style={{width:'100%'}} >
              <h1 className='title-of-panel'>{focusedFile.title}</h1>
              <p className='title-note'>Last Updated: 30 July 2023</p>
              <Divider orientation="horizontal" className='divider-home' style={{ marginBottom:'15px' }}/>
          </div>
          <div>
            <p className='title-note'>{focusedFile.note}</p>
              <p className='file-desc'>{focusedFile.desc}</p>
          </div>
          <Divider orientation="horizontal" className='divider-home' style={{ marginBottom:'15px' }}/>
          <div className='section-div'>
            <p className='section-title' >{focusedFile.sections[0].title}</p>
            <div className='section'>
              <p>{focusedFile.sections[0].content[0]}</p>   
              <p>{focusedFile.sections[0].content[1]}</p>
              <p>{focusedFile.sections[0].content[2]}</p>
              <p>{focusedFile.sections[0].content[3]}</p>
            </div>
          </div>
          <Divider orientation="horizontal" className='divider-home' style={{ marginBottom:'15px', marginTop:'15px' }}/>
          <div className='section-div'>
            <p className='section-title'>{focusedFile.sections[1].title}</p>
            <div className='section'>
              <p>{focusedFile.sections[1].content}</p>   
            </div>
          </div>
          <Divider orientation="horizontal" className='divider-home' style={{ marginBottom:'15px', marginTop:'15px' }}/>
          <div className='section-div'>
            <p className='section-title'>{focusedFile.sections[2].title}</p>
            <div className='section'>
              <p>{focusedFile.sections[2].content}</p>   
            </div>
          </div>   
          
          {code && <>
          <Divider orientation="horizontal" className='divider-home' style={{ marginBottom:'15px', marginTop:'15px' }}/>  
          <p className='section-title'>Code</p>
          <p className='title-note'>Example with recursion</p>
          <div className='title-of-code'>
            <p className='code-p-tag'>Recursive Merge</p>
          </div>
          <pre
              className='custom-syntax-highlighter'
              style={{
                width: '100% !important',
                boxSizing: 'border-box',
                overflowX: 'auto',
                height: `${state.height}px`, // Set the height dynamically
              }}
            >
            <SyntaxHighlighter 
              wrapLines
              showLineNumbers
              lineNumberStyle={{
                paddingleft: '80px', // Adjust padding as needed
                marginLeft: '-20px', // Reset margin
              }}
              language="java" 
              style={dracula} 
              customStyle={{ width: '100% !important', boxSizing:'border-box', fontSize: '15px', backgroundColor: 'transparent', padding: '0', margin: '0' }}
            >
              {code}
            </SyntaxHighlighter>
          </pre>
          <div 
            className='resize-div'
            style={{ backgroundColor: color }}
            onMouseEnter={changeToGreen}
            onMouseDown={handleMouseDown}
            onMouseLeave={!isHolding ? changeToGrey : undefined}
            onMouseUp={handleMouseUp}
          >
           <MoreHorizIcon style={{ color:'#999' }}/>
          </div>
        </>
        }
        </div>
    </div>
  )
}

export default Readme