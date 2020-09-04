import React from "react";
import { connect } from "react-redux";

import Survey from "../Survey";
import { fetchSurvey } from "../../../Store/redux/action";

import "./style.scss";
import { useState } from "react";

const SurveyList = (props) => {
  const { fetchSurvey } = props;

  useState(() => {
    const x = fetchSurvey();
  }, []);

  return (
    <div id='survey-list'>
      <div className='header-survey-list'>
        <h3 className='title'>Recent Survey</h3>
        <span>see all 5 surveys</span>
      </div>
      <div className='survey-list-survey'>
        <Survey />
      </div>
      <div className='count'>
        <span>Showing 2 of 2 total surveys. </span>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSurvey: () => dispatch(fetchSurvey()),
  };
};

const SurveyListJoinRedux = connect(null, mapDispatchToProps)(SurveyList);

export default SurveyListJoinRedux;
