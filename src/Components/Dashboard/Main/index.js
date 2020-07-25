import React from 'react';

import Sidebar from '../Sidebar';
// import Content from '../Content';

// import Content from '../CreateSurvey/SectionOne';
import SurveyForm from '../SurveyForm/Main';

import './style.scss';

function Dashboard() {
  return (
    <div id='dashboard-survey'>
      <section id='sidebar-wrapper'>
        <Sidebar />
      </section>
      <section id='main'>
        <SurveyForm />
      </section>
    </div>
  );
}

export default Dashboard;
