import React, { useEffect, useRef } from 'react';
import './readme.css'
import '../../../Fonts/fonts.css'
import { Divider } from '@mui/material';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { zenburn } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeString = `public static void merge(int[] l, int[] r, int[] a){
  int i=0, j=0;

  // Simply check which element to put back into a
  while(i+j < a.length){
      if(j == r.length || (i < l.length && l[i] < r[j]))
          a[i+j] = l[i++];
      else
          a[i+j] = r[j++];
  }
}

public static void mergeSort(int[] a){
  int len = a.length;
  if(len < 2) return;

  int mid = len / 2;
  int[] l = Arrays.copyOfRange(a, 0, mid);
  int[] r = Arrays.copyOfRange(a, mid, len);

  // Divide and conquer all the way to only having 1 element, and then merge and combine the two arrays recursively.
  mergeSort(l);
  mergeSort(r);
  merge(l, r, a);
}`;

const CodeSnippet = () => {
  return (
    <SyntaxHighlighter
      language="java"
      style={zenburn}
      showLineNumbers
      customStyle={{ lineHeight: '1.4', fontSize: '14px', width: '100%', display: 'inline-block', boxSizing:'border-box' }}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

function Readme({focusedFile, handleNavFocus, refProp}){
  const myRef = useRef();

  useEffect(() => {
    if(focusedFile.title.includes(refProp)){
       myRef.current?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
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
        <div style={{width:'100%'}} >
            <h1 className='title-of-panel'>{focusedFile.title}</h1>
            {/* <Divider orientation="horizontal" className='divider-home' style={{ marginBottom:'15px' }}/> */}
        </div>
        <div>
          <p className='title-note' style={{ fontFamily: 'roobert' }}>{focusedFile.note}</p>
            <p className='file-desc'>{focusedFile.desc}</p>
        </div>
        <Divider orientation="horizontal" className='divider-home' style={{ marginBottom:'15px' }}/>
        <div className='section-div'>
          <p className='section-title' style={{ fontFamily: 'roobert' }}>{focusedFile.sections[0].title}</p>
          <div className='section'>
            <p>{focusedFile.sections[0].content[0]}</p>   
            <p>{focusedFile.sections[0].content[1]}</p>
            <p>{focusedFile.sections[0].content[2]}</p>
            <p>{focusedFile.sections[0].content[3]}</p>
          </div>
        </div>
        <Divider orientation="horizontal" className='divider-home' style={{ marginBottom:'15px', marginTop:'15px' }}/>
        <div className='section-div'>
          <p className='section-title' style={{ fontFamily: 'roobert' }}>{focusedFile.sections[1].title}</p>
          <div className='section'>
            <p>{focusedFile.sections[1].content}</p>   
          </div>
        </div>
        <Divider orientation="horizontal" className='divider-home' style={{ marginBottom:'15px', marginTop:'15px' }}/>
        <div className='section-div'>
          <p className='section-title' style={{ fontFamily: 'roobert' }}>{focusedFile.sections[2].title}</p>
          <div className='section'>
            <p>{focusedFile.sections[2].content}</p>   
          </div>
        </div>   
        <Divider orientation="horizontal" className='divider-home' style={{ marginBottom:'15px', marginTop:'15px' }}/>
        <div className="code-container">
          <CodeSnippet />
        </div>
      </div>
    </div>
  )
}

export default Readme