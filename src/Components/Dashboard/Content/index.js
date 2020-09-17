import React, { Suspense, lazy, useEffect } from "react";
import { useMemo } from "react";

import { connect } from "react-redux";
import { fetchUser } from "../../../Store/redux/action";
import Cookies from "universal-cookie";
import "./style.scss";

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
  return (
    <div id='content-dashboard'>
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
