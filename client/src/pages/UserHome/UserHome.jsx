import React from 'react';
import {Category, ArticleList, Footer} from '../../components';
import {Stack, Box, TextField, Button} from '@mui/material/';
import { styled } from '@mui/material/styles';

import './UserHome.css';
const SubscribeButton = styled(Button)({
  boxShadow: 'none',
  width: 145,
  height: 67,
  textTransform: 'none',
  fontSize: 20,
  fontWeight: 700,
  borderRadius: 8,
  backgroundColor: '#6246EA',
});

const MailTextField = styled(TextField)({
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

const UserHome = () => {
  return (
    <div>
      <div className="user-home-main">
        <div className="user-home-gradient-container">
          <div className="user-home-main-container">
              <div className="user-home-text-container">
                  <h1>Welcome To</h1>
                  <h1>FrontEndMaster -</h1>
                  <h1>Front End Dev</h1>
                  <div className="text-container-description">
                      <div className="vertical-line"/>
                      <p>On this blog I share tips and tricks, frameworks, projects, tutorials, etc Make sure you subscribe to get the latest updates</p>
                  </div>

                  <Stack direction="row" spacing={2} sx={{ml:'95px'}}>
                    <MailTextField label="Enter your email here..." sx={{width:'444px', height:'67px'}}/>
                    <SubscribeButton variant="contained" color="secondary">Subscribe</SubscribeButton>
                  </Stack>
              </div>
          </div>
        </div>
      </div>
      <div className="category-bg">
        <Category/>
        <ArticleList/>
      </div>
      <Footer/>
    </div>
    
  )
}

export default UserHome