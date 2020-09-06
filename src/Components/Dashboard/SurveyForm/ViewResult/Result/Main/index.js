import React, { lazy, Suspense } from "react";

import FooterResult from "../Footer";

import "./style.scss";

const SingleTextBox = lazy(() => import("../Element/SingleTextBox"));
const MultiChoice = lazy(() => import("../Element/MultiChoice"));

const MainViewResult = () => {
  return (
    <div className='main-survey-view'>
      <Suspense fallback='loading...'>
        <SingleTextBox number='1' />
        <SingleTextBox number='2' />
        <MultiChoice number='3' />
        <MultiChoice number='4' />
      </Suspense>
      <FooterResult />
    </div>
  );
};

export default MainViewResult;
