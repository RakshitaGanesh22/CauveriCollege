import React from 'react';
import { Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import science from '../asset/sciencee.jpeg';
import comm from '../asset/comm.jpg';
import { textAlign } from '@mui/system';

const Programs = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const sectionStyle = (gradient, isAlternate = false) => ({
    display: 'flex',
    flexDirection: isAlternate ? 'row-reverse' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(10, 6),
    gap: theme.spacing(6),
    background: gradient,
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(6),
    boxShadow: theme.shadows[8],
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      textAlign: 'center',
      padding: theme.spacing(6, 3),
    },
  });

  const imageStyle = {
    width: '45%',
    height: '350px',
    borderRadius: theme.shape.borderRadius,
    objectFit: 'cover',
    boxShadow: theme.shadows[6],
    border: '4px solid #C6D8FE',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      height: '250px',
    },
  };

  const textStyle = {
    flex: 1,
    textAlign: 'left',
    color: '#142D6D',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    },
  };

  const headingStyle = {
    fontSize: '2.4rem',
    fontWeight: '700',
    marginBottom: theme.spacing(2),
    color: '#142D6D',
    borderBottom: `3px dashed #FE6E32`,
    paddingBottom: theme.spacing(1),
    display: 'inline-block',
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
    },
  };

  const subheadingStyle = {
    fontSize: '1.3rem',
    fontWeight: 600,
    color: '#0A4DF6',
    textAlign: 'left',
    marginBottom: theme.spacing(3),
  };

  const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: 1.8,
    marginBottom: theme.spacing(2),
    color: '#444',
    textAlign:"left"
  };

  const buttonStyle = {
    marginTop: theme.spacing(4),
    padding: theme.spacing(1.5, 4),
    fontSize: '1rem',
    backgroundColor: '#FE6E32',
    color: '#FFF',
    borderRadius: '30px',
    boxShadow: theme.shadows[4],
    '&:hover': {
      backgroundColor: '#142D6D',
      boxShadow: theme.shadows[8],
    },
  };

  return (
    <Box>
      {/* Science Section */}
      <Box sx={sectionStyle('linear-gradient(to left, #C6D8FE, #F6F6F6)')}>
        <Box component="img" src={science} alt="Science Program" sx={imageStyle} />
        <Box sx={textStyle}>
          <Typography variant="h3" sx={headingStyle}>
            Science Program
          </Typography>
          <Typography variant="h5" sx={subheadingStyle}>
            Academically Associated with Vidhya Sadhana(Integrated NEET/JEE)
          </Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            <strong>Vidhya Sadhana College Overview:</strong> Established by Vidhya Sadhana Foundation(VSF) , an associate trust of Vidhya Sadhana Educational Services, with over 28 years of experience.
          </Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            <strong>Purpose of VSF:</strong> To impart quality education in science at the pre-university level.
          </Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            <strong>Academic Offerings:</strong> The program offers a wide range of courses in science, including biology, chemistry, physics,computer science, and mathematics.
          </Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            <strong>Infrastructure and Locations:</strong> 3 colleges located in Bangalore and Mysore with excellent physical and academic infrastructure.
          </Typography>
          <Button href="https://basepucollege.edu.in/index.php" variant="contained" sx={buttonStyle}>
            Learn More
          </Button>
        </Box>
      </Box>

      {/* Commerce Section */}
      <Box sx={sectionStyle('linear-gradient(to right, #C6D8FE, #F6F6F6)', true)}>
        <Box component="img" src={comm} alt="Commerce Program" sx={imageStyle} />
        <Box sx={textStyle}>
          <Typography variant="h3" sx={headingStyle}>
            Commerce Program
          </Typography>
          <Typography variant="h5" sx={subheadingStyle}>
            EBAC (Economics, Business Studies, Accounting, and Computer Science)
          </Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            <strong>Course Overview:</strong> A mix of business and computer science subjects that is becoming exceptionally popular among students.
          </Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            <strong>Career Opportunities:</strong> Provides excellent career possibilities in business and management, with options for further studies like B.Com, BBA, or even an MBA.
          </Typography>
          <Typography variant="body1" sx={paragraphStyle}>
            <strong>Additional Opportunities:</strong> Offers flexibility to pursue online certifications and courses, especially for those interested in entrepreneurship.
          </Typography>
          <Button href="https://ebac.in" variant="contained" sx={buttonStyle}>
            Learn More
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Programs;
