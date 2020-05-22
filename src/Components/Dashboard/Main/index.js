import React from 'react';

import Sidebar from '../Sidebar';

import './style.scss';

function Dashboard() {
  return (
    <div id='dashboard-survey'>
      <section id='sidebar-wrapper'>
        <Sidebar />
      </section>
      <section id='main'>
        <h3>Main</h3>
      </section>
    </div>
  );
}

export default Dashboard;
