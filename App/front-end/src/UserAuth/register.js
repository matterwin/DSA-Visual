import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import EmailField from './emailfield';
import PasswordField from './passwordfield';
import UsernameField from './usernamefield';
import { Divider } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import CheckIcon from '@mui/icons-material/Check';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./userauth.css";

const initialState = {
    username: '',
    email: '',
    password: '',
};

function Register() {
    const [values, setValues] = useState(initialState);
    const [continueBtn, setContinueBtn] = useState('handleEmailSubmit');
    const [showEditBtn, setShowEditBtn] = useState(false);

    const [whatToShow, setWhatToShow] = useState('Create your account')

    const [showEmailBox, setShowEmailBox] = useState(true);
    const [isEmailValid, setisEmailValid] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const [showEmailTakenError, setShowEmailTakenError] = useState(false);

    const [showPasswordBox, setShowPasswordBox] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showPasswordToShortError, setShowPasswordToShortError] = useState(false);
    const [warningPass, setWarningPass] = useState(false);
    const [isPasswordValid, setisPasswordValid] = useState(false);
    
    const [showUsernameBox, setShowUsernameBox] = useState(false);
    const [isUsernameValid, setisUsernameValid] = useState(false);
    const [showUsernameError, setShowUsernameError] = useState(false);
    const [showUsernameTakenError, setShowUsernameTakenError] = useState(false);

    const [loading, setLoading] = useState(false);

    function chooseChange(){
        switch (continueBtn) {
            case 'handleEmailSubmit':
                handleEmailSubmit();
                break;
            case 'handlePasswordSubmit':
                handlePasswordSubmit();
                break;
            case 'handleUsernameSubmit':
                handleUsernameSubmit();
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

        setWhatToShow('Create your account');

        setShowEmailBox(true);
        setisEmailValid(true); //this stays the same cause it was already validated
        setShowEmailError(false);
        setShowEmailTakenError(false);

        setShowPasswordBox(false);
        setShowPasswordError(false);
        setShowPasswordToShortError(false);
        setWarningPass(false);
        setisPasswordValid(false);
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
                setShowEditBtn(true);
                setShowPasswordBox(true);
                setWhatToShow('Your secret is safe with me :)')
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
        setWarningPass(true);

        if(passwordInput.length > 0){
            if(passwordInput.length < 6){
                setisPasswordValid(false);
            }
            else
                setisPasswordValid(true);
        }
        else
            setisPasswordValid(false);

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
            else{
                setisPasswordValid(true);
                setWarningPass(false);
                setShowUsernameBox(true);
                setWhatToShow('Last step: username')
                setShowEmailBox(false);
                setShowPasswordBox(false);
                setContinueBtn('handleUsernameSubmit')
            }
        }
        else{
            setShowPasswordError(true);
        }
    }

    function handleUsernameChange(event) {
        const usernameInput = event.target.value;
        setShowUsernameError(false);
        setShowUsernameTakenError(false);

        if(usernameInput.length > 2 && usernameInput.length < 36)
            setisUsernameValid(true);
        else
            setisUsernameValid(false);

        setValues(prevValues => ({
            ...prevValues,
            username: usernameInput
        }));
    }

    function handleUsernameSubmit() {
        if (isUsernameValid) {
 
            const url = 'http://localhost:5000/auth/register';
    
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    username: values.username,
                    email: values.email,
                    password: values.password
                }),
            })
            .then(res => {
                if (res.status === 400) {
                    setShowUsernameTakenError(true);
                    setLoading(false);
                    throw new Error("Username is taken");           
                }
                return res.json();
            })
            .then(() => {
                setLoading(false);
                window.location.href = '/';
            })
            .catch((err) => {console.log(err);});

            setLoading(true);
        } else {
            setShowUsernameError(true);
            return;
        }   
    }
    
    return (
    <div className='auth-box'>
        <div className='auth-width'>
            <div>
                <h3 className='h3-auth'>The man, the myth, the legend</h3>
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
                                <p className="invalid-email-msg">Please enter a password</p>
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
                    {showUsernameBox && (
                        <>
                            <UsernameField handleUsernameChange={handleUsernameChange} />
                            {showUsernameError  && 
                            <div className='error-email-div'>
                                <ErrorOutlinedIcon sx={{color:'#fff', fontSize:'20px'}}/>
                                <p className="invalid-email-msg">Username is too short or too long </p>
                            </div>
                            }
                            {showUsernameTakenError && 
                            <div className='error-email-div'>
                                <ErrorOutlinedIcon sx={{color:'#fff', fontSize:'20px'}}/>
                                <p className="invalid-email-msg">Username is already taken</p>
                            </div>
                            }
                        </>
                    )}
                    {warningPass && (
                        <div className='warning-container'>
                            <div className='password-msg'>
                                <div>
                                    <h7 className='warning-title'>Password must include:</h7>
                                </div>
                                <div className='check-mate'> 
                                    {
                                        (isPasswordValid)  ?(
                                        <>
                                            <CheckIcon sx={{ color:'#6fc261', fontSize:'20px' }}/>
                                            <h7 style={{ color:'#6fc261' }}className='constraints'>&nbsp;At least 6 characters</h7>
                                        </>
                                        ) : (
                                        <>
                                            <FiberManualRecordIcon sx={{ color:'#fff', fontSize:'10px' }}/>
                                            <h7 style={{ color:'#fff' }}className='constraints'>&nbsp;&nbsp;At least 6 characters</h7>
                                        </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
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
                            <div className='home-btn'>
                                <HomeOutlinedIcon sx={{fontSize:'30px'}}/>
                            </div>
                        </a>
                        <h5 className='OR'>OR</h5>
                        <div className='other-auth-link'>
                            <p>Need to <a href='/login' className='other-auth-link-a-tag'><b>sign in?</b></a></p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
    );
}

export default Register;
