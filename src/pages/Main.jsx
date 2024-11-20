import React from 'react';
import Navbar from "../components/navbar.jsx";
import Apply from "../components/Apply.jsx";
import WhyUs from "../components/WhyUs.jsx";
import Courses from "../components/Courses.jsx"; 
import KeyPeople from "../components/KeyPeople.jsx"; 
import Contact from "../components/Contact.jsx"; 
import Achivements from "../components/Achivements.jsx";
import  Programs from "../components/Programs.jsx";
import Coaching from "../components/coaching.jsx";
import Footer from "../components/Footer.jsx";
import Brochure from '../components/Brochure.jsx';
import StudentLife from '../components/student.jsx';
import Principal from "../components/Principal.jsx";
import {Box} from '@mui/system';
export default function Main() {
  return (
    <div style={{background: 'linear-gradient(90deg, #ffffff 25%, #C6D8FE 75%)',}}>
      <Navbar style={{position: 'sticky', top: 0, zIndex: 1000}}/>
      <Apply />
      <WhyUs sx={{mt: 5}}/>
      <Achivements sx={{mt: 5}}/>
      <Courses sx={{mt: 5}}/>
      <Programs sx={{mt: 5}}/>
      <KeyPeople />
      <Principal />
      <StudentLife sx={{mt: 15}}/>
      <Coaching sx={{mt: 5}}/>
      <Brochure sx={{mt: 15}}/>
      <Contact sx={{mt: 5}}/> 
      <Footer/>
      
      
    </div>
  )
}
