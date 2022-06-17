import React, {useEffect, useState} from 'react';
import ArticleItem from '../../components/UsrHome/ArticleList/ArticleItems/ArticleItem';
import './SearchPage.css';
import {
    Box, 
    Stack, 
    IconButton, 
    Button,
    TextField,
    Grid,
} from '@mui/material/';
import axios from 'axios';
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
    const [posts, setPosts] = useState([]);
    const [searchVal, setSearchVal] = useState("");
    const handleSearch = async() => {
        const res = await axios.get(`https://fendmaster-app.herokuapp.com/api/posts?user=${searchVal.toString()}`);
        setPosts(res.data);
        console.log("Successfully searched posts!");
    };

  return (
    <div className="search-container-main">
        <div className='gradient-container'>
            <div className="big-ass-line"></div>
            <Stack direction="row" spacing={3} sx={{pt:'479px', pl:'334px'}}>
                <SearchTextField value={searchVal} onChange={(e) => setSearchVal(e.target.value)} label="Search information  about artical,  author,.........." sx={{width:'60%', height:'67px'}}></SearchTextField>
                <SearchButton variant="contained" color="secondary" onClick={handleSearch}>Search</SearchButton>
            </Stack>
            <br/><br/><br/>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
                    justifyContent="center">
                    {posts.map(p=>(
                    <ArticleItem
                    post={p}/>
                    ))}
                </Grid>
            
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
                    
                    <Stack direction="row" sx={{width:'80%', color:'#DECDB4'}}>

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
                    </Stack>
                </div>
                <div className="white-horizontal-line"></div>
                <p className="footer-copyright">© 2022 MikeJ</p>
            </footer>
        </div> 
    </div>
    
  )
}

export default SearchPage;