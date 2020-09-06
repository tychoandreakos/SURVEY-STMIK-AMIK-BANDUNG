import React, { lazy, Suspense, useEffect } from "react";
import { connect } from "react-redux";

import FooterResult from "../Footer";

import "./style.scss";
import {
  SURVEY_FORM_QUESTION,
  SURVEY_FORM_BUILDER,
  TYPE_QUESTION,
} from "../../../../../../util/varTypes";

const SingleTextBox = lazy(() => import("../Element/SingleTextBox"));
const MultiChoice = lazy(() => import("../Element/MultiChoice"));

const MainViewResult = (props) => {
  const { surveyList } = props;

  useEffect(() => console.log(surveyList), []);

  const renderEl = surveyList.map((item, index) => {
    const number = index + 1;
    switch (item.type) {
      case TYPE_QUESTION.SHORT:
        return (
          <SingleTextBox key={item._id} title={item.title} number={number} />
        );
      case TYPE_QUESTION.MULTIPLE:
        return (
          <MultiChoice
            key={item._id}
            title={item.title}
            data={item.item}
            number={number}
          />
        );
    }
  });

  return (
    <div className='main-survey-view'>
      <Suspense fallback='loading...'>{renderEl}</Suspense>
      <FooterResult />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    surveyList: state[SURVEY_FORM_BUILDER][SURVEY_FORM_QUESTION],
  };
};

const MainViewResultJoinRedux = connect(mapStateToProps)(MainViewResult);

export default MainViewResultJoinRedux;
