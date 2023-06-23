import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from "react-router-dom";

const options = [
    { label: 'The Godfather', id: 1 },
    { label: 'Pulp Fiction', id: 2 },
  ];

export default function SearchMovie() {
    const [index, setIndex] = useState(undefined);
    const navigate = useNavigate();

    useEffect(() => {
        if(index === undefined) {
          return;
        }

        navigate(`/${index}`);
        window.location.reload();
    },[index, navigate]);

    const handleNavChoice = (_event, value) => {
        setIndex(value);
    };

    return (
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options}
            getOptionLabel={(option) => option.name}
            sx={{ width: 300, backgroundColor: '#fff', borderRadius: '5px', outline: 'none' }}
            renderInput={(params) => <TextField {...params} placeholder='Search movie'/>}
            onChange={handleNavChoice}
            ListboxProps={{ style: { maxHeight: '12rem' } }}
        />
    );
}