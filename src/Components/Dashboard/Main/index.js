import React, { useMemo, useReducer, lazy, Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Loader from "../Loader";

import SectionOne from "../CreateSurvey/SectionOne";
import SurveyForm from "../SurveyForm/Main";
import Analytics from "../Analytics";
import SurveyStatus from "../SurveyStatus";
import Settings from "../Settings";

import { LOADER, MESSAGE, MESSAGE_PROMPT } from "../../../util/varTypes";
import { triggerMessage } from "../../../Store/redux/action";
import {
  CREATE_SURVEY,
  CREATE_SURVEY_FORM,
  EDIT_SURVEY_FORM,
  SETTINGS_DASHBOARD,
  ANALYTICS_DASHBOARD,
  SURVEY_STATUS_DASHBOARD,
  LOGIN,
} from "../../../util/route";

import "./style.scss";

const FailedMsg = lazy(() => import("../MessageWrapper/Failed"));
const SuccessMsg = lazy(() => import("../MessageWrapper/Success"));
const WarningMsg = lazy(() => import("../MessageWrapper/Warning"));

function Dashboard(props) {
  const { loader, message, msgPrompt, triggerMsg, match, history } = props;
  const dashboardStyle = useMemo(() => {
    if (loader) {
      return {
        overflowY: "hidden",
      };
    }
  }, [loader]);

  const isAuth = window.localStorage.getItem("isAuth");

  useEffect(() => {
    if (!isAuth) history.push(LOGIN);
  }, [history, isAuth]);

  const reducer = (_, action) => {
    switch (action.type) {
      case MESSAGE.WARNING:
        return <WarningMsg title={action.title} />;
      case MESSAGE.FAILED:
        return <FailedMsg title={action.title} />;
      case MESSAGE.SUCCESS:
        return <SuccessMsg title={action.title} />;
      default:
        return [];
    }
  };

  const [renderMessage, dispatchMessage] = useReducer(reducer, []);
  useEffect(() => {
    if (message && message.hasOwnProperty("type")) {
      const { type, title } = message;
      dispatchMessage({
        type,
        title,
      });
    }
  }, [message]);

  return (
    <div style={dashboardStyle} id='dashboard-survey'>
      <section id='sidebar-wrapper'>
        <Sidebar />
      </section>
      <section id='main'>
        <Switch>
          <Route path={match.path} exact component={Content} />
          <Route path={CREATE_SURVEY} exact component={SectionOne} />
          <Route path={CREATE_SURVEY_FORM} component={SurveyForm} />
          <Route path={EDIT_SURVEY_FORM} component={SurveyForm} />
          <Route path={SURVEY_STATUS_DASHBOARD} component={SurveyStatus} />
          <Route path={ANALYTICS_DASHBOARD} component={Analytics} />
          <Route path={SETTINGS_DASHBOARD} component={Settings} />
        </Switch>
        {loader ? <Loader /> : undefined}
        <Suspense fallback={"loading..."}>{renderMessage}</Suspense>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loader: state[LOADER],
    message: state[MESSAGE.STATUS],
    msgPrompt: state[MESSAGE_PROMPT],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    triggerMsg: () => dispatch(triggerMessage()),
  };
};

const DashboardJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

export default DashboardJoinRedux;
