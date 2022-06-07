import React from 'react';
import Box from '@mui/material/Box';
import './Category.css';
import { Stack } from '@mui/material';

const Category = () => {
  return (
    <div className="category-main">
      <Stack direction="row" sx={{ml:'96px', mr:'101px'}}>
        <div className="category-title-container">
          <p className="category-header">Browse the Category</p>
          <p className="category-header">See all categories</p>
        </div>
      </Stack>
    </div>
  )
};

export default Category;