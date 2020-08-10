import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Store/redux'
import { devToolsEnhancer } from 'redux-devtools-extension';

import Dashboard from './Components/Dashboard/Main';

const store = createStore(rootReducer, devToolsEnhancer())

function App() {
  return (
    <div id='app'>
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
