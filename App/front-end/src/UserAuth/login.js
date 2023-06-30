import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import EmailField from './emailfield';
import PasswordField from './passwordfield';
import { Divider } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import { createAuthCookie, createNameCookie } from '../Cookies/createCookies';
import CustomizedTooltip from '../Core/Custom/customTooltip';
import "./userauth.css";

const initialState = {
    email: '',
    password: '',
};

function Login() {
    const [values, setValues] = useState(initialState);
    const [continueBtn, setContinueBtn] = useState('handleEmailSubmit');
    const [showEditBtn, setShowEditBtn] = useState(false);

    const [whatToShow, setWhatToShow] = useState('Sign in via email')

    // email states
    const [showEmailBox, setShowEmailBox] = useState(true);
    const [isEmailValid, setisEmailValid] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showEmailTakenError, setShowEmailTakenError] = useState(false);

    // password states
    const [showPasswordBox, setShowPasswordBox] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showPasswordToShortError, setShowPasswordToShortError] = useState(false);

    const [loading, setLoading] = useState(false);

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

    // email reset basically
    function handleEmailEdit(){

        setContinueBtn('handleEmailSubmit');
        setShowEditBtn(false);

        setWhatToShow('Sign in via email');

        setShowEmailBox(true);
        setisEmailValid(true); //this stays the same cause it was already validated
        setShowEmailError(false);
        setShowEmailTakenError(false);

        setShowPasswordBox(false);
        setShowPasswordError(false);
        setShowPasswordToShortError(false);
    }

    function handleEmailSubmit() {
        if (isEmailValid) {
            setContinueBtn('handlePasswordSubmit')
            setShowEditBtn(true);
            setShowPasswordBox(true);
            setWhatToShow('Enter a password')
        }
        else {
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

    function handlePasswordSubmit() {

        if(values.password.length > 0){

            const url = 'http://localhost:5000/auth/login';
    
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    email: values.email,
                    password: values.password
                }),
            })
            .then(res => {
                if (res.status === 401) {
                    setLoading(false); 
                    setShowPasswordError(true);  
                    throw new Error("Invalid creds");         
                }
                return res.json();
            })
            .then((data) => {
                createAuthCookie(data.cookie)
                createNameCookie(data.name)
                setLoading(false);
                window.location.href = '/';
            })
            .catch((err) => {console.log(err);});

            setLoading(true);
        }
        else{
            setShowPasswordToShortError(true);
        }
    }
    
    return (
        <div className='auth-box'>
            <div className='auth-width'>
                <div>
                    <h3 className='h3-auth'>Glad to have you back</h3>
                    <h5 className='h5-auth'>{whatToShow}</h5>
                    <div className='form-container'>
                        {showEmailBox && (
                            <>
                                <EmailField handleEmailChange={handleEmailChange} showEditBtn={showEditBtn} handleEmailEdit={handleEmailEdit}/>
                                {showEmailError && 
                                    <div className='error-email-div'>
                                        <ErrorOutlinedIcon sx={{color:'#fff', fontSize:'20px'}}/>
                                        <p className="invalid-email-msg">Please enter a valid email address</p>
                                    </div>
                                }
                                {showEmailTakenError && 
                                    <div className='error-email-div'>
                                        <ErrorOutlinedIcon sx={{color:'#fff', fontSize:'20px'}}/>
                                        <p className="invalid-email-msg">Email already in use</p>
                                    </div>
                                }
                            </>
                        )}
                        {showPasswordBox && (
                            <>
                                <PasswordField handlePasswordChange={handlePasswordChange} />
                                {showPasswordError && 
                                <div className='error-email-div'>
                                    <ErrorOutlinedIcon sx={{color:'#fff', fontSize:'20px'}}/>
                                    <p className="invalid-email-msg">Email or password invalid</p>
                                </div>
                                }
                                {showPasswordToShortError && 
                                <div className='error-email-div'>
                                    <ErrorOutlinedIcon sx={{color:'#fff', fontSize:'20px'}}/>
                                    <p className="invalid-email-msg">Please fill in creds</p>
                                </div>
                                }
                            </>
                        )}
                        <div className='auth-btn-container'>
                            <button className='auth-btn' onClick={chooseChange}>Continue</button>
                            <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={loading}
                                onClick={() => {setLoading(false);}}
                            >
                                <CircularProgress color="inherit" />
                            </Backdrop>
                        </div>
                    </div>
                    <div className='back-btn-contain'>
                        <div className='div-auth'>
                            <Divider orientation="horizontal" style={{ backgroundColor: '#f4f4f5', height: '1px', width:'100%' }} />
                        </div>
                        <div className='bottom-auth-links'>      
                            <a href='/'>
                            <CustomizedTooltip title="Home">
                                <div className='home-btn'>
                                    <HomeOutlinedIcon sx={{fontSize:'30px'}}/>
                                </div>
                            </CustomizedTooltip>
                            </a>
                            <h5 className='OR'>OR</h5>
                            <div className='other-auth-link'>
                                <p>Need to <a href='/register' className='other-auth-link-a-tag'><b>register?</b></a></p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
