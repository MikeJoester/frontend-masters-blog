import React from 'react';
import {Stack, Box, IconButton, Button} from '@mui/material/';
import images from '../../constants/images';
import {Footer} from '../../components/';
import { styled, createTheme, ThemeProvider} from '@mui/material/styles';
import './UserProfile.css';

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

const EditButton = styled(Button)({
  boxShadow: 'none',
  width: 200,
  color: '#DECDB4',
  height: 37,
  textTransform: 'none',
  fontSize: 11,
  fontWeight: 600,
  borderRadius: 10,
  backgroundColor: '#A8A8A8B2',
});

const UserProfile = () => {
  return (
    <div className="user-profile-main">
      <Stack direction="row" sx={{ ml:'100px'}} spacing={12}>
        <Stack direction="column" spacing={6} sx={{mt:'308px', justifyContent: 'center', alignItems: 'center'}}>
          <img src={images.user_avt}/>
          <EditButton>EDIT PROFILE</EditButton>
        </Stack>
        <Stack direction="column" sx={{
          pt:'140px',
          justifyContent:'flex-start',
          width:'777px',
        }}>
          <Box 
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              width: 385,
              height: 47,
              pb:'3px',
              mb:'105px',
              color: '#DECDB4',
              fontSize: 19,
              fontWeight: 600,
              borderTop:'1px solid #DECDB4',
              borderBottom:'1px solid #DECDB4', 
            }}> ABOUT ME </Box>

            <h1 className="user-nickname">Naughty Rabbit</h1>
            <p className="user-name">@rabbit_Inas</p>
            <p className="user-details">Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.Ipsum adipisicing culpa est nisi consequat ex amet magna culpa veniam tempor irure ea. Reprehenderit labore do tempor eiusmod in consectetur ex sunt id mollit commodo ipsum deserunt quis.</p>

            <Stack direction="row" sx={{justifyContent:'space-between'}}>
              <a href="#" className="user-link">
                <img src={images.LinkIcon} className="link-icon"/>
                <p>naughty_rabbit.com</p>
              </a>

              <ThemeProvider theme={IconsTheme}>
                <Stack direction="row">
                    <IconButton color="primary" sx={{}}><LinkedInIcon/></IconButton>
                    <IconButton color="primary" style={{}}><InstagramIcon/></IconButton>
                    <IconButton color="primary" style={{}}><TwitterIcon/></IconButton>
                </Stack>
              </ThemeProvider>
            </Stack>
        </Stack>
      </Stack>
      <Footer/>
    </div>
  )
}

export default UserProfile;