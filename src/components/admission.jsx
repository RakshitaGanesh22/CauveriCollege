import React from 'react';
import { Button, useMediaQuery } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

export default function Admission() {
  // Define media queries for responsiveness
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // For small screens
  const isMediumScreen = useMediaQuery('(max-width:960px)'); // For medium screens

  // Dynamically adjust styles based on screen size
  const buttonStyles = {
    width: isSmallScreen ? '200px' : isMediumScreen ? '220px' : '250px', // Adjust width
    height: isSmallScreen ? '50px' : isMediumScreen ? '55px' : '60px',   // Adjust height
    fontSize: isSmallScreen ? '0.8rem' : isMediumScreen ? '0.9rem' : '1rem', // Adjust font size
    top: '50%',
    right: isSmallScreen ? '-5rem' : isMediumScreen ? '-6rem' : '-6.5rem', // Adjust right position
    backgroundColor: '#142D6D',
    transform: 'scale(1.05) rotate(-90deg)',
    borderRadius: '20px',
    position: 'fixed',
    zIndex: 5000,
  };

  return (
    <Button
      variant="contained"
      sx={buttonStyles}
    >
      Download Brochure <DownloadIcon sx={{ ml: 1 }} />
    </Button>
  );
}