import React from 'react';
import './SearchPage.css';
import {
    Box, 
    Stack, 
    IconButton, 
    Button,
    TextField,
} from '@mui/material/';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const IconsTheme = createTheme({
    palette: {
      primary: {
        main: '#DECDB4',
      },

      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
});

const SearchButton = styled(Button)({
    boxShadow: 'none',
    width: 145,
    height: 67,
    textTransform: 'none',
    paddingTop: 11,
    fontSize: 20,
    fontWeight: 700,
    borderRadius: 8,
    backgroundColor: '#6246EA',
});

const SearchTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'transparent',
    },
    '& label': {
        color: '#c0c0c0',
        fontSize: '20px',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '500',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#c0c0c0',
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: 8,
        backgroundColor: '#fff',
        height: '67px',

        '& fieldset': {
            borderColor: '#404040',
        },
        '&:hover fieldset': {
            borderColor: '#c0c0c0',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#c0c0c0',
        },
    },
});

const SearchPage = () => {
  return (
    <div className="search-container-main">
        <div className='gradient-container'>
            <div className="big-ass-line"></div>
            <Stack direction="row" spacing={3} sx={{pt:'479px', pl:'334px'}}>
                <SearchTextField label="Search information  about artical,  author,.........." sx={{width:'60%', height:'67px'}}/>
                <SearchButton variant="contained" color="secondary">Search</SearchButton>
            </Stack>
            <footer className="custom-footer">
                <div className="footer-container">
                    <Box sx={{ width: '100%', ml:'95px'}}>
                        <Stack spacing={2}>
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank' className="footer-logo-link">
                                <div className="navbar-header-icon">
                                    <h1>FrontEndMasters</h1>
                                    <h2>.Blog</h2>
                                </div>
                            </a>
                            <p>Nguyen The Dan developed dis page</p>
                            <ThemeProvider theme={IconsTheme}>
                                <Stack direction="row" spacing={2}>
                                    <IconButton color="primary" sx={{ml: -1}}><TwitterIcon/></IconButton>
                                    <IconButton color="primary" style={{}}><InstagramIcon/></IconButton>
                                    <IconButton color="primary" style={{}}><LinkedInIcon/></IconButton>
                                </Stack>
                            </ThemeProvider>
                        </Stack>
                    </Box>
                    
                    <div className="footer-link">

                        <Box sx={{ width: '100%', mr:'112px'}}>
                            <Stack spacing={2}>
                                <h3>CATEGORY</h3>
                                <p>CSS</p>
                                <p>JavaScript</p>
                                <p>Tailwind</p>
                                <p>ReactJS</p>
                                <p>More Category</p>
                            </Stack>
                        </Box>

                        <Box sx={{ width: '100%', mr:'112px'}}>
                            <Stack spacing={2}>
                                <h3>ABOUT ME</h3>
                                <p>About me</p>
                                <p>Projects</p>
                                <p>Achievements</p>
                            </Stack>
                        </Box>

                        <Box sx={{ width: '100%', mr:'112px'}}>
                            <Stack spacing={2}>
                                <h3>GET IN TOUCH</h3>
                                <p>+84 905 234 jqk</p>
                                <p>deez.nuts@gmail.com</p>
                            </Stack>
                        </Box>

                        <Box sx={{ width: '100%', mr:'50px'}}>
                            <Stack spacing={2}>
                                <h3>FOLLOW US</h3>
                                <p>Medium</p>
                                <p>Instagram</p>
                                <p>Twitter</p>
                                <p>Facebook</p>
                            </Stack>
                        </Box>
                    </div>
                </div>
                <div className="white-horizontal-line"></div>
                <p className="footer-copyright">© 2022 MikeJ</p>
            </footer>
        </div> 
    </div>
    
  )
}

export default SearchPage;