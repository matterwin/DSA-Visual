import React from 'react';
import TextField from '@mui/material/TextField';

function PasswordField({ handlePasswordChange}) {
  return (
    <TextField
      autoFocus
      id="password"
      label="Password"
      variant="outlined"
      name="password"
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
        width:'100%'
      }}
      InputLabelProps={{
        style: { color: '#fff' }
      }}
      InputProps={{
        style: { color: "#fff" },
      }}
      onChange={handlePasswordChange}
    />
  );
}

export default PasswordField;
