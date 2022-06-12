import React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import './UserNB.css';
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

const UserNB = () => {
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
              <NavbarButton variant='text'>
                <Link to="/">
                  Home 
                </Link>
              </NavbarButton>
              <NavbarButton variant='text'>
                <Link to="/UserHome">
                  Category 
                </Link>
              </NavbarButton>
              <NavbarButton variant='text'>
                <Link to="/WritingPage">
                  Write 
                </Link>
              </NavbarButton>
              <div className="search-container">
                <NavbarButton variant='text'>
                  <SearchIcon/>
                  <Link to="/SearchPage">
                    Search
                  </Link>
                </NavbarButton>
              </div>
              <NavbarButton variant='outlined'>
                <Link to="/UserProfile">
                  Profile 
                </Link>
              </NavbarButton>
            </ThemeProvider>
          </Stack>
        </div>
    </nav>
  )
}

export default UserNB;