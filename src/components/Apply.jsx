import React from 'react';
import {
  Typography,
  Box,
  Button,
  TextField,
  useMediaQuery,
  MenuItem
} from '@mui/material';
import HeroImage from "../asset/cauverihero.jpg";

export default function Apply() {
  const isMobile = useMediaQuery('(max-width:800px)');

  return (
    <Box
    id="apply"
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        minHeight: '100vh',
        position: 'relative',
        overflowY: 'auto',
        padding: isMobile ? 2 : 5,
      }}
    >
      {/* Background Image with Overlay Gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.6)',
          zIndex: 1,
        }}
      />

      {/* Hero Text Section */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: isMobile ? 'center' : 'left',
          color: 'white',
          mt: isMobile ? 3 : 3,
          padding: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 600,
          animation: 'fadeIn 1s ease-in-out forwards',
          '@keyframes fadeIn': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        <Typography variant="h1" component="h1" sx={{ fontWeight: 'bold', mb: 2, color: 'white', letterSpacing: '3px' }}>
          Empowering Minds, Shaping Futures with <span style={{ color: '#00ffff' }}>CE PU College</span>
        </Typography>
        <Typography variant="h6" component="h6" sx={{ mb: 3, color: 'white', letterSpacing: '2px' }}>
          At <span style={{ color: '#00ffff' }}>Cauvery Excellence PU College</span>, we nurture excellence in academics with innovative learning methods and advanced technology to create a brighter future for our students.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'left', gap: 2 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              fontWeight: 'bold',
              px: 5,
              backgroundColor: '#00ffff',
              color: 'white',
              width: 250,
              height: 50,
              animation: 'bounceIn 1s ease forwards',
              '@keyframes bounceIn': {
                '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
                '40%': { transform: 'translateY(-15px)' },
                '60%': { transform: 'translateY(-10px)' },
              },
              '&:hover': {
                animation: 'none',
                transform: 'scale(1.05)',
              },
            }}
          >
            <Typography component="h6" variant="h6" color="white" sx={{ fontWeight: 'bold', filter: "brightness(0.1)" }}>Explore Now</Typography>
          </Button>
        </Box>
      </Box>

      {/* Contact Form Section */}
      <Box
        component="form"
        sx={{
          maxWidth: 400,
          width: '100%',
          padding: 3,
          backgroundColor: 'rgba(255, 255, 255)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          borderRadius: 3,
          backdropFilter: 'blur(10px)',
          textAlign: 'center',
          zIndex: 600,
          animation: 'slideIn 1.5s ease forwards',
          transform: 'translateY(100px)',
          opacity: 0,
          '@keyframes slideIn': {
            '0%': { opacity: 0, transform: 'translateY(100px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        {['Full Name', 'Email', 'Phone Number', 'School Name'].map((label, idx) => (
          <TextField
            key={idx}
            label={label}
            name={label.replace(' ', '').toLowerCase()}
            fullWidth
            required
            sx={{
              mb: 2,
              '& .MuiInputLabel-root': { color: '#333' },
              '& .Mui-focused': { color: '#555' },
            }}/>
        ))}
        <TextField
          label="Select Program"
          name="program"
          select
          fullWidth
          required
          sx={{mb: 2,background: '#fff',fontSize: '16px',fontWeight: 'bold'}}
          defaultValue=""
        >
          <MenuItem value="Science" sx={{background: '#fff',fontSize: '16px',fontWeight: 'bold',"&:hover": {background: '#ffffff'}}}>Science PCMB/PCMC</MenuItem>
          <MenuItem value="Commerce" sx={{background: '#fff',fontSize: '16px',fontWeight: 'bold',"&:hover": {background: '#ffffff'}}}>Commerce CEBA</MenuItem>
        </TextField>
        <TextField
          label="School and Board of Student"
          name="program"
          select
          fullWidth
          required
          sx={{ mb: 2 }}
          defaultValue=""
        >
          <MenuItem value="10thCBSE" sx={{background: '#fff',fontSize: '16px',fontWeight: 'bold',"&:hover": {background: '#ffffff'}}}>10th, CBSE</MenuItem>
          <MenuItem value="10thICSE" sx={{background: '#fff',fontSize: '16px',fontWeight: 'bold',"&:hover": {background: '#ffffff'}}}>10th, ICSE</MenuItem>
          <MenuItem value="10thState" sx={{background: '#fff',fontSize: '16px',fontWeight: 'bold',"&:hover": {background: '#ffffff'}}}>10th, State</MenuItem>
          <MenuItem value="12thCBSE" sx={{background: '#fff',fontSize: '16px',fontWeight: 'bold',"&:hover": {background: '#ffffff'}}}>Other</MenuItem>
        </TextField>
        <TextField
          label="Available slots for calling"
          name="timeSlot"
          select
          fullWidth
          required
          sx={{ mb: 2 }}
          defaultValue=""
        >
          <MenuItem value="morning" sx={{background: '#fff',fontSize: '16px',fontWeight: 'bold',"&:hover": {background: '#ffffff'}}}>9am-11am</MenuItem>
          <MenuItem value="afternoon" sx={{background: '#fff',fontSize: '16px',fontWeight: 'bold',"&:hover": {background: '#ffffff'}}}>12pm-3pm</MenuItem>
          <MenuItem value="evening" sx={{background: '#fff',fontSize: '16px',fontWeight: 'bold',"&:hover": {background: '#ffffff'}}}>5pm-7pm</MenuItem>
        </TextField>
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2, px: 5, fontWeight: 'bold', backgroundColor: '#00ffff', }}>
          <Typography component="h6" variant="h6" color="white" sx={{ fontWeight: 'bold', filter: "brightness(0.1)" }}>Submit</Typography>
        </Button>
      </Box>
    </Box>
  );
}
