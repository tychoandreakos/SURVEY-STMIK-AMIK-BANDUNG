import React, { lazy, Suspense, useState } from "react";
import { connect } from "react-redux";

import FooterResult from "../Footer";

import "./style.scss";
import {
  SURVEY_FORM_QUESTION,
  SURVEY_FORM_BUILDER,
  TYPE_QUESTION,
} from "../../../../../../util/varTypes";
import { useEffect } from "react";
const SingleTextBox = lazy(() => import("../Element/SingleTextBox"));
const MultiChoice = lazy(() => import("../Element/MultiChoice"));

const MainViewResult = (props) => {
  const { surveyList } = props;
  const [survey, setSurvey] = useState(surveyList);

  const multiChoiceHandler = (_id, choiceId) => {
    const newVal = survey
      .find((item) => item._id === _id)
      .item.map((item) => {
        if (item.selected && item._id !== choiceId) item.selected = false;
        if (!item.selected && item._id === choiceId) item.selected = true;

        return item;
      });

    const newSurvey = survey.map((item) => {
      if (item._id === newVal._id) {
        item = newVal;
      }
      return item;
    });

    setSurvey(newSurvey);
  };

  const renderEl = survey.map((item, index) => {
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
            _id={item._id}
            title={item.title}
            data={item.item}
            number={number}
            multiChoiceHandler={multiChoiceHandler}
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
