import React from 'react';
import { Typography, Box, Button, Card, CardContent, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import drChandra from "../asset/drchangra.jpg";
import sarala from "../asset/dr.sarala.jpg";

export default function KeyPeople() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '40px 20px',
        color: '#fff',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          component="h2"
          align="center"
          sx={{
            marginBottom: 5,
            fontWeight: "bold",
            color: "#1A4C90",
          }}
        >
          Meet Our Leaders
        </Typography>
      </motion.div>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        {/* Dr. Chandrashekar */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 4,
              borderRadius: 4,
              overflow: 'hidden',
              backgroundColor: '#142D6D',
              transition: 'background-color 0.3s ease',
              height: '100%',
              '&:hover': {
                backgroundColor: '#FE6E32',
              },
            }}
          >
            <CardMedia
              component="img"
              image={drChandra}
              alt="Dr. Chandrashekar"
              sx={{
                height: 300,
                objectFit: 'cover',
                borderBottom: '4px solid #C6D8FE',
              }}
            />
            <CardContent
              sx={{
                padding: '20px',
                textAlign: 'center',
                flexGrow: 1,
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 1, color: '#C6D8FE' }}>
                Dr. Chandrashekar G.R
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: 3, color: '#fff' }}>
                MBBS, MS (General Surgeon), Founder & Chairman, Cauvery Group of Institutions, Mysuru
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', marginBottom: 3, color: '#fff' }}>
                "Education is the soul of society as it passes from one generation to another. We aim to provide
                knowledge and skill along with research temperament."
              </Typography>
              <Button
                href="https://cauverygroupofinstitutions.com/chairmans-message/"
                sx={{
                  color: '#142D6D',
                  backgroundColor: '#fff',
                  padding: '10px 20px',
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#C6D8FE',
                  },
                }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Dr. Sarala */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <Card
            sx={{
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 4,
              borderRadius: 4,
              overflow: 'hidden',
              backgroundColor: '#142D6D',
              transition: 'background-color 0.3s ease',
              height: '100%',
              '&:hover': {
                backgroundColor: '#FE6E32',
              },
            }}
          >
            <CardMedia
              component="img"
              image={sarala}
              alt="Dr. Sarala"
              sx={{
                height: 300,
                objectFit: 'cover',
                borderBottom: '4px solid #C6D8FE',
              }}
            />
            <CardContent
              sx={{
                padding: '20px',
                textAlign: 'center',
                flexGrow: 1,
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 1, color: '#C6D8FE' }}>
                Dr. Sarala Chandrashekar
              </Typography>
              <Typography variant="h6" sx={{ marginBottom: 3, color: '#fff' }}>
                MBBS, MD (Gyn), Managing Director, Cauvery Group of Institutions, Mysuru
              </Typography>
              <Typography variant="body1" sx={{ fontStyle: 'italic', marginBottom: 3, color: '#fff' }}>
                "It is my pride to welcome you to Cauvery Group of Institutions. We are committed to providing
                high-quality Health Care education to equip you with the knowledge and skills to become competent
                professionals."
              </Typography>
              <Button
                href="https://cauverygroupofinstitutions.com/managing-directors-message/"
                sx={{
                  color: '#142D6D',
                  backgroundColor: '#fff',
                  padding: '10px 20px',
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 'bold',
                  '&:hover': {
                    backgroundColor: '#C6D8FE',
                  },
                }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </Box>
  );
}
