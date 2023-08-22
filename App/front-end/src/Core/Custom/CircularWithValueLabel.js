import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex', boxSizing:'border-box', margin:0, padding:0 }}>
      <CircularProgress sx={{ color:props.colorOfChoice }} size={35} variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary" sx={{ fontSize:'12px' }}>
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export default function CircularWithValueLabel({ replyWordCount, colorOfChoice }) {
  const maxWordCount = 300;
  const progress = (replyWordCount / maxWordCount) * 100; // Calculate the progress percentage

  if(maxWordCount <= 300)
    return <CircularProgressWithLabel value={progress} colorOfChoice={colorOfChoice}/>;
  else {
    return (
      <Typography variant="caption" component="div" color="error">
        Word count exceeded maximum.
      </Typography>
    );
  }
}
