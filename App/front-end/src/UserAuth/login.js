import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import "./userauth.css";

const initialState = {
    username: '',
    email: '',
    password: '',
};

function Login(){
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevState => ({ ...prevState, [name]: value }));
    };

    return(
        <div className='auth-box'>
            <div className='auth-width'>
                <h3 className='h3-auth'>The man, the myth, the legend</h3>
                <div className='form-container'>
                    <TextField
                        autoFocus
                        id="email-field"
                        label="Email"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: "#A9C9A3",
                                boxShadow: "0 0 2px #A9C9A3"
                            },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: "#A9C9A3",
                                boxShadow: "0 0 2px #A9C9A3"
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#f4f4f5',
                            },
                        }}  
                        InputLabelProps={{
                            style: { color: '#fff' }
                        }}
                        InputProps={{
                            style: { color: "#fff" },
                        }}
                    />
                    <TextField
                        id="email-field"
                        label="Password"
                        variant="outlined"
                        sx={{
                            '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: "#A9C9A3",
                                boxShadow: "0 0 2px #A9C9A3"
                            },
                            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: "#A9C9A3",
                                boxShadow: "0 0 2px #A9C9A3"
                            },
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#f4f4f5',
                            },
                        }}  
                        InputLabelProps={{
                            style: { color: '#fff' }
                        }}
                        InputProps={{
                            style: { color: "#fff" },
                        }}
                    />
                </div>
                <div className='auth-btn-container'>
                    <button className='auth-btn'>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;