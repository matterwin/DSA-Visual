import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import EditIcon from '@mui/icons-material/Edit';
import CustomizedTooltip from '../Core/Custom/customTooltip';

function EmailField({ handleEmailChange, showEditBtn, handleEmailEdit}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <FormControl
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
      onChange={handleEmailChange}
    >
      <InputLabel htmlFor="outlined-adornment-password"
        style={{ color: '#fff', fontSize: '18px' }}
      >
        Email
      </InputLabel>
      <OutlinedInput
        autoFocus
        id="outlined-adornment-password"
        sx={{ color: '#fff', fontSize: '18px' }}
        endAdornment={
          showEditBtn && (
            <InputAdornment position="end">
              <CustomizedTooltip title="Edit">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleEmailEdit}
                  edge="end"
                >
                  {showEditBtn && <EditIcon sx={{ color: '#fff' }} />}
                </IconButton>
              </CustomizedTooltip>
            </InputAdornment>
          )
        }
        label="Email"
      />
    </FormControl>
  );
}

export default EmailField;
