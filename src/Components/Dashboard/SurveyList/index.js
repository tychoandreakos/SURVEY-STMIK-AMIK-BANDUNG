import React from 'react';

import Survey from '../Survey';

import './style.scss';

const SurveyList = () => {
  return (
    <div id='survey-list'>
      <h3 className="title">Recent Survey</h3>
      <div className='survey-list-survey'>
        <Survey />
        <Survey />
      </div>
    </div>
  );
};

export default SurveyList;
