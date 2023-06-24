import React, { useState } from 'react';
import EmailField from './emailfield';
import { Divider } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import "./userauth.css";

function Register() {
  const [showEmailBox, setShowEmailBox] = useState(true);
  const [emailValue, setEmailValue] = useState('');
  const [isEmailValid, setisEmailValid] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);

  function handleEmailChange(event) {
    const emailInput = event.target.value;
    setShowEmailError(false);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(emailInput);

    if(!isValid)
        setisEmailValid(false);
    else
        setisEmailValid(true);

    setEmailValue(emailInput);
  }

  function handleEmailSubmit() {
    if(isEmailValid){
        //communicate with db
    }
    else{
        setShowEmailError(true);
    }   
  }

  return (
    <div className='auth-box'>
      <div className='auth-width'>

        {showEmailBox && (
          <div>
            <h3 className='h3-auth'>The man, the myth, the legend</h3>
            <h5 className='h5-auth'>Create your account</h5>
            <div className='form-container'>
              <EmailField handleEmailChange={handleEmailChange} />
              {showEmailError && <p className="invalid-email-msg">Please enter a valid email address.</p>}
              <div className='auth-btn-container'>
                <button className='auth-btn' onClick={() => {alert('you a bitch')}}>Continue</button>
              </div>
            </div>
            <div className='back-btn-contain'>
                <div className='div-auth'>
                    <Divider orientation="horizontal" style={{ backgroundColor: '#f4f4f5', height: '1px', width:'100%' }} />
                </div>
                <a href='/'>
                    <div className='home-btn'>
                        <HomeOutlinedIcon sx={{fontSize:'30px'}}/>
                    </div>
                </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default Register;
