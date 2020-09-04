import React, { lazy, Suspense } from "react";

const SingleTextBox = lazy(() => import("../Element/SingleTextBox"));

const MainViewResult = () => {
  return (
    <div className='main-survey-view'>
      <Suspense fallback='loading...'>
        <SingleTextBox number='1' />
        <SingleTextBox number='2' />
      </Suspense>
    </div>
  );
};

export default MainViewResult;
