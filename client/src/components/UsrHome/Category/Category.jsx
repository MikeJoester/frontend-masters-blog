import React from 'react';
import './Category.css';
import { Stack } from '@mui/material';
import images from '../../../constants/images';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CtgTheme = createTheme({
  palette: {
    primary: {
      main: '#DECDB4',
    },
    
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

const Category = () => {
  return (
    <div className="category-main" id="usr-main-category">
      <ThemeProvider theme={CtgTheme}>
        <Stack direction="column" sx={{ml:'96px', mr:'101px', pt:'30px'}}>
          <div className="category-title-container">
          <a href="/CategoryPage"><Stack direction="row">
              <p className="category-header">Browse the Category</p>
              <div className="small-line"></div>
            </Stack></a>
            <a href="/CategoryPage"><Stack direction="row">
              <p className="category-header">See all categories</p>
              <ArrowForwardIosIcon color="primary" sx={{ mt:'5px',ml:'12px'}}/>
            </Stack></a>
          </div>

          <Stack direction="row" sx={{mt:'53px', justifyContent: 'space-between'}}>
          <a href="#"><Stack direction="column" 
            sx={{
              width: '220px', 
              height: '220px', 
              alignItems: 'center',
              justifyContent: 'space-between'}
            }>
              <img className="category-logo" src={images.csslogo}></img>
              <p className="category-header">CSS</p>
            </Stack></a>

            <a href="#"><Stack direction="column" 
            sx={{
              width: '220px', 
              height: '220px', 
              alignItems: 'center',
              justifyContent: 'space-between'}
            }>
              <img className="category-logo" src={images.jslogo}></img>
              <p className="category-header">JavaScript</p>
            </Stack></a>

            <a href="#"><Stack direction="column" 
            sx={{
              width: '220px', 
              height: '220px', 
              alignItems: 'center',
              justifyContent: 'space-between'}
            }>
              <img className="category-logo" src={images.twlogo}></img>
              <p className="category-header">Tailwind</p>
            </Stack></a>

            <a href="#"><Stack direction="column" 
            sx={{
              width: '220px', 
              height: '220px', 
              alignItems: 'center',
              justifyContent: 'space-between'}
            }>
              <img className="category-logo" src={images.vuelogo}></img>
              <p className="category-header">Vue JS</p>
            </Stack></a>

            <a href="#"><Stack direction="column" 
            sx={{
              width: '220px', 
              height: '220px', 
              alignItems: 'center',
              justifyContent: 'space-between'}
            }>
              <img className="category-logo" src={images.reactlogo}></img>
              <p className="category-header">React</p>
            </Stack></a>
          </Stack>
          
        </Stack>
      </ThemeProvider>
    </div>
  )
};

export default Category;