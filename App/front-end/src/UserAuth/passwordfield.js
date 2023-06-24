import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

function PasswordField({ handlePasswordChange}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
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
      onChange={handlePasswordChange}
    >
          <InputLabel htmlFor="outlined-adornment-password"
            style={{ color: '#fff' }}
          >
            Password
          </InputLabel>
          <OutlinedInput
            autoFocus
            id="outlined-adornment-password"
            sx={{color:'#fff',}}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff sx={{color:'#fff'}}/> : <Visibility sx={{color:'#fff'}}/>}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
      </FormControl>
  );
}

export default PasswordField;
