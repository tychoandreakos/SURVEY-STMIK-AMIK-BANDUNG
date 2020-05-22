import React from 'react';

import Header from '../Header';
import Welcome from '../Welcome';
import SurveyList from '../SurveyList';

import './style.scss';

const Content = () => {
  return (
    <div id='content-dashboard'>
      <Header />
      <Welcome />
      <SurveyList />
    </div>
  );
};

export default Content;
