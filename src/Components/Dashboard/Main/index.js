import React, { useMemo, useReducer, lazy, Suspense, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Loader from "../Loader";

import SectionOne from "../CreateSurvey/SectionOne";
import SurveyForm from "../SurveyForm/Main";

import { LOADER, MESSAGE, MESSAGE_PROMPT } from "../../../util/varTypes";

import "./style.scss";
import { triggerLoader, triggerMessage } from "../../../Store/redux/action";

const FailedMsg = lazy(() => import("../MessageWrapper/Failed"));
const SuccessMsg = lazy(() => import("../MessageWrapper/Success"));
const WarningMsg = lazy(() => import("../MessageWrapper/Warning"));

function Dashboard(props) {
  const { loader, message, msgPrompt, triggerMsg } = props;
  const dashboardStyle = useMemo(() => {
    if (loader) {
      return {
        overflowY: "hidden",
      };
    }
  }, [loader]);

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
    <div style={dashboardStyle} id="dashboard-survey">
      <section id="sidebar-wrapper">
        <Sidebar />
      </section>
      <section id="main">
        <Switch>
          <Route path="/" exact component={Content} />
          <Route path="/create" exact component={SectionOne} />
          <Route path="/create/survey-form" component={SurveyForm} />
          <Route path="/edit/survey-form" component={SurveyForm} />
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
