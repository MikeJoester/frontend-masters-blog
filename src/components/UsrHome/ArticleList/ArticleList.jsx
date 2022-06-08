import React from 'react';
import { Stack } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import ArticleItem from './ArticleItems/ArticleItem';
import ArticleTitle from './ArticleTitle/ArticleTitle';
import images from '../../../constants/images';

import './ArticleList.css';

const AlistTheme = createTheme({
    palette: {
      primary: {
        main: '#DECDB4',
      },
      
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
});

const ArticleList = () => {
  return (
    <ThemeProvider theme={AlistTheme}>
        <Stack direction="column" spacing={10} sx={{mx:'94px', mt:'80px'}}>
            <Stack direction="column" spacing={4}>
              <ArticleTitle title="Featured Article"/>
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
    </ThemeProvider>
  )
}

export default ArticleList;