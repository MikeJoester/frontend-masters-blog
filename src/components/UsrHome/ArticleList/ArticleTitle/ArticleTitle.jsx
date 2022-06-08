import React from 'react';
import { Stack } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import './ArticleTitle.css';

const titleprop = {
    title: String,
};

const ArticleTitle = (titleprop) => {
  return (
    <Stack direction="row" sx={{justifyContent: 'space-between'}}>
            <a href="#" className="at-link"><Stack direction="row">
            <p className="category-header">{titleprop.title}</p>
            <div className="at-small-line"></div>
            </Stack></a>
            <a href="#" className="at-link"><Stack direction="row">
            <p className="category-header">See all articles</p>
            <ArrowForwardIosIcon color="primary" sx={{ mt:'5px',ml:'12px'}}/>
            </Stack></a>
    </Stack>
  )
}

export default ArticleTitle;