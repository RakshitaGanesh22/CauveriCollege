import React, { useState, useContext, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Button, Typography, Box, Drawer, List, ListItem, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeContext } from "./theme";
import Logo from "../asset/logo.jpg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useContext(ThemeContext);

  // Use media query to detect screen size
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('md'));

  // Close the drawer automatically on larger screens
  useEffect(() => {
    if (isLargeScreen) {
      setMobileOpen(false); // Close drawer on larger screens
    }
  }, [isLargeScreen]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Links for the navbar
  const navLinks = [
    { text: 'WHY CHOOSE US', href: '#whyus' },
    { text: 'CGU Legacy', href: '#achievements' },
    { text: 'OUR PROGRAMS', href: '#programs' },
    { text: 'COACHING', href: '#coaching' },
    { text: 'STUDENT LIFE', href: '#studentlife' },
    { text: 'JOIN US', href: '#apply' }
  ];

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", zIndex: "1100" }}>
      <AppBar
        sx={{
          position: "sticky",
          top: 0,
          background: 'linear-gradient(90deg, #ffffff 25%, #C6D8FE 75%)',
          boxShadow: 3,
          paddingX: 3,
          height: { xs: 60, sm: 70, md: 100 },
          display: "flex",
          justifyContent: "center",
          zIndex: 1100,
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* Logo */}
          <IconButton
            edge="start"
            color="inherit"
            sx={{ width: 'auto', height: { xs: 40, sm: 50, md: 60 } }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Logo"
              sx={{
                width: { xs: 110, sm: 130, md: 200 },
                height: { xs: 110, sm: 130, md: 180 },
                objectFit: 'contain',
                marginTop: { xs: 7, sm: 7, md: 11 },
              }}
            />
          </IconButton>

          {/* Links for larger screens */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'space-between', gap: 2 }}>
            {navLinks.map((link) => (
              <Button key={link.text} href={link.href}>
                <Typography
                  variant="body1"
                  component="h6"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    "&:hover": { color: theme.palette.secondary.main },
                  }}
                >
                  {link.text}
                </Typography>
              </Button>
            ))}
          </Box>

          {/* Menu icon for mobile */}
          <IconButton
            color="black"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer component for mobile view */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            padding: 2,
            backgroundColor: "white",
          },
        }}
      >
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          sx={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            "&:hover": {
              cursor: 'pointer',
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <List>
            
              {navLinks.map((link) => (
            <ListItem key={link.text} button onClick={handleDrawerToggle}>
              <Button key={link.text} href={link.href}>
                <Typography
                  variant="body1"
                  component="h6"
                  sx={{
                    fontWeight: 700,
                    color: theme.palette.text.primary,
                    "&:hover": { color: theme.palette.secondary.main },
                  }}
                >
                  {link.text}
                </Typography>
              </Button>
              </ListItem>
            ))}
            
        </List>
      </Drawer>
    </Box>
  );
};

export default Navbar;
