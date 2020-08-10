import React, { Suspense, lazy } from 'react';

import './style.scss';

const Header = lazy(() => import("../Header"))
const Welcome = lazy(() => import("../Welcome"))
const SurveyList = lazy(() => import("../SurveyList"))


const Content = () => {
  return (
    <div id='content-dashboard'>
      <Suspense fallback="loading...">
        <Header />
        <Welcome />
        <SurveyList />
      </Suspense>
    </div>
  );
};

export default Content;
