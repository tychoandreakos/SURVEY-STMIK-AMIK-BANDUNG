import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { SURVEY_LIST } from "../../../../util/varTypes";

import HeaderFormSurvey from "../Header";
import ContentFormSurvey from "../Content";
import ViewResultSurvey from "../ViewResult";
import CollectSurvey from "../CollectSurvey";
import Summary from "../Summary";

import "./style.scss";

function MainSurveyForm(props) {
  useEffect(() => window.scrollTo(0, 0), []);
  const { match, history, success, failed } = props;

  useEffect(() => {
    if (success && success.success) {
      history.push("/");
    }

    if (failed && !failed.success) {
      console.log(failed);
    }
  }, [success, failed]);

  return (
    <div className='main-survey'>
      <HeaderFormSurvey />
      <Switch>
        <Route path={`${match.path}/`} exact component={ContentFormSurvey} />
        <Route path={`${match.path}/view`} component={ViewResultSurvey} />
        <Route path={`${match.path}/collect`} component={CollectSurvey} />
        <Route path={`${match.path}/summary`} component={Summary} />
      </Switch>
    </div>
  );
}

const mapRouterToProps = withRouter(MainSurveyForm);

const mapStateToProps = (state) => {
  return {
    success: state[SURVEY_LIST.FETCH_SURVEY_LIST][SURVEY_LIST.SURVEY_SUCCESS],
    failed: state[SURVEY_LIST.FETCH_SURVEY_LIST][SURVEY_LIST.SURVEY_ERROR],
  };
};

const mapRouterToPropsJoinRedux = connect(mapStateToProps)(mapRouterToProps);

export default mapRouterToPropsJoinRedux;
