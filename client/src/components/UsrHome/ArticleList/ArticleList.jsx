import React from 'react';
import { Stack } from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import ArticleItem from './ArticleItems/ArticleItem';
import ArticleTitle from './ArticleTitle/ArticleTitle';
import Newsletter from './Newsletter/Newsletter';
import images from '../../../constants/images';

import './ArticleList.css';

const AlistTheme = createTheme({
    palette: {
      primary: {
        main: '#DECDB4',
      },

      secondary: {
        main: '#6246EA',
      },
      
      contrastThreshold: 3,
      tonalOffset: 0.2,
    },
});

const ArticleList = () => {
  return (
    <ThemeProvider theme={AlistTheme}>
        <Stack direction="column" spacing={10} id="article-list" 
              sx={{mx:'94px', justifyContent: 'space-between'}}
        >
            <Stack direction="column" spacing={4}>
              <ArticleTitle title="CSS" linkTo="/CSSPage"/>
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
              <ArticleTitle title="JavaScript" linkTo="/JSPage"/>
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
              <ArticleTitle title="React JS" linkTo="/ReactPage"/>
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
        <Newsletter/>
    </ThemeProvider>
  )
}

export default ArticleList;