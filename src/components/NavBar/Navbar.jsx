import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import './Navbar.css';
const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      contrastText: '#ffcc00',
    },
    
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const NavbarButton = styled(Button)(({ theme }) => ({
  color: '#fff',
  fontFamily: 'Plus Jakarta Sans',
  fontWeight: '700',
  fontSize: '20px',
  textTransform: 'Capitalize',
}));

const Navbar = () => {
  return (
    <nav className="navbar-main">
        <div className="navbar-container">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank'>
            <div className="navbar-header-icon">
              <h1>FrontEndMasters</h1>
              <h2>.Blog</h2>
            </div>
          </a>
          <Stack spacing={7} direction='row' sx={{
            mr: 17,
            p: 2,
          }}>
            <ThemeProvider theme={theme}>
              <NavbarButton variant='text'>Home</NavbarButton>
              <NavbarButton variant='text'>Category</NavbarButton>
              <div className="search-container">
                <IconButton aria-label="search" color="primary" style={{}}><SearchIcon/></IconButton>
                <NavbarButton variant='text'>Search</NavbarButton>
              </div>
              <NavbarButton variant='text'>Sign In</NavbarButton>
              <NavbarButton variant='outlined'>Sign Up</NavbarButton>
            </ThemeProvider>
          </Stack>
        </div>
    </nav>
  )
}

export default Navbar;