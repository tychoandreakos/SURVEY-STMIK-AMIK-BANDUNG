import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Content from '../Content';

import SectionOne from '../CreateSurvey/SectionOne';
// import SurveyForm from '../SurveyForm/Main';

import './style.scss';

function Dashboard() {
  return (
    <div id='dashboard-survey'>
      <section id='sidebar-wrapper'>
        <Sidebar />
      </section>
      <section id='main'>
        <Switch>
          <Route path="/" exact component={Content} />
          <Route path="/create" component={SectionOne} />
        </Switch>
      </section>
    </div>
  );
}


export default Dashboard;
