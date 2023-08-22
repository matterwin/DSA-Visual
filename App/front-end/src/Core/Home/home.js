import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Filesys from './FileSys/filesys';
import Readme from './Readme/readme';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import CustomDSANavBtn from '../Custom/customDSANavBtn';
import CustomDSANavBtnReplica from '../Custom/customDSABtnReplica';
import { exports } from './FileSys/allInfo';


import "../../App.css"
import "./home.css"

function Home() {
    const [focusOn, SetFocusOn] = useState('Merge Sort');
    const [readmeRef, setReadmeRef] = useState(null);

    useEffect(() => {
        document.title = "Home | Heyso";
    }, []);

    const handleNavFocus = (fileName) => {
        SetFocusOn(fileName);
    }

    const handleClick = (ref) => {
        setReadmeRef(ref);
    }; 


    return (
        <div>
            <div className='div-to-hide-sub-nav-container'>
                <div className='sub-nav-container'>
                    <div className="sub-inside-nav">
                        <div className="sub-nav-l-r-container">
                            <div className="sub-left-side">
                                <div className='sub-left-side-row-contain'>
                                    <div className='hide-dsa-btn'>
                                        <CustomDSANavBtnReplica />
                                    </div>
                                </div>
                            </div>
                        </div>      
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="left-side-home">
                    <Filesys focusOnto={focusOn} handleClick={handleClick}/>
                </div>
                <div className="center-side-home">
                    {Object.values(exports).map((value, index) => (
                        <Readme key={index} focusedFile={value} handleNavFocus={handleNavFocus} refProp={readmeRef} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
