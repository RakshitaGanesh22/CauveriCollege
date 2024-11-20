import React from 'react';
import { Typography, Box, useMediaQuery } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import img1 from "../asset/img1.jpeg";
import img2 from "../asset/img2.jpeg";
import img3 from "../asset/img3.jpeg";
import img4 from "../asset/img4.jpeg";
import img5 from "../asset/img5.jpeg";
import img6 from "../asset/img6.jpeg";
import img7 from "../asset/img7.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function StudentLife() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  return (
    <Box id="studentlife" sx={{marginTop: 10}}>
      <Typography
        variant="h2"
        align="center"
        sx={{
          marginBottom: 4,
          fontWeight: 'bold',
          color: '#142D6D',
          fontSize: { xs: '2rem', sm: '2.5rem' },
        }}
      >
        Life as a Student at Cauvery Excellence PU College
      </Typography>
    
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #C6D8FE, #F6F6F6)',
        padding: { xs: 3, md: 5 },
        borderRadius: 2,
      }}
    >
      

      <Box
        sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          gap: 4,
          alignItems: 'center',
        }}
      >
        {/* Carousel Section */}
        <Box
          sx={{
            flex: isSmallScreen ? 'none' : '1',
            padding: 3,
            background: '#fff',
            borderRadius: 2,
            boxShadow: 2,
          }}
        >
          <Carousel
            infiniteLoop
            autoPlay
            interval={1800}
            showThumbs={false}
            showStatus={false}
            emulateTouch
            swipeable
          >
            {[img1, img2, img3, img4, img5, img6, img7].map((image, index) => (
              <Box
                key={index}
                component="img"
                src={image}
                alt={`img${index + 1}`}
                sx={{
                  width: '100%',
                  maxWidth: isSmallScreen ? '100%' : 800,
                  height: isSmallScreen ? '250px' : '500px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  filter: 'brightness(1.1) contrast(1.1)', // Enhanced quality
                }}
              />
            ))}
          </Carousel>
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            flex: isSmallScreen ? 'none' : '2',
            padding: 3,
            borderRadius: 2,
            boxShadow: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          {[
            { title: 'Career Guidance & Mentorship', description: 'Receive expert mentorship to navigate your career path and make informed decisions.' },
            { title: 'Coaching for Competitive Exams', description: 'Master NEET, JEE (Main + Advanced), and KCET with our tailored coaching programs.' },
            { title: 'Interactive Science Labs', description: 'Engage in hands-on experiments to foster deeper understanding of scientific concepts.' },
            { title: 'Collaborative Learning Spaces', description: 'Learn and grow with peers in collaborative, creative spaces designed for group work.' },
            { title: 'Health & Wellness Programs', description: 'Maintain your physical and mental well-being with our holistic wellness programs.' },
          ].map((item, index) => (
            <Box
              key={index}
              sx={{
                padding: 2,
                backgroundColor: '#fff',
                borderRadius: 2,
                boxShadow: 2,
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: 4,
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: '#003366',
                  marginBottom: 1,
                  textAlign: "left",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: '#003366',
                  lineHeight: 1.5,
                  textAlign: "left",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
    </Box>
  );
}
