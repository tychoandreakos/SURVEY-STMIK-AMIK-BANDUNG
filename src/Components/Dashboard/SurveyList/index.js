import React from "react";
import { connect } from "react-redux";

import Survey from "../Survey";
import { fetchSurvey } from "../../../Store/redux/action";

import "./style.scss";
import { useState } from "react";

const SurveyList = (props) => {
  const { fetchSurvey } = props;

  useState(() => {
    fetchSurvey();
  }, []);

  return (
    <div id='survey-list'>
      <h3 className='title'>Recent Survey</h3>
      <div className='survey-list-survey'>
        <Survey />
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
