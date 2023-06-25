import React from 'react';
import TextField from '@mui/material/TextField';

function EmailField({ handleEmailChange}) {
  return (
    <TextField
      autoFocus
      id="email"
      label="Email"
      variant="outlined"
      name="email"
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
      onChange={handleEmailChange}
      readOnly
    />
  );
}

export default EmailField;
