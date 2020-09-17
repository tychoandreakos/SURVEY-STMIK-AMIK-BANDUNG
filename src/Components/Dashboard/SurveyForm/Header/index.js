import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  SURVEY_TITLE,
  SURVEY_FORM_BUILDER,
  SURVEY_FORM_QUESTION,
} from "../../../../util/varTypes";
import { withRouter } from "react-router-dom";

import Icon from "@iconify/react";
import ArrowLeft from "@iconify/icons-mdi/chevron-left";
import Eye from "@iconify/icons-mdi/eye";
import TextArea from "react-expanding-textarea";

import UserAcccount from "../../UserAccount";
import BreadcrumbHeader from "../Breadcrumbs";

import "./style.scss";
import { setTitleSurvey } from "../../../../Store/redux/action";
import {
  CREATE_SURVEY,
  HOME_DASHBOARD,
  VIEW_RESULT,
} from "../../../../util/route";

const SurveyHeaderForm = (props) => {
  const [headTitle, setHeadTitle] = useState("");
  const [viewResult, setViewResult] = useState(false);
  const { title, history, match, addTitle, surveyList } = props;
  useEffect(() => {
    const urlChecker = match.url.split("/")[1];

    if (title) {
      const capitalizeTitle = title.charAt(0).toUpperCase() + title.slice(1);
      setHeadTitle(capitalizeTitle);
    }

    if (!title && urlChecker === "create") {
      history.push(CREATE_SURVEY);
    }

    if (!title && urlChecker === "edit") {
      history.push(HOME_DASHBOARD);
    }
  }, [title, history, match]);
  useEffect(() => {}, []);
  useEffect(() => {
    if (headTitle.length > 5 && !viewResult && surveyList.length >= 3)
      setViewResult(true);
    if (headTitle.length < 5 && viewResult && surveyList.length <= 3)
      setViewResult(false);
  }, [headTitle, viewResult, surveyList]);
  const placeholderText = "Survey Title";
  const headTitleHandler = (e) => {
    setHeadTitle(e.target.value);
  };

  const enterHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const titleSave = () => {
    if (headTitle.length >= 3) {
      addTitle(headTitle);
    }
  };

  const goBack = () => {
    history.goBack();
  };

  const viewResultHandler = () => {
    if (viewResult) {
      history.push(`${match.path}/view`);
    }
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
            onKeyDown={enterHandler}
            value={headTitle}
            onChange={headTitleHandler}
            onBlur={titleSave}
            placeholder={placeholderText}
          />
        </h2>
        <button
          disabled={!viewResult}
          onClick={viewResultHandler}
          className='btn-result'
        >
          <div className='icon'>
            <Icon icon={Eye} />
          </div>
          <span>View Result</span>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    title: state[SURVEY_FORM_BUILDER][SURVEY_TITLE],
    surveyList: state[SURVEY_FORM_BUILDER][SURVEY_FORM_QUESTION],
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
