import React from 'react';
import './Newsletter.css';
import Button from '@mui/material/Button';
import {Stack, Box, TextField} from '@mui/material/';
import images from '../../../../constants/images';
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    width: 165,
    textTransform: 'none',
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 2.5,
    borderRadius: 8,
    backgroundColor: '#6246EA',
});

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

const Newsletter = () => {
  return (
    <div className="newsletter-main">
        <BootstrapButton variant="contained" color="secondary"> More Article</BootstrapButton>

        <Stack direction="column" sx={{ width: '696px', height:'337px', alignItems: 'center'}}>
            <img src={images.mailbox} className='mail-box'/>
            <Box sx={{ width: '604px', alignItems: 'center',}}>
                <h1>Subscribe For the lastest updates</h1>
                <p>Subscribe to newsletter and never miss the new post every week.</p>
            </Box>
            
            <Stack direction="row" spacing={2} sx={{mt:'30px'}}>
                <MailTextField label="Enter your email here..." sx={{width:'444px', height:'67px'}}/>
                <SubscribeButton variant="contained" color="secondary">Subscribe</SubscribeButton>
            </Stack>
        </Stack>
    </div>
  )
}

export default Newsletter;