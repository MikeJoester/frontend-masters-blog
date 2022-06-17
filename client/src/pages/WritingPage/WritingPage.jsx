import React, {useState, useContext} from 'react';
import axios from 'axios';
import {Stack, TextField, Button, IconButton} from '@mui/material/';
import {styled, createTheme, ThemeProvider} from '@mui/material/styles';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Context} from '../../context/Context';

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
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const {user} = useContext(Context);

  const handleClick = async(e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc
    };
    try {
      const res = await axios.post("https://fendmaster-app.herokuapp.com/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      alert("Cannot publish post, there has been an error!");
    }
  };

  return (
    <div className="writing-page-main">
        <ThemeProvider theme={WritingTheme}>
            <Stack direction="row" sx={{justifyContent: 'space-between', mt:'183px', mx:'140px', alignItems:'center'}}>
                <Stack direction="row" spacing={3} sx={{alignItems: 'center',}}>
                    <IconButton color="primary" sx={{width:"50px", height:"50px", mt:'20px'}}>
                        <AddCircleOutlineIcon sx={{width:"50px", height:"50px"}}/>
                    </IconButton>
                    
                    <TitleTextField
                        variant="filled"
                        placeholder="Title"
                        onChange={e => setTitle(e.target.value)}
                        sx={{input: {color: '#DECDB4', fontWeight:'600px', fontSize:'58px'}}}/>
                </Stack>
                <PublishButton sx={{mt:'20px'}} onClick={handleClick}>Publish</PublishButton>
            </Stack>
            <textarea name="ass" cols="40" className="main-input" placeholder="Tell Your Story..." 
            onChange={e => setDesc(e.target.value)}></textarea>
        </ThemeProvider>
    </div>
  )
}

export default WritingPage;