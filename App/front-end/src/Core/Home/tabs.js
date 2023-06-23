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
        marginBottom: '30px' 
        }}
    >
        <Tabs value={value} onChange={handleChange} centered 
            TabIndicatorProps={{
                style: { backgroundColor: '#A9C9A3', color:'#fff' },
            }}
            sx={{
                display:'flex',
                flexDirection:'row',
                justifyContent: 'space-between',
            }}
        >
            <Tab 
                sx={{
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#adadad75',
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor:'#a9c9a383'
                    },
                }} 
                label="Readme" 
            />
            <Tab 
                sx={{
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#adadad75',
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor:'#a9c9a383'
                    },
                }} 
                label="Code"
            />
            <Tab 
                sx={{
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#adadad75',
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor:'#a9c9a383'
                    },
                }} 
                label="Visuals"
            />
            <Tab 
                sx={{
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#adadad75',
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor:'#a9c9a383'
                    },
                }} 
                label="Comments"
            />
        </Tabs>
    </Box>
  );
}