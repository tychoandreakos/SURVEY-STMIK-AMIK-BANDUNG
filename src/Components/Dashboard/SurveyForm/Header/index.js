import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { SURVEY_TITLE, SURVEY_FORM_BUILDER } from "../../../../util/varTypes";
import { withRouter } from "react-router-dom";

import Icon from "@iconify/react";
import ArrowLeft from "@iconify/icons-mdi/chevron-left";
import Eye from "@iconify/icons-mdi/eye";
import TextArea from "react-expanding-textarea";

import UserAcccount from "../../UserAccount";
import BreadcrumbHeader from "../Breadcrumbs";

import "./style.scss";
import { setTitleSurvey } from "../../../../Store/redux/action";

const SurveyHeaderForm = (props) => {
  const [headTitle, setHeadTitle] = useState("");
  const { title, history, match, addTitle } = props;
  useEffect(() => {
    if (title) setHeadTitle(title);
    // else history.push('/create')
  }, [title]);
  const placeholderText = "Survey Title";
  const headTitleHandler = (e) => {
    setHeadTitle(e.target.value);
  };

  const titleSave = () => {
    addTitle(headTitle);
  };

  const goBack = () => {
    history.goBack();
  };

  const viewResultHandler = () => {
    history.push("/create/survey-form/view");
  };

  return (
    <div className='header-survey-form'>
      <div className='top-header'>
        <BreadcrumbHeader match={match} history={history} />
        <UserAcccount />
      </div>
      <div className='bottom-header'>
        <div onClick={goBack} className='back-btn'>
          <div className='icon'>
            <Icon icon={ArrowLeft} />
          </div>
          <span>create survey</span>
        </div>
        <h2 className='title'>
          <TextArea
            value={headTitle}
            onChange={headTitleHandler}
            onBlur={titleSave}
            placeholder={placeholderText}
          />
        </h2>
        <div onClick={viewResultHandler} className='btn-result'>
          <div className='icon'>
            <Icon icon={Eye} />
          </div>
          <span>View Result</span>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state[SURVEY_FORM_BUILDER][SURVEY_TITLE],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTitle: (title) => dispatch(setTitleSurvey(title)),
  };
};

const SurveyHeaderFormWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SurveyHeaderForm));

export default SurveyHeaderFormWithRedux;
