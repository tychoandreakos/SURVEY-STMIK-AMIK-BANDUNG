import React, { useEffect } from "react";
import { connect } from "react-redux";

import Survey from "../Survey";
import { fetchSurvey } from "../../../Store/redux/action";

import "./style.scss";
import { SURVEY_LIST } from "../../../util/varTypes";
const SurveyList = (props) => {
  const { fetchSurvey, getSurvey } = props;

  useEffect(() => {
    fetchSurvey();
  }, [fetchSurvey]);

  let renderSurvey;
  if (getSurvey && getSurvey.data) {
    renderSurvey = getSurvey.data.map((item) => (
      <Survey
        key={item._id}
        _id={item._id}
        title={item.title}
        logo={item.logo}
        status={item.status}
        createdAt={item.createdAt}
        modifiedAt={item.updatedAt}
      />
    ));
  }

  return (
    <div id='survey-list'>
      <div className='header-survey-list'>
        <h3 className='title'>Recent Survey</h3>
        <span>see all 5 surveys</span>
      </div>
      <div className='survey-list-survey'>{renderSurvey}</div>
      <div className='count'>
        <span>Showing 2 of 2 total surveys. </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    getSurvey:
      state[SURVEY_LIST.FETCH_SURVEY_LIST][SURVEY_LIST.SURVEY_LIST_SUCCESS],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSurvey: () => dispatch(fetchSurvey()),
  };
};

const SurveyListJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyList);

export default SurveyListJoinRedux;
