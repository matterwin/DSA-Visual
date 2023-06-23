import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import GraphicEqOutlinedIcon from '@mui/icons-material/GraphicEqOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

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
                    display:'flex',
                    flexDirection:'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap:'5px',
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
                icon={<DescriptionOutlinedIcon />}
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
                icon={<CodeOutlinedIcon />}
                label="Code"
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
                icon={<GraphicEqOutlinedIcon />}
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
                icon={<SmsOutlinedIcon/>}
            />
        </Tabs>
    </Box>
  );
}