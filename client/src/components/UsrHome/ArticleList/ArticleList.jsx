import React from 'react';
import { Stack } from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import ArticleItem from './ArticleItems/ArticleItem';
import ArticleTitle from './ArticleTitle/ArticleTitle';
import Newsletter from './Newsletter/Newsletter';

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

const ArticleList = ({posts}) => {
  return (
    <ThemeProvider theme={AlistTheme}>
        <Stack direction="column" spacing={10} id="article-list" 
              sx={{ mx:'95px', justifyContent: 'space-between'}}
        >
          <ArticleTitle title="CSS" linkTo="/CSSPage"/> 
          <div className="article-item-container">
            {posts.map(p=>(
              <ArticleItem
              post={p}/>
            ))}
          </div>
        </Stack>
        <br/><br/><br/>
        <Stack direction="column" spacing={10} id="article-list" 
              sx={{ mx:'95px', justifyContent: 'space-between'}}
        >
          <ArticleTitle title="JavaScript" linkTo="/JSPage"/> 
          <div className="article-item-container">
            {posts.map(p=>(
              <ArticleItem
              post={p}/>
            ))}
          </div>
        </Stack>
        <br/><br/><br/>
        <Stack direction="column" spacing={10} id="article-list" 
              sx={{ mx:'95px', justifyContent: 'space-between'}}
        >
          <ArticleTitle title="React JS" linkTo="/ReactPage"/> 
          <div className="article-item-container">
            {posts.map(p=>(
              <ArticleItem
              post={p}/>
            ))}
          </div>
        </Stack>

        <Newsletter/>
    </ThemeProvider>
  )
}

export default ArticleList;