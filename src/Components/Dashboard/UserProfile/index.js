import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { connect } from "react-redux";
import { USER } from "../../../util/varTypes";

import "./style.scss";

const UserProfile = (props) => {
  const { authInfo } = props;
  const processingName = useCallback((val) => {
    const name = val.split(" ");
    if (name[1]) {
      return name[0].charAt(0) + name[1].charAt(0);
    } else {
      return val.slice(0, 2);
    }
  }, []);
  const peopleName = useMemo(() => {
    if (authInfo && authInfo.name) {
      return processingName(authInfo.name).toUpperCase();
    }
    return "RM";
  }, [authInfo]);
  return (
    <div className='user-profile'>
      <div className='profile'>{peopleName}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authInfo: state[USER],
  };
};

const UserProfileJoinRedux = connect(mapStateToProps)(UserProfile);

export default UserProfileJoinRedux;
