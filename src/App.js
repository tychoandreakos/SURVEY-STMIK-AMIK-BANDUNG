import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from './Components/Dashboard/Main';

function App() {
  return (
    <div id='app'>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
