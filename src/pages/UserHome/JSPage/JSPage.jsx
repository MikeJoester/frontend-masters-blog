import React from 'react';
import {Footer} from '../../../components';
import images from '../../../constants/images';
import ArticleItem from '../../../components/UsrHome/ArticleList/ArticleItems/ArticleItem';
import { Stack } from '@mui/material';
import './JSPage.css';

const JSPage = () => {
  return (
    <div className="css-page-container">
        <div className="category-page-contents">
        <Stack direction="column" spacing={10} sx={{ml:'96px', mr:'101px', pt:'30px'}}>
          <div className="category-title-container">
          <a href="/UserHome"><Stack direction="row">
              <p className="category-header">JavaScript</p>
              <div className="small-line"></div>
            </Stack></a>
          </div>

          <Stack direction="column" spacing={4}>
            <Stack spacing={2} direction="row" sx={{alignItems:'center'}}>
              <ArticleItem
                imagename={images.article1}
                title="Fundamental Of Javascript"
                avatar={images.avatar1}
                userName="Dasteen"
                postDate="Jan 10, 2022"
                readTime="3 Min"
              />

              <ArticleItem
                imagename={images.article1}
                title="Fundamental Of Javascript"
                avatar={images.avatar1}
                userName="Dasteen"
                postDate="Jan 10, 2022"
                readTime="3 Min"
              />

              <ArticleItem
                imagename={images.article1}
                title="Fundamental Of Javascript"
                avatar={images.avatar1}
                userName="Dasteen"
                postDate="Jan 10, 2022"
                readTime="3 Min"
              />

              <ArticleItem
                imagename={images.article1}
                title="Fundamental Of Javascript"
                avatar={images.avatar1}
                userName="Dasteen"
                postDate="Jan 10, 2022"
                readTime="3 Min"
              />
              
            </Stack>
          </Stack>
          
          <Stack direction="column" spacing={4}>
            <Stack spacing={2} direction="row" sx={{alignItems:'center'}}>
              <ArticleItem
                imagename={images.article1}
                title="Fundamental Of Javascript"
                avatar={images.avatar1}
                userName="Dasteen"
                postDate="Jan 10, 2022"
                readTime="3 Min"
              />

              <ArticleItem
                imagename={images.article1}
                title="Fundamental Of Javascript"
                avatar={images.avatar1}
                userName="Dasteen"
                postDate="Jan 10, 2022"
                readTime="3 Min"
              />

              <ArticleItem
                imagename={images.article1}
                title="Fundamental Of Javascript"
                avatar={images.avatar1}
                userName="Dasteen"
                postDate="Jan 10, 2022"
                readTime="3 Min"
              />

              <ArticleItem
                imagename={images.article1}
                title="Fundamental Of Javascript"
                avatar={images.avatar1}
                userName="Dasteen"
                postDate="Jan 10, 2022"
                readTime="3 Min"
              />
              
            </Stack>
          </Stack>             
        </Stack>
        </div>
        <Footer/>
    </div>
  )
}

export default JSPage;