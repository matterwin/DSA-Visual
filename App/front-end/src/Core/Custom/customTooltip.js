import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const NewTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme, color, textColor }) => ({
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
    color: textColor,
    fontWeight: '700',
  },
}));

export default function CustomizedTooltip({ title, color, textColor, children }) {
  return (
    <div>
      <NewTooltip title={title} color={color} textColor={textColor}>
        <div style={{ color: textColor }}>{children}</div>
      </NewTooltip>
    </div>
  );
}
