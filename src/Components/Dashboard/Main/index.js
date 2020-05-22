import React from 'react';

import Sidebar from '../Sidebar';
import Content from '../Content';

import './style.scss';

function Dashboard() {
  return (
    <div id='dashboard-survey'>
      <section id='sidebar-wrapper'>
        <Sidebar />
      </section>
      <section id='main'>
        <Content />
      </section>
    </div>
  );
}

export default Dashboard;
