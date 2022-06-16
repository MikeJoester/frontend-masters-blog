import React, {useContext} from 'react';
import axios from 'axios';
import {Context} from '../../context/Context';
import { Link } from 'react-router-dom';
import {Button, IconButton, Stack} from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import images from '../../constants/images';

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
  const user = useContext(Context);
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
              
              <div className="most-left-container">
                {user ? 
                 <div className="most-left-container">
                  <NavbarButton variant='text' sx={{mr:'56px'}}>
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
                  <IconButton sx={{ width: '57px', height: '57px'}}>
                    <Link to="/UserProfile">
                      <img src={images.user_avt} className="profile-image-small"/>
                    </Link>
                  </IconButton> 
                 </div>
                : <div className="most-left-container">
                    <div className="search-container">
                      <NavbarButton variant='text'>
                        <SearchIcon/>
                        <Link to="/SearchPage">
                          Search
                        </Link>
                      </NavbarButton>
                    </div>
                    <NavbarButton variant='text'>
                      <Link to="/Login">
                        Sign In
                      </Link>
                    </NavbarButton>
                    <NavbarButton variant='outlined' sx={{ml:'56px'}}>
                      <Link to="/Register">
                        Sign Up 
                      </Link>
                    </NavbarButton>
                  </div>}
              </div>
            </ThemeProvider>
          </Stack>
        </div>
    </nav>
  );
}

export default Navbar