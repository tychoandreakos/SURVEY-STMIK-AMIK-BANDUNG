import React, { lazy, Suspense, useState, useRef, useMemo } from "react";

import { connect } from "react-redux";
import FooterResult from "../Footer";
import Loader from "react-loading";
import {
  SURVEY_FORM_QUESTION,
  SURVEY_FORM_BUILDER,
  TYPE_QUESTION,
} from "../../../../../../util/varTypes";

import "./style.scss";
import { useEffect } from "react";

const SingleTextBox = lazy(() => import("../Element/SingleTextBox"));
const MultiChoice = lazy(() => import("../Element/MultiChoice"));

const MainViewResult = (props) => {
  const { surveyList } = props;
  const [survey, setSurvey] = useState(surveyList);
  const [loader, setLoader] = useState(true);

  const loaderRef = useRef({
    type: "spin",
    color: "#5661b6",
    height: "3.5%",
    width: "3.5%",
  });

  const loaderState = useMemo(() => {
    const { type, color, height, width } = loaderRef;
    return {
      type,
      color,
      height,
      width,
    };
  }, [loaderRef]);

  const loaderEl = (
    <div className='loading'>
      <Loader
        type={loaderState.type}
        color={loaderState.color}
        height={loaderState.height}
        width={loaderState.width}
      />
    </div>
  );

  useEffect(() => {
    if (survey && survey.length > 1) setTimeout(() => setLoader(false), 1000);
  }, [survey]);

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
      default:
        return item;
    }
  });

  return (
    <div className='main-survey-view'>
      <Suspense fallback={loaderEl}>{loader ? loaderEl : renderEl}</Suspense>
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
