import React, { useEffect, useMemo } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Device from "./Device";
import ResultWrapper from "./Result/ResultWrapper";

import "./style.scss";
import {
  SURVEY_FORM_BUILDER,
  SURVEY_FORM_QUESTION,
  SURVEY_HEADER,
  SURVEY_LOGO,
} from "../../../../util/varTypes";
import { CREATE_SURVEY_FORM } from "../../../../util/route";
import { Helmet } from "react-helmet";

const ViewResult = (props) => {
  const { surveyList, history, title, description, logo } = props;

  useEffect(() => {
    if (surveyList.length < 1) {
      history.push(CREATE_SURVEY_FORM);
    }
  }, [surveyList, history]);

  const styleLogo = useMemo(() => {
    if (logo) {
      const url = process.env.REACT_APP_BASE_URL_API + "/images/" + logo;
      return {
        background: "url('" + url + "')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      };
    }
  }, [logo]);

  const renderLogo = useMemo(() => {
    if (logo) {
      return <div style={styleLogo} className='logo'></div>;
    }
    return undefined;
  }, [styleLogo, logo]);

  const header = useMemo(() => {
    return (
      <Helmet title={process.env.REACT_APP_NAME + " - View Result"}>
        <meta charSet='utf-8' />
        <link rel='canonical' />
      </Helmet>
    );
  }, []);

  return (
    <div className='view-result'>
      <div className='content'>
        <div className='left'>
          {renderLogo}
          <div className='header'>
            <h3 className='title'>{title}</h3>
            <span className='description'>{description}</span>
          </div>
          <ResultWrapper />
        </div>
        <div className='right'></div>
      </div>
      <Device />
      {header}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    surveyList: state[SURVEY_FORM_BUILDER][SURVEY_FORM_QUESTION],
    title: state[SURVEY_FORM_BUILDER][SURVEY_HEADER.TITLE],
    description: state[SURVEY_FORM_BUILDER][SURVEY_HEADER.DESC],
    logo: state[SURVEY_FORM_BUILDER][SURVEY_LOGO],
  };
};

const mapWithRouterToProps = withRouter(ViewResult);
const ViewResultJoinRedux = connect(mapStateToProps)(mapWithRouterToProps);

export default ViewResultJoinRedux;
