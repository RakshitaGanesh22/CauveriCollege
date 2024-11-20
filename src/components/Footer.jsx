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
    Copyright © Cauvery Group of Institutions 2024. All rights reserved | Designed by Nexos Soft Techologies
    </Typography>
</Box>
  )
}
