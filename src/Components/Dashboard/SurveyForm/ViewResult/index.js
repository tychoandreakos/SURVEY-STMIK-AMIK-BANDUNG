import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Device from "./Device";
import ResultWrapper from "./Result/ResultWrapper";

import "./style.scss";
import {
  SURVEY_FORM_BUILDER,
  SURVEY_FORM_QUESTION,
  SURVEY_HEADER,
} from "../../../../util/varTypes";
import { useEffect } from "react";

const ViewResult = (props) => {
  const { surveyList, history, title, description } = props;

  useEffect(() => {
    if (surveyList.length < 1) {
      history.push("/create/survey-form");
    }
  }, []);

  return (
    <div className='view-result'>
      <div className='content'>
        <div className='left'>
          <div className='logo'></div>
          <div className='header'>
            <h3 className='title'>{title}</h3>
            <span className='description'>{description}</span>
          </div>
          <ResultWrapper />
        </div>
        <div className='right'></div>
      </div>
      <Device />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    surveyList: state[SURVEY_FORM_BUILDER][SURVEY_FORM_QUESTION],
    title: state[SURVEY_FORM_BUILDER][SURVEY_HEADER.TITLE],
    description: state[SURVEY_FORM_BUILDER][SURVEY_HEADER.DESC],
  };
};

const mapWithRouterToProps = withRouter(ViewResult);
const ViewResultJoinRedux = connect(mapStateToProps)(mapWithRouterToProps);

export default ViewResultJoinRedux;
