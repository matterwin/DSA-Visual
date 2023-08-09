import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const NewTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme, color, textcolor }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: color,
    "&:before": {
      borderRadius: '2px',
    },
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: color,
    padding: '5px 5px 5px 5px',
    fontSize: '13px',
    fontFamily: 'Inter',
    color: textcolor,
    fontWeight: '700',
  },
}));

export default function CustomizedTooltip({ title, color, textColor, children }) {
  return (
    <div>
      <NewTooltip title={title} color={color} textcolor={textColor}>
        <div>{children}</div>
      </NewTooltip>
    </div>
  );
}
