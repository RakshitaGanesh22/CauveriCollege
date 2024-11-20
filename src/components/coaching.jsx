import React from 'react';
import {
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import LanIcon from '@mui/icons-material/Lan';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export default function Coaching() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const cardStyle = {
    background: "linear-gradient(45deg, #0A4DF6, #142D6D)", // gradient using your provided colors
    color: "#FFFFFF",
    borderRadius: "16px",
    marginTop: theme.spacing(6),
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    padding: theme.spacing(4),
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: "0 16px 30px rgba(0,0,0,0.3)",
    },
  };

  const iconStyle = {
    fontSize: '80px',
    textAlign:"left",
    marginBottom: theme.spacing(1),
    color: '#FFFFFF',
    transition: 'transform 0.3s ease, color 0.3s ease',
    '&:hover': {
      transform: 'scale(1.2)',
      color: '#FE6E32', // Hover color for icons
    },
  };

  const itemContainerStyle = {
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : 'row',
    justifyContent: 'center',
    gap: theme.spacing(4),
    marginTop: theme.spacing(4),
    width: '100%',
  };

  const itemStyle = {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: theme.spacing(3),
    borderRadius: '10px',
    textAlign: 'center',
    width: '250px',
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    transition: 'transform 0.3s ease, background-color 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      backgroundColor: '#FE6E32', // Hover background color
    },
  };

  const typographyStyle = {
    fontSize: '1.1rem',
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: theme.spacing(2),
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFFFFF',
    marginBottom: theme.spacing(5),
    textShadow: '2px 2px 5px rgba(0,0,0,0.3)',
  };

  return (
    <Box>
    <Typography
        variant="h2"
        component="h2"
        align="center"
        sx={{
          marginBottom: 5,
          fontWeight: "bold",
          color: "#1A4C90",
          marginTop: "3rem", // Primary color from the palette
        }}
      >
        Examination Coaching at Cauvery Group of Institutions
      </Typography>
    <Box sx={{ marginTop: 5, padding: theme.spacing(3), backgroundColor: '#F6F6F6' }} id="coaching">
      

      <Card sx={cardStyle}>
        <CardContent>
          <Typography variant="h4" sx={{ color: '#FFFFFF', marginBottom: theme.spacing(3) }}>
            Unlock your potential with personalized mentorship, industry-driven learning, and comprehensive test preparation.
          </Typography>

          <Box sx={itemContainerStyle}>
            {/* Card 1 */}
            <Box sx={itemStyle}>
              <LanIcon sx={iconStyle} />
              <Typography sx={typographyStyle}>
                Tailored Mentorship
              </Typography>
              <Typography sx={{ color: '#FFFFFF' }}>
                Get personalized coaching and career guidance from expert faculty to achieve academic success.
              </Typography>
            </Box>

            {/* Card 2 */}
            <Box sx={itemStyle}>
              <Diversity3Icon sx={iconStyle} />
              <Typography sx={typographyStyle}>
                Industry-Driven Learning
              </Typography>
              <Typography sx={{ color: '#FFFFFF'  }}>
                Interact with industry professionals and gain valuable insights via our cutting-edge online platform.
              </Typography>
            </Box>

            {/* Card 3 */}
            <Box sx={itemStyle}>
              <MenuBookIcon sx={iconStyle} />
              <Typography sx={typographyStyle}>
                Comprehensive Test Prep
              </Typography>
              <Typography sx={{ color: '#FFFFFF'  }}>
                Prepare for NEET, JEE, KCET, and board exams with rigorous tests and performance tracking.
              </Typography>
            </Box>
          </Box>
        </CardContent>

        <CardActions sx={{ justifyContent: 'center', marginTop: theme.spacing(4) }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#FE6E32',
              padding: '12px 24px',
              color: '#FFFFFF',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#C85D19', // Button hover color
              },
            }}
          >
            Know More
          </Button>
        </CardActions>
      </Card>
    </Box>
    </Box>
  );
}
