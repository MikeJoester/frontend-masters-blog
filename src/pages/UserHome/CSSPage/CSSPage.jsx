import React from 'react';
import {Footer} from '../../../components';
import images from '../../../constants/images';
import { Stack } from '@mui/material';
import './CSSPage.css';

const CSSPage = () => {
  return (
    <div className="category-page-container">
        <div className="category-page-contents">
        <Stack direction="column" spacing={10} sx={{ml:'96px', mr:'101px', pt:'30px'}}>
          <div className="category-title-container">
          <a href="/UserHome"><Stack direction="row">
              <p className="category-header">Browse the Category</p>
              <div className="small-line"></div>
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
          
          <Stack direction="column" sx={{ width: '100%', alignItems: 'center'}}> 
            <a href="#"><Stack direction="column" 
              sx={{
                width: '220px', 
                height: '220px', 
                alignItems: 'center',
                justifyContent: 'space-between'}
              }>
                <img className="category-logo" src={images.angularlogo}></img>
                <p className="category-header">AngularJs</p>
              </Stack></a>
          </Stack>
        </Stack>
        </div>
        <Footer/>
    </div>
  )
}

export default CSSPage;