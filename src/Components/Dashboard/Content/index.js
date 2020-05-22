import React from 'react';

import Header from '../Header';
import Welcome from '../Welcome';
import SurveyList from '../SurveyList';

const Content = () => {
  return (
    <div id='content'>
      <Header />
      <Welcome />
      <SurveyList />
    </div>
  );
};

export default Content;
