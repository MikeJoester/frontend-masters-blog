import React from 'react';
import {Category, ArticleList, Footer} from '../../components';
import './UserHome.css';
import Button from '@mui/material/Button';

const UserHome = () => {
  return (
    <div>
      <div className="user-home-main">
        <div className="user-home-gradient-container">
          <div className="user-home-main-container">
              <div className="user-home-text-container">
                  <h1>Welcome To</h1>
                  <h1>FrontEndMaster -</h1>
                  <h1>Front End Dev</h1>
                  <div className="text-container-description">
                      <div className="vertical-line"/>
                      <p>On this blog I share tips and tricks, frameworks, projects, tutorials, etc Make sure you subscribe to get the latest updates</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div className="category-bg">
        <Category/>
        <ArticleList/>
      </div>
      <Footer/>
    </div>
    
  )
}

export default UserHome