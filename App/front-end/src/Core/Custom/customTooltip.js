import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const NewTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#f8f8f8',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f8f8f8',
    padding: '5px 5px 5px 5px',
    fontSize: '13px',
    fontFamily:'Inter',
    color:'black',
    fontWeight:'700'
  },
}));

export default function CustomizedTooltip({ title, children }) {

  return (
    <div>
      <NewTooltip title={title}>
        {children}
      </NewTooltip>
    </div>
  );
}