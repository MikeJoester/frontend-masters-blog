import React from 'react';
import { Stack } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { createTheme, ThemeProvider} from '@mui/material/styles';

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
            <Stack direction="row" sx={{justifyContent: 'space-between'}}>
                <a href="#" className="al-link"><Stack direction="row">
                <p className="category-header">Browse the Category</p>
                <div className="small-line"></div>
                </Stack></a>
                <a href="#" className="al-link"><Stack direction="row">
                <p className="category-header">See all categories</p>
                <ArrowForwardIosIcon color="primary" sx={{ mt:'5px',ml:'12px'}}/>
                </Stack></a>
            </Stack>

            <Stack direction="row" sx={{justifyContent: 'space-between'}}>
                <a href="#" className="al-link"><Stack direction="row">
                <p className="category-header">Browse the Category</p>
                <div className="small-line"></div>
                </Stack></a>
                <a href="#" className="al-link"><Stack direction="row">
                <p className="category-header">See all categories</p>
                <ArrowForwardIosIcon color="primary" sx={{ mt:'5px',ml:'12px'}}/>
                </Stack></a>
            </Stack>
        </Stack>
    </ThemeProvider>
  )
}

export default ArticleList;