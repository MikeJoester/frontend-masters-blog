import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Footer} from '../../../components';
import ArticleItem from '../../../components/UsrHome/ArticleList/ArticleItems/ArticleItem';
import { Stack, Grid } from '@mui/material';
import './ReactPage.css';

const ReactPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async() => {
      const res = await axios.get("https://fendmaster-app.herokuapp.com/api/posts");
      setPosts(res.data);
      console.log("Successfully get posts!");
    }
    fetchPosts();
  }, []);
  return (
    <div className="css-page-container">
        <div className="category-page-contents">
        <Stack direction="column" spacing={10} sx={{ml:'96px', mr:'101px', pt:'30px'}}>
          <div className="category-title-container">
          <a href="/UserHome"><Stack direction="row">
              <p className="category-header">React JS</p>
              <div className="small-line"></div>
            </Stack></a>
          </div>

          <Stack direction="column" spacing={4}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
            justifyContent="center">
              {posts.map(p=>(
              <ArticleItem
              post={p}/>
              ))}
            </Grid>
          </Stack>
                   
        </Stack>
        </div>
        <Footer/>
    </div>
  )
}

export default ReactPage;