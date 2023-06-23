import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box 
        sx={{ 
            width: '100%', 
            color: '#FFF', 
        }}
    >
        <Tabs value={value} onChange={handleChange} centered 
            TabIndicatorProps={{
                style: { backgroundColor: '#A9C9A3', color:'#fff' },
            }}
            sx={{
                width:'100%'
            }}
        >
            <Tab 
                sx={{
                    color: '#fff',
                    borderTop: 'transparent solid 2px',
                    borderBottom: '#adadad75 solid 2px',
                    '&:hover': {
                        backgroundColor: '#adadad75',
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor:'#a9c9a383'
                    },
                    fontFamily: 'Noto Serif Ottoman Siyaq, serif',
                    width:'25%',
                }} 
                label="Readme" 
            />
            <Tab 
                sx={{
                    color: '#fff',
                    borderTop: 'transparent solid 2px',
                    borderBottom: '#adadad75 solid 2px',
                    '&:hover': {
                        backgroundColor: '#adadad75',
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor:'#a9c9a383'
                    },
                    fontFamily: 'Noto Serif Ottoman Siyaq, serif',
                    width:'25%'
                }} 
                label="Code"
            />
            <Tab 
                sx={{
                    color: '#fff',
                    borderTop: 'transparent solid 2px',
                    borderBottom: '#adadad75 solid 2px',
                    '&:hover': {
                        backgroundColor: '#adadad75',
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor:'#a9c9a383'
                    },
                    fontFamily: 'Noto Serif Ottoman Siyaq, serif',
                    width:'25%'
                }} 
                label="Visuals"
            />
            <Tab 
                sx={{
                    color: '#fff',
                    borderTop: 'transparent solid 2px',
                    borderBottom: '#adadad75 solid 2px',
                    '&:hover': {
                        backgroundColor: '#adadad75',
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor:'#a9c9a383'
                    },
                    fontFamily: 'Noto Serif Ottoman Siyaq, serif',
                    width:'25%'
                }} 
                label="Comments"
            />
        </Tabs>
    </Box>
  );
}