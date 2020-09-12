import React, { useMemo, useState, useEffect, useCallback } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Loader from "../Loader";
import Message from "../Message";

import SectionOne from "../CreateSurvey/SectionOne";
import SurveyForm from "../SurveyForm/Main";

import { LOADER, MESSAGE_PROMPT } from "../../../util/varTypes";
import { triggerMessage } from "../../../Store/redux/action";

import "./style.scss";

function Dashboard(props) {
  const { loader, messagePrompt, xo } = props;
  const [msg, setMsg] = useState(true);
  const dashboardStyle = useMemo(() => {
    if (loader) {
      return {
        overflowY: "hidden",
      };
    }
  }, [loader]);

  const msgCallback = useCallback(() => {
    if (messagePrompt) {
      setTimeout(() => {
        setMsg(false);
      }, 500);
    } else {
      setTimeout(() => {
        setMsg(true);
      }, 500);
    }
  }, [messagePrompt]);

  useEffect(() => {
    msgCallback();
  }, [msgCallback]);

  return (
    <div style={dashboardStyle} id='dashboard-survey'>
      <section id='sidebar-wrapper'>
        <Sidebar />
      </section>
      <section id='main'>
        <button onClick={xo}>damn me</button>
        <Switch>
          <Route path='/' exact component={Content} />
          <Route path='/create' exact component={SectionOne} />
          <Route path='/create/survey-form' component={SurveyForm} />
          <Route path='/edit/survey-form' component={SurveyForm} />
        </Switch>
        {loader ? <Loader /> : undefined}
        <Message
          show={msg}
          background='#5661b6'
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
        officiis.'
        />
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loader: state[LOADER],
    messagePrompt: state[MESSAGE_PROMPT],
  };
};

const x = (dispatch) => {
  return {
    xo: () => dispatch(triggerMessage()),
  };
};

const DashboardJoinRedux = connect(mapStateToProps, x)(Dashboard);

export default DashboardJoinRedux;
