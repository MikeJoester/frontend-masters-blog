import React from 'react';
import {Stack, TextField, Button, IconButton} from '@mui/material/';
import {styled, createTheme, ThemeProvider} from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './WritingPage.css';

const WritingTheme = createTheme({
    palette: {
      primary: {
        main: '#DECDB4',
      },
      secondary: {
        main: '#FFF',
      },
      
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
});

const TitleTextField = styled(TextField)({
    '& placeholer': {
        color: '#DECDB4',
        fontSize: '58px',
        fontFamily: 'Plus Jakarta Sans',
        fontWeight: '600',
    },
});

const PublishButton = styled(Button)(({ theme }) => ({
    color: '#fff',
    backgroundColor: '#DECDB4',
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    height: '67px',
    width: '117px',
    fontSize: '20px',
    textTransform: 'Capitalize',
    '&:hover': {
        backgroundColor: '#816C61',
      },
}));

const WritingPage = () => {
  return (
    <div className="writing-page-main">
        <ThemeProvider theme={WritingTheme}>
            <Stack direction="row" sx={{justifyContent: 'space-between', mt:'183px', mx:'140px', alignItems:'center'}}>
                <Stack direction="row" spacing={3} sx={{alignItems: 'center',}}>
                    <IconButton color="primary" sx={{width:"50px", height:"50px", mt:'20px'}}>
                        <AddCircleOutlineIcon sx={{width:"50px", height:"50px"}}/>
                    </IconButton>
                    
                    <TitleTextField
                        defaultValue="Title"
                        variant="filled"
                        sx={{input: {color: '#DECDB4', fontWeight:'600px', fontSize:'58px'}}}/>
                </Stack>
                <PublishButton sx={{mt:'20px'}}>Publish</PublishButton>
            </Stack>
            <textarea name="ass" cols="40" className="main-input" >Tell Your Story...</textarea>
        </ThemeProvider>
    </div>
  )
}

export default WritingPage;