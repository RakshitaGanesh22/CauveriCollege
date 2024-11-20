import React from 'react';
import { Container, Typography, Paper, Box, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RoomIcon from '@mui/icons-material/Room';
import { useTheme } from '@mui/material/styles';

export default function Contact() {
  const theme = useTheme();

  return (
    <Container
      sx={{
        my: 4,
        py: 4,
        mt: 15,
        borderRadius: 3,
        background: 'linear-gradient(135deg, #C6D8FE, #F6F6F6)', // Subtle gradient for background
        boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        align="center"
        sx={{
          fontWeight: 'bold',
          color: theme.palette.primary.main,
          mb: 4,
        }}
      >
        Contact Us
      </Typography>

      <Box sx={{ mb: 3, textAlign: 'center' }}>
        <Typography
          variant="h4"
          color={theme.palette.secondary.main}
          gutterBottom
          sx={{ fontWeight: '700' }}
        >
          Cauvery Group of Institutions, Mysuru
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ fontWeight: '500', fontSize: '1.2rem' }}
        >
          Unit of Dr. Chandrashekar Foundation, established in 2001
        </Typography>
      </Box>

      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #142D6D, #0A4DF6)', // Gradient for card
          color: '#fff',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': { transform: 'scale(1.03)' },
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: '#E8F0FF',
              fontWeight: 'bold',
              mb: 3,
              textAlign: 'center',
              filter: 'brightness(0.9)',
            }}
          >
            Get in Touch
          </Typography>

          {/* Contact Details */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3,
              '&:hover': { color: theme.palette.secondary.light },
              transition: 'color 0.3s ease-in-out',
            }}
          >
            <PhoneIcon sx={{ mr: 2, fontSize: '1.5rem' }} />
            <Typography variant="h6" color="inherit">
              +91 99868 17230
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3,
              '&:hover': { color: theme.palette.secondary.light },
              transition: 'color 0.3s ease-in-out',
            }}
          >
            <PhoneIcon sx={{ mr: 2, fontSize: '1.5rem' }} />
            <Typography variant="h6" color="inherit">
              +91 96596 56006
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3,
              '&:hover': { color: theme.palette.secondary.light },
              transition: 'color 0.3s ease-in-out',
            }}
          >
            <EmailIcon sx={{ mr: 2, fontSize: '1.5rem' }} />
            <Typography variant="h6" color="inherit">
              cauvery.academics@gmail.com
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: 3,
              '&:hover': { color: theme.palette.secondary.light },
              transition: 'color 0.3s ease-in-out',
            }}
          >
            <LocationOnIcon sx={{ mr: 2, fontSize: '1.5rem' }} />
            <Typography variant="h6" color="inherit">
              131/1, 2D, 2E, 2F, Devegowda Circle, KBL Layout, Mysuru, Karnataka 570028
            </Typography>
          </Box>
        </Box>

        <Divider
          sx={{ my: 3, backgroundColor: theme.palette.secondary.main, height: 2 }}
        />

        {/* Map Section */}
        <Box
          sx={{
            width: '100%',
            height: '400px',
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: 3,
          }}
        >
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31110.612650612733!2d76.614144615625!3d12.29592195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7be823b3a4db%3A0x70decb80ae0f5ea!2sCauvery%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1697248520049!5m2!1sen!2sin`}
            allowFullScreen
            title="Google Map Location"
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 'calc(100% - 25px)',
            left: 'calc(50% - 12px)',
            backgroundColor: '#FF6F61',
            color: '#fff',
            width: '25px',
            height: '25px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: 3,
          }}
        >
          <RoomIcon fontSize="small" />
        </Box>
      </Paper>
    </Container>
  );
}
