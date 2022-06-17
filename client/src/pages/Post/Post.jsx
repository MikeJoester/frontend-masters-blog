import React, {useEffect, useState, useContext} from 'react';
import {Footer} from '../../components';
import {Context} from '../../context/Context';
import {useLocation} from 'react-router';
import {Stack, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import images from '../../constants/images';
import axios from 'axios';
import './Post.css';

const PostTheme = createTheme({
  palette: {
    primary: {
      main: '#DECDB4',
    },
    
    contrastThreshold: 2,
    tonalOffset: 0.1,
  },
});

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [like, setLike] = useState(false);
  const {user} = useContext(Context);
  function handleLike(){
    setLike(!like)
    console.log(like);
  }
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const handleDelete = async() => {
    try {
      await axios.delete(`/posts/${post._id}`, {
        data: {username : user.username},
      });
      alert("Post deleted!");
      window.location.replace("/UserHome");
    } catch (error) {

    }
  };

  const handleUpdate  = async() => {
    try {
      await axios.put(`/posts/${post._id}`, {
          username : user.username,
          title, 
          desc 
      });
      alert("Post updated!");
      window.location.reload();
    } catch (error) {
      
    }
  };

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  },[])

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`/posts/${path}`);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      } catch (error) {
        console.log(error);
      }
    };
    getPost();
  },[path]);
  return (
    <div className="post-main-container">
      <Stack direction="column" spacing={2} sx={{justifyContent: 'space-between', alignItems: 'center'}}>
        <img src={images.postimage} className="post-image"/>
        <div className="post-header">
          {updateMode ? (<input type='text' value={title}className="post-title-input"
          onChange={(e)=> setTitle(e.target.value)}/>) : (<h1>{post.title}</h1>)}
        </div>
        <Stack direction="row" spacing={2} sx={{width:'90%', justifyContent:'space-between', height:'20px', alignItems: 'center'}}>
          <Stack direction="row" spacing={2} sx={{alignItems: 'center', justifyContent:'center'}}>
            <p className="post-date">{new Date(post.createdAt).toDateString()}  &nbsp; • &nbsp; By:&nbsp; <b>{post.username}</b></p>
            <ThemeProvider theme={PostTheme}>
              <IconButton color="primary" onClick={handleLike}>
                {like ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
              </IconButton>
            </ThemeProvider>
          </Stack>
          {post.username === user?.username && (
          <Stack direction="row" spacing={2}>
            <IconButton onClick={() => setUpdateMode(true)}>
              <img src={images.editIcon}/>
            </IconButton>
            <IconButton onClick={handleDelete}>
              <img src={images.deleteIcon}/>
            </IconButton>
          </Stack>)}
        </Stack>
        {updateMode ? (<textarea className="main-input" value={desc}
        onChange={(e)=> setDesc(e.target.value)}/>) : (<p className="post-text-body">{post.desc}</p>)}
        {updateMode && 
        <div className="publish-button-container">
          <button className="publish-button"
          onClick={handleUpdate}>Publish</button>
        </div>}
      </Stack>
      <br/>
      <Stack sx={{mx:'70px'}} direction="column" spacing={2}>
        <h2 className="comment-title">C O M M E N T</h2>
        <div className="big-ass-white-line"></div>
        <div class="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="100%" data-numposts="5"></div>
      </Stack>
      <Footer/>
    </div>
  )
}

export default Post;