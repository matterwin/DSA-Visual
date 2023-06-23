import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchMovie() {

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
    //   options={movieNames}
      getOptionLabel={(option) => option.name}
      sx={{ width: 300, backgroundColor: '#fff', borderRadius: '5px', outline: 'none' }}
      renderInput={(params) => <TextField {...params} placeholder='Search movie'/>}
    //   onChange={handleMovieSelection}
      ListboxProps={{ style: { maxHeight: '12rem' } }}
    />
  );
}