import React, { Suspense, lazy, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";

import { connect } from "react-redux";
import { fetchUser } from "../../../Store/redux/action";
import Cookies from "universal-cookie";
import "./style.scss";
import { HOME_DASHBOARD } from "../../../util/route";

const Header = lazy(() => import("../Header"));
const Welcome = lazy(() => import("../Welcome"));
const SurveyList = lazy(() => import("../SurveyList"));

const Content = (props) => {
  const { fetchUser } = props;

  const _token = useMemo(() => {
    return new Cookies().get("_token");
  }, []);

  const _id = useMemo(() => {
    return window.localStorage.getItem("_id");
  }, []);

  useEffect(() => {
    if (_token) {
      console.log("welcome!");
    }
  }, [_token]);

  useEffect(() => {
    if (_id) {
      fetchUser({
        _id,
      });
    }
  }, [fetchUser, _id]);

  const header = useMemo(() => {
    return (
      <Helmet title={process.env.REACT_APP_NAME + " - Dashboard"}>
        <meta charSet='utf-8' />
        <link rel='canonical' href={process.env.REACT_APP_BASE_URL_API + HOME_DASHBOARD} />
      </Helmet>
    );
  }, []);

  return (
    <div id='content-dashboard'>
      {header}
      <Suspense fallback='loading...'>
        <Header />
        <Welcome />
        <SurveyList />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (item) => dispatch(fetchUser(item)),
  };
};

const ContentJoinRedux = connect(null, mapDispatchToProps)(Content);

export default ContentJoinRedux;
