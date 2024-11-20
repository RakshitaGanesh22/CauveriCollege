import React from 'react';
import {
  Typography,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Grid2,
  Divider,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BiotechIcon from '@mui/icons-material/Biotech';
import BookIcon from '@mui/icons-material/Book';
import science from '../asset/science.jpg';
import commerce from '../asset/commerce.jpg';

export default function Courses() {
  const isMobile = useMediaQuery('(max-width:1100px)');
  const theme = useTheme();

  const courses = [
    {
      image: science,
      title: "Science",
      description:
        "Empowering Future Scientists and Engineers: BASE PU College by BASE Charitable Foundation – Quality Science Education for NEET/JEE Aspirants with 28+ Years of Academic Excellence",
      link: "https://www.cauverypucolleges.com/science/",
      img: <BiotechIcon sx={{ fontSize: '1.5rem', marginLeft: 1 }} />,
    },
    {
      image: commerce,
      title: "Commerce",
      description:
        "EBAC: A Gateway to Promising Careers in Business, Accounting, and Computer Science – Preparing Future Leaders for B.Com, BBA, and Beyond",
      link: "https://www.cauverypucolleges.com/commerce/",
      img: <BookIcon sx={{ fontSize: '1.5rem', marginLeft: 1 }} />,
    },
  ];

  return (
    <Box id="programs"
      sx={{
        padding: 5,
        background: 'linear-gradient(90deg, #ffffff 25%, #C6D8FE 75%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: 'bold',
          width: '100%',
          color: '#1A4C90',
          fontSize: isMobile ? '1.8rem' : '2.5rem', // Responsive font size
          marginBottom: 4,
        }}
      >
        Unlock Your Potential with Our Courses
      </Typography>

      <Grid2
        container
        spacing={4}
        justifyContent="center"
        sx={{
          gap: isMobile ? 3 : 8,
          flexWrap: 'wrap',
        }}
      >
        {courses.map((course, index) => (
          <React.Fragment key={index}>
            <Card
              sx={{
                boxShadow: 5,
                height: isMobile ? 430 : 530, // Responsive card height
                width: isMobile ? '100%' : 450, // Responsive card width
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#E8F6F3',
                textAlign: 'left',
                transition: 'transform 0.3s ease, background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: '#AED6F1',
                  transform: 'scale(1.05)',
                },
              }}
            >
              <CardMedia
                component="img"
                image={course.image}
                alt={course.title}
                sx={{
                  height: isMobile ? 200 : 300, // Responsive image height
                  objectFit: 'cover',
                }}
              />
              <CardContent
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: 2,
                  alignText:"left"
                }}
              >
                <Typography
                  variant="h4"
                  component="h4"
                  sx={{
                    fontWeight: 'bold',
                    textAlign: 'left',
                    color: '#1A4C90',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {course.title}
                  {course.img}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    textAlign: 'left',
                    marginTop: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  padding: 2,
                  justifyContent: 'center',
                }}
              >
                <Box sx={{width: '100%'}}>
                <Button
                  variant="contained"
                  sx={{
                    width: '30%',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    backgroundColor: '#1A4C90',
                    color: 'white',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#154360',
                    },
                  }}
                  href={course.link}
                >
                  Learn More
                </Button>
                </Box>
              </CardActions>
            </Card>

            {/* Vertical Divider */}
            {!isMobile && index < courses.length - 1 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  margin: 2,
                  backgroundColor: theme.palette.primary.main,
                  width: 2,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Grid2>
    </Box>
  );
}
