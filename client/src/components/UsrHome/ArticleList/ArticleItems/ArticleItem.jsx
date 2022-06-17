import React from 'react';
import { Stack } from '@mui/material';
import {Link} from 'react-router-dom';
import images from '../../../../constants/images';

import './ArticleItem.css';

const ArticleItem = ({post}) => {
    return(
        <Stack direction="column" 
            sx={{
                justifyContent: 'space-between',
                width: '425px',
                height: '425px',
                alignItems:'center',
        }}>
            <Link to={`/post/${post._id}`}>
                <Stack direction="column" sx={{alignItems: 'center'}}>
                    <img src={images.article1} className="title-image"/>
                    <span className="article-item-text">{post.title}</span>
                </Stack>
            </Link>
            
            <Stack direction="row" 
                sx={{
                    justifyContent: 'center',
                    width: '100%', 
                    mb:'25px',
                    px:'22px'}}>
                <div className="article-item-info-container">
                    <img src={images.avatar1} className="avatar-image"/>
                    <Stack direction="column" sx={{ml:'15px', width: '100%', height:'57px', justifyContent:'space-between'}}>
                        <p className="usr-name">{post.username}</p>
                        <p className="time-text">{ new Date(post.createdAt).toDateString()}</p>
                        {/* &nbsp; • &nbsp; 3 min Read</p> */}
                    </Stack>
                </div>
            </Stack>
        </Stack>
    )
};

export default ArticleItem;