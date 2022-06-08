import React from 'react';
import { Stack, Box } from '@mui/material';

import './ArticleItem.css';

const ItemProps = {
    imagename: Object,
    avatar: Object,
    title: String,
    userName: String,
    postDate: String,
    readTime: String,
};

const ArticleItem = (ItemProps) => {
    return(
        <Stack direction="column" 
            sx={{
                justifyContent: 'space-between',
                width: '100%',
                height: '425px',
                alignItems:'center',
        }}>
            <Stack direction="column" sx={{alignItems: 'center',}}>
                <img src={ItemProps.imagename} className="title-image"/>
                <p className="article-item-text">{ItemProps.title}</p>
            </Stack>
            
            
            <Stack direction="row" 
                sx={{
                    alignItems:'center', 
                    width:'100%', 
                    mb:'25px',
                    px:'22px'}}>
                <img src={ItemProps.avatar} className="avatar-image"/>
                <Stack direction="column" sx={{ml:'15px', width: '100%', height:'57px', justifyContent:'space-between'}}>
                    <p className="usr-name">{ItemProps.userName}</p>
                    <p className="time-text">{ItemProps.postDate} &nbsp; • &nbsp; {ItemProps.readTime} Read</p>
                </Stack>
            </Stack>
        </Stack>
    )
};

export default ArticleItem;