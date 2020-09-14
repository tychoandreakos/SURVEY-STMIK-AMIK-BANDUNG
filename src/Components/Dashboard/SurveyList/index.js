import React, { useEffect, useState, useRef, useMemo } from "react";
import { connect } from "react-redux";

import Survey from "../Survey";
import Loader from "react-loading";

import { cancelEditClean, fetchSurvey } from "../../../Store/redux/action";
import { SURVEY_LIST } from "../../../util/varTypes";

import "./style.scss";
import { useCallback } from "react";
const SurveyList = (props) => {
  const { fetchSurvey, getSurvey, cancelEditClean } = props;
  const [loader, setLoader] = useState(false);

  const getSurveyCheck = useMemo(() => {
    return getSurvey && getSurvey.data;
  }, [getSurvey]);

  const cancelEditCleanCallback = useCallback(() => {
    cancelEditClean();
    console.log("damn");
  }, [cancelEditClean]);

  useEffect(() => {
    if (!getSurveyCheck) {
      setLoader(true);
      fetchSurvey();
    }
    cancelEditCleanCallback();
  }, [fetchSurvey, getSurveyCheck, cancelEditCleanCallback]);

  let renderSurvey;
  if (getSurveyCheck) {
    renderSurvey = getSurvey.data.map((item) => (
      <Survey
        key={item._id}
        _id={item._id}
        title={item.title}
        logo={item.logo}
        status={item.status}
        createdAt={item.createdAt}
        modifiedAt={item.updatedAt}
        totalQuestion={item.surveyForm.surveyQuestion.length}
      />
    ));
  }

  useEffect(() => {
    if (renderSurvey && renderSurvey.length >= 1) {
      setTimeout(() => {
        setLoader(false);
      }, 1000);
    }
  }, [renderSurvey]);

  const loaderRef = useRef({
    type: "spin",
    color: "#5661b6",
    height: "3.5%",
    width: "3.5%",
  });

  const loaderState = useMemo(() => {
    const { type, color, height, width } = loaderRef.current;
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

  let content;
  if (loader) {
    content = loaderEl;
  } else {
    content = (
      <>
        <div className='survey-list-survey'>{renderSurvey}</div>
        <div className='count'>
          <span>Showing 2 of {getSurvey.total} total surveys. </span>
        </div>
      </>
    );
  }

  return (
    <div id='survey-list'>
      <div className='header-survey-list'>
        <h3 className='title'>Recent Survey</h3>
        <span>see all 5 surveys</span>
      </div>
      {content}
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
    cancelEditClean: () => dispatch(cancelEditClean()),
  };
};

const SurveyListJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(SurveyList);

export default SurveyListJoinRedux;
