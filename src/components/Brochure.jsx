import React from 'react';
import {
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { useState } from 'react';
import Modal from './modal';
export default function Brochure() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [open,setOpen]=useState(false);
  return (
    <Box
    id="brochure"
      sx={{
        position: 'relative',
        top: 80,
        padding: isSmallScreen ? '2rem' : '4rem',
        background: 'linear-gradient(135deg, #C6D8FE, #F6F6F6)', // Updated gradient background
        display: 'flex',
        flexDirection: isSmallScreen ? 'column' : 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '16px',
        boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        maxWidth: '100%',
        flexWrap: 'wrap',
      }}
    >
      {/* Left Section - Text Content */}
      <Box
        sx={{
          flex: 1,
          textAlign: isSmallScreen ? 'center' : 'left',
          color: '#142D6D',
          marginBottom: isSmallScreen ? '2rem' : 0,
          maxWidth: '100%',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontSize: isSmallScreen ? '1.8rem' : '2.5rem',
            lineHeight: 1.4,
          }}
        >
          Welcome to Cauvery Group of Institutions – Unlock Your Path to Success
        </Typography>
        <Typography
          sx={{
            fontSize: isSmallScreen ? '1.1rem' : '1.4rem',
            color: '#0A4DF6',
            marginTop: '1rem',
            lineHeight: 1.6,
          }}
        >
          Join us in transforming your future with world-class education, mentorship, and career growth opportunities.
        </Typography>
      </Box>

      {/* Right Section - Buttons */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          gap: '1.5rem',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '100%',
          flexWrap: 'wrap',
        }}
      >
        <Button
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{
            width: '250px',
            height: '60px',
            fontSize: '1.1rem',
            backgroundColor: '#FE6E32',
            borderRadius: '8px',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#D05D19',
            },
            padding: '10px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
              boxShadow: '0px 8px 18px rgba(0, 0, 0, 0.2)',
            },
          }}
        >
          Download Brochure <DownloadIcon sx={{ fontSize: '1.5rem', color: '#fff' }} />
        </Button>
          
        <Button
          variant="outlined"
          href="#contact"
          sx={{
            width: '150px',
            height: '60px',
            fontSize: '1.1rem',
            borderColor: '#0A4DF6',
            color: '#0A4DF6',
            backgroundColor: '#fff',
            borderRadius: '8px',
            '&:hover': {
              borderColor: '#1F6F8B',
              color: '#1F6F8B',
              backgroundColor: '#f4f4f4',
            },
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            
          }}
        >
          Contact Us
        </Button>
        
      </Box>
      {open && <Modal onClose={() => setOpen(false)}/>}
    </Box>
  );
}
