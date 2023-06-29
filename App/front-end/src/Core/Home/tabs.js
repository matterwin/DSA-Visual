import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

export default function CenteredTabs() {
  const [value, setValue] = useState(0);
  const [underlineColor, setUnderlineColor] = useState('#fff5d8')

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
                style: { backgroundColor: '#fff', color:'#fff' },
            }}
            sx={{
                width:'100%'
            }}
        >
            <Tab 
                sx={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap:'5px',
                    color: '#fff',
                    borderTop: 'transparent solid 2px',
                    borderBottom: '#fff5d8 solid 2px',
                    '&:hover': {
                        backgroundColor: '#fff5d87c',
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor:'#fff5d87c'
                    },
                    fontFamily: 'Noto Serif Ottoman Siyaq, serif',
                    fontWeight:'bold',
                    width:'25%',
                }} 
                label="Readme" 
                icon={<DescriptionOutlinedIcon />}
                onClick={() => {setUnderlineColor('#fff')}}
            />
            <Tab 
                sx={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap:'5px',
                    color: '#fff',
                    borderTop: 'transparent solid 2px',
                    borderBottom: '#e8e2c2 solid 2px',
                    '&:hover': {
                        backgroundColor: '#e8e2c270',
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor:'#e8e2c270'
                    },
                    fontFamily: 'Noto Serif Ottoman Siyaq, serif',
                    fontWeight:'bold',
                    width:'25%'
                }} 
                icon={<CodeOutlinedIcon />}
                label="Code"
                onClick={() => {setUnderlineColor('#fff')}}
            />
            <Tab 
                sx={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap:'5px',
                    color: '#fff',
                    borderTop: 'transparent solid 2px',
                    borderBottom: '#d1dcae solid 2px',
                    '&:hover': {
                        backgroundColor: '#d1dcae31',
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor:'#d1dcae31'
                    },
                    fontFamily: 'Noto Serif Ottoman Siyaq, serif',
                    fontWeight:'bold',
                    width:'25%'
                }} 
                label="Visuals"
                icon={<GraphicEqOutlinedIcon />}
                onClick={() => {setUnderlineColor('#fff')}}
            />
            <Tab 
                sx={{
                    display:'flex',
                    flexDirection:'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap:'5px',
                    color: '#fff',
                    borderTop: 'transparent solid 2px',
                    borderBottom: '#a9c9a3 solid 2px',
                    '&:hover': {
                        backgroundColor: '#a9c9a341',
                    },
                    '&.Mui-selected': {
                        color: '#fff',
                        backgroundColor:'#a9c9a341'
                    },
                    fontFamily: 'Noto Serif Ottoman Siyaq, serif',
                    fontWeight:'bold',
                    width:'25%'
                }} 
                label="Comments"
                icon={<SmsOutlinedIcon/>}
                onClick={() => {setUnderlineColor('#fff')}}
            />
        </Tabs>
    </Box>
  );
}