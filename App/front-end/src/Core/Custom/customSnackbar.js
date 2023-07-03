import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

export default function CustomSnackbar({ message }) {
  const [open, setOpen] = useState(true);
  const [transition, setTransition] = useState(undefined);
  const [timer, setTimer] = useState(5); // Timer in seconds
  const [progress, setProgress] = useState(100); // Progress bar width percentage
  const [hovering, setHovering] = useState(false); // Track hovering state
  const intervalRef = useRef(null); // Ref to store the interval reference

  useEffect(() => {
    if (!hovering) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            setProgress((prevProgress) => prevProgress - (100 / 5)); // Adjust the denominator to change the total time
            return prevTimer - 1;
          } else {
            setOpen(false);
            clearInterval(intervalRef.current);
            return prevTimer;
          }
        });
      }, 1000); // 1000 milliseconds = 1 second
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [hovering]);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
    // Reset the timer and progress when the Snackbar is clicked
    setTimer(5);
    setProgress(100);
  };

  const handleMouseEnter = () => {
    setHovering(true);
    clearInterval(intervalRef.current); // Clear the interval when hovering starts
  };

  const handleMouseLeave = () => {
    setHovering(false);
    // Start the timer immediately when hovering stops
    if (timer > 0) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer > 0) {
            setProgress((prevProgress) => prevProgress - (100 / 5)); // Adjust the denominator to change the total time
            return prevTimer - 1;
          } else {
            setOpen(false);
            clearInterval(intervalRef.current);
            return prevTimer;
          }
        });
      }, 1000); // 1000 milliseconds = 1 second
    }
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message={
          <div>
            <div
              style={{
                width: '100%',
                height: 4,
                backgroundColor: '#000',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 9999,
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: '100%',
                  backgroundColor: '#00f',
                  transition: 'width 1s linear',
                }}
              ></div>
            </div>
            <div>{message}</div>
          </div>
        }
        key={transition ? transition.name : ''}
        ContentProps={{
          style: {
            position: 'relative',
          },
        }}
        onMouseEnter={handleMouseEnter} // Add onMouseEnter event handler
        onMouseLeave={handleMouseLeave} // Add onMouseLeave event handler
      />
    </Box>
  );
}
