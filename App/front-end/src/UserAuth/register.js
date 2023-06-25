import React, { useState } from 'react';
import EmailField from './emailfield';
import PasswordField from './passwordfield';
import { Divider } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import "./userauth.css";

const initialState = {
    username: '',
    email: 'testing@aol.com',
    password: '',
};

function Register() {
    const [values, setValues] = useState(initialState);
    const [continueBtn, setContinueBtn] = useState('handleEmailSubmit');

    const [showEmailBox, setShowEmailBox] = useState(true);
    const [isEmailValid, setisEmailValid] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showEmailTakenError, setShowEmailTakenError] = useState(false);

    const [showPasswordBox, setShowPasswordBox] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showPasswordToShortError, setShowPasswordToShortError] = useState(false);

    function chooseChange(){
        switch (continueBtn) {
            case 'handleEmailSubmit':
                handleEmailSubmit();
                break;
            case 'handlePasswordSubmit':
                handlePasswordSubmit();
                break;
            default:
                console.log('Unknown decision choice');
                break;
          }
    }

    function handleEmailChange(event) {
        const emailInput = event.target.value;
        setShowEmailError(false);
        setShowEmailTakenError(false);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValid = emailRegex.test(emailInput);

        if(!isValid)
            setisEmailValid(false);
        else
            setisEmailValid(true);

        setValues(prevValues => ({
            ...prevValues,
            email: emailInput
        }));
    }

    function handleEmailSubmit() {
        if (isEmailValid) {
 
            const url = 'http://localhost:5000/auth/checkEmail';
    
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: values.email }),
            })
            .then(res => {
                if (res.status === 400) {
                    setShowEmailTakenError(true);
                    throw new Error("Email is taken");           
                  }
                return res.json();
            })
            .then(() => {
                setContinueBtn('handlePasswordSubmit')
                setShowPasswordBox(true);
            })
            .catch((err) => {console.log(err);});
    
            // Last step: means email field is correct and complete
   
            //fetch is asyn, so show a loading thing here maybe for when we officially sign in or something
            //in the .then response is a promise whenever it runs successfulyl, and so in there return to a normal state or move on to the pw field

        } else {
            setShowEmailError(true);
        }   
    }

    function handlePasswordChange(event) {
        const passwordInput = event.target.value;
        setShowPasswordError(false);
        setShowPasswordToShortError(false);

        setValues(prevValues => ({
            ...prevValues,
            password: passwordInput
        }));
    }

    function handlePasswordSubmit(){
        if(values.password.length > 0){
            if(values.password.length < 6){
                setShowPasswordToShortError(true);
            }
        }
        else
            setShowPasswordError(true);
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
                {showEmailError && 
                    <div className='error-email-div'>
                        <ErrorOutlinedIcon sx={{color:'#fff', fontSize:'20px'}}/>
                        <p className="invalid-email-msg">Please enter a valid email address.</p>
                    </div>
                }
                {showEmailTakenError && 
                    <div className='error-email-div'>
                        <ErrorOutlinedIcon sx={{color:'#fff', fontSize:'20px'}}/>
                        <p className="invalid-email-msg">Email already in use.</p>
                    </div>
                }
                {showPasswordBox && (
                    <>
                        <PasswordField handlePasswordChange={handlePasswordChange} />
                        {showPasswordError && 
                        <div className='error-email-div'>
                            <ErrorOutlinedIcon sx={{color:'#fff', fontSize:'20px'}}/>
                            <p className="invalid-email-msg">Please enter a password.</p>
                        </div>
                        }
                        {showPasswordToShortError && 
                        <div className='error-email-div'>
                            <ErrorOutlinedIcon sx={{color:'#fff', fontSize:'20px'}}/>
                            <p className="invalid-email-msg">Password is too short (6)</p>
                        </div>
                        }
                    </>
                )}
                <div className='auth-btn-container'>
                    <button className='auth-btn' onClick={chooseChange}>Continue</button>
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

        {/* {showPasswordBox && (
            <div>
            <h3 className='h3-auth'>Your secret is save with me</h3>
            <h5 className='h5-auth'>Create your password</h5>
            <div className='form-container'>
                <PasswordField handlePasswordChange={handlePasswordChange} />
                {values.password}
                {showPasswordError && 
                <div className='error-email-div'>
                    <ErrorOutlinedIcon sx={{color:'#fff', fontSize:'20px'}}/>
                    <p className="invalid-email-msg">Please enter a password.</p>
                </div>
                }
                {showPasswordToShortError && 
                <div className='error-email-div'>
                    <ErrorOutlinedIcon sx={{color:'#fff', fontSize:'20px'}}/>
                    <p className="invalid-email-msg">Password is too short (6)</p>
                </div>
                }
                <div className='auth-btn-container'>
                <button className='auth-btn' onClick={handlePasswordSubmit}>Continue</button>
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
        )} */}

        </div>
    </div>
    );
}

export default Register;
