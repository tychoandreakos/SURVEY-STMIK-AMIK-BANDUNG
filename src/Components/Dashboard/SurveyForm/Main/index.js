import React, { useEffect, useCallback } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { LOADER, SURVEY_LIST } from "../../../../util/varTypes";

import HeaderFormSurvey from "../Header";
import ContentFormSurvey from "../Content";
import ViewResultSurvey from "../ViewResult";
import CollectSurvey from "../CollectSurvey";
import Summary from "../Summary";

import { triggerLoader } from "../../../../Store/redux/action";
import "./style.scss";

function MainSurveyForm(props) {
  useEffect(() => window.scrollTo(0, 0), []);
  const { match, edit, triggerLoader, loader } = props;

  const loaderControl = useCallback(() => {
    if (edit && edit.success && loader) {
      setTimeout(() => triggerLoader(), 500);
    }
  }, [edit, triggerLoader, loader]);

  useEffect(() => {
    loaderControl();
  }, [loaderControl]);

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
    edit: state[SURVEY_LIST.FETCH_SURVEY_LIST][SURVEY_LIST.EDIT_SUCCESS],
    loader: state[LOADER],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerLoader: () => dispatch(triggerLoader()),
  };
};

const mapRouterToPropsJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(mapRouterToProps);

export default mapRouterToPropsJoinRedux;
