import React, { Suspense, lazy, useEffect, useState } from "react";
import { useMemo } from "react";

import { connect, useSelector } from "react-redux";
import { fetchUser } from "../../../Store/redux/action";
import { HOME_DASHBOARD } from "../../../util/route";
import "./style.scss";

const Header = lazy(() => import("../Header"));
const Welcome = lazy(() => import("../Welcome"));
const SurveyList = lazy(() => import("../SurveyList"));

const Content = (props) => {
  const { fetchUser } = props;

  const _id = useMemo(() => {
    return window.localStorage.getItem("_id");
  }, []);

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
