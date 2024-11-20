import React from 'react'
import {
    Typography,
    Box,
    Button,
    TextField,
    useMediaQuery,
    MenuItem
  } from '@mui/material';
export default function Footer() {
  return (
    <Box sx={{ textAlign: 'center', padding: '1rem', backgroundColor: '#3498DB' }}>
     <Typography variant="body1" color="white">
    Copyright © Cauvery Group of Institutions 2024. All rights reserved | Designed by <a title="https://nexossoft.com/" style={{color: 'white',fontWeight: 'bold'}} href="https://nexossoft.com/">Nexos Soft Techologies Pvt. Ltd.</a>
    </Typography>
</Box>
  )
}
