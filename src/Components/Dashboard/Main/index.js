import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Loader from "../Loader";

import SectionOne from "../CreateSurvey/SectionOne";
import SurveyForm from "../SurveyForm/Main";

import { LOADER } from "../../../util/varTypes";

import "./style.scss";

function Dashboard(props) {
  const { loader } = props;
  return (
    <div id='dashboard-survey'>
      <section id='sidebar-wrapper'>
        <Sidebar />
      </section>
      <section id='main'>
        <Switch>
          <Route path='/' exact component={Content} />
          <Route path='/create' exact component={SectionOne} />
          <Route path='/create/survey-form' component={SurveyForm} />
        </Switch>
        {loader ? <Loader /> : undefined}
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loader: state[LOADER],
  };
};

const DashboardJoinRedux = connect(mapStateToProps)(Dashboard);

export default DashboardJoinRedux;
