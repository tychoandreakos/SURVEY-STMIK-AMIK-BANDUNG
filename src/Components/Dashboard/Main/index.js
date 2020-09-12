import React, { useMemo } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Sidebar from "../Sidebar";
import Content from "../Content";
import Loader from "../Loader";
import Message from "../MessageWrapper/Success";

import SectionOne from "../CreateSurvey/SectionOne";
import SurveyForm from "../SurveyForm/Main";

import { LOADER } from "../../../util/varTypes";
import { triggerMessage } from "../../../Store/redux/action";

import "./style.scss";

function Dashboard(props) {
  const { loader, xo } = props;
  const dashboardStyle = useMemo(() => {
    if (loader) {
      return {
        overflowY: "hidden",
      };
    }
  }, [loader]);

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
  };
};

const x = (dispatch) => {
  return {
    xo: () => dispatch(triggerMessage()),
  };
};

const DashboardJoinRedux = connect(mapStateToProps, x)(Dashboard);

export default DashboardJoinRedux;
