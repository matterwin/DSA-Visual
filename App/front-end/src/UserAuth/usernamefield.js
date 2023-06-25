import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import EditIcon from '@mui/icons-material/Edit';

function UsernameField({ handleUsernameChange, showEditBtn}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
      id="username"
      label="Username"
      variant="outlined"
      name="username"
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
      onChange={handleUsernameChange}
    >
      <InputLabel htmlFor="outlined-adornment-password"
        style={{ color: '#fff' }}
      >
        Username
      </InputLabel>
      <OutlinedInput
        autoFocus
        id="outlined-adornment-password"
        sx={{color:'#fff',}}
        // type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showEditBtn ? <EditIcon sx={{color:'#fff'}}/> : <></>}
            </IconButton>
          </InputAdornment>
        }
        label="Username"
      />
    </FormControl>
  );
}

export default UsernameField;
