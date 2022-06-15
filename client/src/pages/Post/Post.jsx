import React, {useEffect, useState} from 'react';
import {Footer} from '../../components';
import {useLocation} from 'react-router';
import {Stack, Box, Button, IconButton} from '@mui/material';
import images from '../../constants/images';
import axios from 'axios';
import './Post.css';

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${path}`);
        setPost(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  },[path]);
  return (
    <div className="post-main-container">
      <Stack direction="column" spacing={2} sx={{justifyContent: 'space-between', alignItems: 'center'}}>
        <img src={images.postimage}/>
        <div className="post-header"><h1>{post.title}</h1></div>
        <Stack direction="row" spacing={2} sx={{width:'90%', justifyContent:'flex-start'}}>
          <p>{new Date(post.createdAt).toDateString()}  &nbsp; • &nbsp; 212 Views</p>
          <p>heart icon</p>
          <p>download icon</p>
        </Stack>
        <p className="post-text-body">{post.desc}</p>
      </Stack>
      <Footer/>
    </div>
  )
}

export default Post;