import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  CardActionArea,
  useMediaQuery,
  Grid2,
} from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function WhyUs() {
  const isMobile = useMediaQuery('(max-width:800px)');
  return (
    <Box id="whyus" sx={{ padding: 3, background: 'linear-gradient(90deg, #ffffff 25%, #C6D8FE 75%)',marginTop: 5,paddingLeft:isMobile?5: 15,paddingRight: isMobile?5: 15,display:"flex",flexDirection:"column",gap:2 }}>
      <Typography variant="h2" component="h2" align="center" sx={{ marginBottom: 4, fontWeight: 'bold',color:"#1A4C90" }}>
        Why Choose Cauvery Group of Institutions?
      </Typography>
      <Typography variant="h6" component="h6" align="left" sx={{ marginBottom: 5,color:"#333333",fontWeight: '600',fontSize: '1.2rem',textAlign:"left" }}>
        We offer a transformative learning experience that empowers you to excel in healthcare, supported by a foundation of integrity and compassion. Through affiliations with leading institutions, including a Memorandum of Understanding with the NHS in the United Kingdom, we ensure students are equipped for a global impact. With over 2500 graduates who have contributed to the healthcare industry worldwide, we are dedicated to nurturing academic excellence alongside essential life skills.
      </Typography>

      {/* Carousel Section */}
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={2000} // Adjust the interval for automatic scrolling (in milliseconds)
        stopOnHover={true} // Disable pausing on hover, set to true if you want the carousel to pause on hover
      >
        {/* Section 1: Established Excellence */}
        <Box sx={{display:"flex",flexDirection:"column",gap:5}}>
          <Typography variant="h4" align="center" sx={{ marginBottom: 2, fontWeight: '800' ,backgroundColor:"#142D6D",width:isMobile?"90%":"40%",margin:"auto",height:"auto",padding:2,borderRadius:2,color:"white"}}>
            Established Excellence
          </Typography>
          <Grid2 container spacing={3} justifyContent="center">
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{
                border: '2px solid #142D6D', boxShadow: 3, transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" color="#FE6E32" sx={{filter:"brightness(0.8)"}}>Founded in 2001 by Dr. G R Chandrashekar</Typography>
                    <Typography variant="h6"></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{
                border: '2px solid #142D6D', boxShadow: 3, transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" color="#FE6E32" sx={{filter:"brightness(0.8)"}}>Cauvery Heart & Multi Speciality Hospital</Typography>
                    <Typography variant="body1" color="#333333">200-bed heart and multi-specialty care center</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{
                border: '2px solid #142D6D', boxShadow: 3, transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" color="#FE6E32" sx={{filter:"brightness(0.8)"}}>Cauvery Diagnostics and Polyclinic</Typography>
                    <Typography variant="body1" color="#333333">Specialized in diagnostics since 2019</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          </Grid2>
        </Box>

        {/* Section 2: Comprehensive Healthcare Education */}
        <Box sx={{display:"flex",flexDirection:"column",gap:5}}>
          <Typography variant="h4" align="center"  sx={{ marginBottom: 2, fontWeight: '800' ,backgroundColor:"#142D6D",width:isMobile?"90%":"40%",margin:"auto",height:"auto",padding:2,borderRadius:2,color:"white"}}>
            Comprehensive Healthcare Education
          </Typography>
          <Grid2 container spacing={3} justifyContent="center">
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{
                border: '2px solid #142D6D', boxShadow: 3, transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" color="#FE6E32" sx={{filter:"brightness(0.8)"}}>Broad Healthcare Disciplines</Typography>
                    <Typography variant="h6"></Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{
                border: '2px solid #142D6D', boxShadow: 3, transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" color="#FE6E32" sx={{filter:"brightness(0.8)"}}>Affiliations with Top Universities</Typography>
                    <Typography variant="body1" color="#333333">Rajiv Gandhi University, University of Mysore</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{
                border: '2px solid #142D6D', boxShadow: 3, transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" color="#FE6E32" sx={{filter:"brightness(0.8)"}}>High Academic Standards</Typography>
                    <Typography variant="h6">_</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          </Grid2>
        </Box>

        {/* Section 3: Global Opportunities and Alumni Network */}
        <Box sx={{display:"flex",flexDirection:"column",gap:5}}>
          <Typography variant="h4" align="center"  sx={{ marginBottom: 2, fontWeight: '800' ,backgroundColor:"#142D6D",width:isMobile?"90%":"40%",margin:"auto",height:"auto",padding:2,borderRadius:2,color:"white"}}>
            Global Opportunities & Alumni Network
          </Typography>
          <Grid2 container spacing={3} justifyContent="center">
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{
                border: '2px solid #142D6D', boxShadow: 3, transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" color="#FE6E32" sx={{filter:"brightness(0.8)"}}>Partnership with NHS</Typography>
                    <Typography variant="body1" color="#333333">International training and placement for nursing graduates</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{
                border: '2px solid #142D6D', boxShadow: 3, transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" color="#FE6E32" sx={{filter:"brightness(0.8)"}}>Global Opportunities</Typography>
                    <Typography variant="body1" color="#333333">Empowering students to excel globally</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{
                border: '2px solid #142D6D', boxShadow: 3, transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" color="#FE6E32" sx={{filter:"brightness(0.8)"}}>Over 2,500 Graduates</Typography>
                    <Typography variant="body1" color="#333333">Alumni making a mark in the healthcare industry worldwide</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          </Grid2>
        </Box>

        {/* Section 4: Vision, Mission, and Core Values */}
        <Box sx={{display:"flex",flexDirection:"column",gap:5}}>
          <Typography variant="h4" align="center"  sx={{ marginBottom: 2, fontWeight: '800' ,backgroundColor:"#142D6D",width:isMobile?"90%":"40%",margin:"auto",height:"auto",padding:2,borderRadius:2,color:"white"}}>
            Vision, Mission, & Core Values
          </Typography>
          <Grid2 container spacing={3} justifyContent="center">
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{
                border: '2px solid #142D6D', boxShadow: 3, transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" color="#FE6E32" sx={{filter:"brightness(0.8)"}}>Vision</Typography>
                    <Typography variant="body1" color="#333333">Transforming lives through innovative healthcare education</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{
                border: '2px solid #142D6D', boxShadow: 3, transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" color="#FE6E32" sx={{filter:"brightness(0.8)"}}>Mission</Typography>
                    <Typography variant="body1">Preparing healthcare leaders who embody excellence and compassion</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
            <Grid2 item xs={12} sm={6} md={3}>
              <Card sx={{
                border: '2px solid #142D6D', boxShadow: 3, transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': { transform: 'scale(1.05)', boxShadow: 6 }}}>
                <CardActionArea>
                  <CardContent>
                    <Typography variant="h6" color="#FE6E32" sx={{filter:"brightness(0.8)"}}>Core Values</Typography>
                    <Typography variant="body1" color="#333333">Unity, Integrity, Excellence, Innovation, Compassion</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          </Grid2>
        </Box>
      </Carousel>
    </Box>
  );
}
