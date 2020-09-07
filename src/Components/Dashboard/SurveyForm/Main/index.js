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
import { cleanSurveyState } from "../../../../Store/redux/action";

function MainSurveyForm(props) {
  useEffect(() => window.scrollTo(0, 0), []);
  const { match, history, success, failed, cleanState } = props;

  useEffect(() => {
    if (success && success.success) {
      cleanState();
      history.push("/");
    }

    if (failed && !failed.success) {
      console.log(failed);
    }
  }, [success, failed, cleanState]);

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

const mapDispatchToProps = (dispatch) => {
  return {
    cleanState: () => dispatch(cleanSurveyState()),
  };
};

const mapRouterToPropsJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(mapRouterToProps);

export default mapRouterToPropsJoinRedux;
