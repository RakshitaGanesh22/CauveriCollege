import React, { useEffect } from 'react';
import {
  Typography,
  Box,
  Button,
  TextField,
  useMediaQuery,
  MenuItem,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Modal({ onClose }) {
  const isMobile = useMediaQuery('(max-width:800px)');

  useEffect(() => {
    // Disable background scrolling when modal is open
    document.body.style.overflow = 'hidden';

    // Cleanup function to re-enable scrolling when modal closes
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: isMobile ? '0 1rem' : 0,
      }}
    >
      <Box
        component="form"
        sx={{
          position: 'relative',
          maxWidth: 400,
          width: '100%',
          padding: isMobile ? 2 : 3,
          backgroundColor: '#fff',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          borderRadius: 3,
          textAlign: 'center',
          overflowY: 'auto',
          maxHeight: isMobile ? '90vh' : 'auto',
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: '#555',
          }}
        >
          <CloseIcon />
        </IconButton>

        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 'bold',
            color: '#333',
            mb: 3,
          }}
        >
          Registration Form
        </Typography>

        {/* Input Fields */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 2,
          }}
        >
          <TextField
            label="Full Name"
            name="fullName"
            fullWidth
            required
            sx={{
              '& .MuiInputLabel-root': { color: '#333' },
              '& .Mui-focused': { color: '#555' },
            }}
          />
          <TextField
            label="Email"
            name="email"
            fullWidth
            required
            sx={{
              '& .MuiInputLabel-root': { color: '#333' },
              '& .Mui-focused': { color: '#555' },
            }}
          />
        </Box>
        <TextField
          label="Phone Number"
          name="phoneNumber"
          fullWidth
          required
          sx={{
            mt: 2,
            '& .MuiInputLabel-root': { color: '#333' },
            '& .Mui-focused': { color: '#555' },
          }}
        />
        <TextField
          label="School Name"
          name="schoolName"
          fullWidth
          required
          sx={{
            mt: 2,
            '& .MuiInputLabel-root': { color: '#333' },
            '& .Mui-focused': { color: '#555' },
          }}
        />

        {/* Dropdowns */}
        <TextField
          label="Select Program"
          name="program"
          select
          fullWidth
          required
          sx={{ mt: 2 }}
          defaultValue=""
          SelectProps={{
            MenuProps: {
              container: document.body, // Render dropdown outside the modal for better visibility
            },
          }}
        >
          {['Science PCMB/PCMC', 'Commerce CEBA'].map((option, idx) => (
            <MenuItem key={idx} value={option} sx={{background: '#fff',fontSize: '16px',fontWeight: 'bold',"&:hover": {background: '#ffffff'}}}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="School and Board of Student"
          name="schoolBoard"
          select
          fullWidth
          required
          sx={{ mt: 2 }}
          defaultValue=""
          SelectProps={{
            MenuProps: {
              container: document.body, // Render dropdown outside the modal for better visibility
            },
          }}
        >
          {['10th, CBSE', '10th, ICSE', '10th, State', 'Other'].map((option, idx) => (
            <MenuItem key={idx} value={option} sx={{background: '#fff',fontSize: '16px',fontWeight: 'bold',"&:hover": {background: '#ffffff'}}}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Available Slots for Calling"
          name="timeSlot"
          select
          fullWidth
          required
          sx={{ mt: 2 }}
          defaultValue=""
          SelectProps={{
            MenuProps: {
              container: document.body, // Render dropdown outside the modal for better visibility
            },
          }}
        >
          {['9am-11am', '12pm-3pm', '5pm-7pm'].map((slot, idx) => (
            <MenuItem key={idx} value={slot} sx={{background: '#fff',fontSize: '16px',fontWeight: 'bold',"&:hover": {background: '#ffffff'}}}>
              {slot}
            </MenuItem>
          ))}
        </TextField>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{
            mt: 3,
            px: 4,
            fontWeight: 'bold',
            backgroundColor: '#00c0ff',
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
}
