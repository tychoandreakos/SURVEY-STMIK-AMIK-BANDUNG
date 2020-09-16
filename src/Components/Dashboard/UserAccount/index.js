import React, { useState, useMemo } from "react";

import { connect } from "react-redux";
import DropdownUser from "./DropdownUser";
import { Icon } from "@iconify/react";
import caret from "@iconify/icons-mdi/caret-down";
import notif from "@iconify/icons-mdi/notifications";
import { USER } from "../../../util/varTypes";

import "./style.scss";

const UserAccount = (props) => {
  const { authInfo } = props;

  const email = useMemo(() => {
    console.log(authInfo);
    if (authInfo && authInfo.email) {
      return authInfo.email;
    }

    return "ranimulyanik14@gmail.com";
  }, [authInfo]);
  const notifState = true;

  const [userList, setUserList] = useState({
    showList: false,
  });

  const handleDropdownList = () => {
    setUserList({
      ...userList,
      showList: !userList.showList,
    });
  };

  return (
    <div className='user-account'>
      <div className='notif'>
        <div className='notif-wrapper'>
          <Icon icon={notif} />
          {notifState ? <div className='notification'></div> : ""}
        </div>
      </div>
      <div
        className='email'
        onMouseLeave={handleDropdownList}
        onMouseEnter={handleDropdownList}
      >
        <h3>{email}</h3>
        <Icon icon={caret} />
        <DropdownUser open={userList.showList} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authInfo: state[USER],
  };
};

const UserAccountJoinRedux = connect(mapStateToProps)(UserAccount);

export default UserAccountJoinRedux;
