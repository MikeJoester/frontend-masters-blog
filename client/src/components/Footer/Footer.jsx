import React from 'react';
import './Footer.css';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
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

const Footer = () => {
  return (
    <footer>
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
            
            <Stack direction="row" spacing={8} sx={{width:'80%', color:'#DECDB4'}}>

                <Box sx={{ width: '100%'}}>
                    <Stack spacing={2}>
                        <h3>CATEGORY</h3>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>Tailwind</p>
                        <p>ReactJS</p>
                        <p>More Category</p>
                    </Stack>
                </Box>

                <Box sx={{ width: '100%'}}>
                    <Stack spacing={2}>
                        <h3>ABOUT ME</h3>
                        <p>About me</p>
                        <p>Projects</p>
                        <p>Achievements</p>
                    </Stack>
                </Box>

                <Box sx={{ width: '100%'}}>
                    <Stack spacing={2}>
                        <h3>GET IN TOUCH</h3>
                        <p>+84 905 234 jqk</p>
                        <p>deez.nuts@gmail.com</p>
                    </Stack>
                </Box>

                <Box sx={{ width: '100%'}}>
                    <Stack spacing={2} sx={{mr:'50px'}}>
                        <h3>FOLLOW US</h3>
                        <p>Medium</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Facebook</p>
                    </Stack>
                </Box>
            </Stack>
        </div>
        <div className="white-horizontal-line"></div>
        <p className="footer-copyright">© 2022 MikeJ</p>
    </footer> 
  )
};

export default Footer;