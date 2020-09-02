import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Store/redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createMiddlewareSaga from "redux-saga";
import rootSaga from "./Store/Sagas";

import Dashboard from "./Components/Dashboard/Main";

const sagaMiddleware = createMiddlewareSaga();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

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
