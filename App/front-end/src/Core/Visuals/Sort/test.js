import React from 'react'
import {useState, useEffect} from 'react';
import './test.css'

const Test = () => {
    const [array, setArray] = useState([]);
    const arrayLength = 10;

    useEffect(() => {
        setArray(generate());
    }, []);

    const generate = () => {
        const newArray = [];
        for (var i = 0; i < arrayLength; i++)
            newArray.push(Math.floor(Math.random() * 101));
        return newArray;
    }

  return (
    <div className='bars-container'>
        {array.map((value, index) => (
            <div key={index} className='bars-actual' style={{ height: value, fontSize:array.length }}>{value}</div>
        ))}
    </div>
  )
}

export default Test