import "../../App.css"
import "./home.css"
import React, { useState } from 'react';
import Filesys from './FileSys/filesys';
import Readme from './Readme/readme';
import Extra from './Extra/extra';
import { exports } from './FileSys/allInfo'; // Import the exports object from allInfo.js

function Home(){
    const [focusedFile, setFocusedFile] = useState(exports.merge);

    // will handle this later
    const handleFocusedFile = () => {
        setFocusedFile(exports.quick);
    }

    return (
        <div className="container">
            <div className="left-side-home">
                <Filesys focusedFile={focusedFile} handleFocusedFile={handleFocusedFile}/>
            </div>
            <div className="center-side-home">
                <Readme focusedFile={focusedFile}/>
            </div>
            <div className="right-side-home">
                <Extra />
            </div>
        </div>
    );
}

export default Home;
