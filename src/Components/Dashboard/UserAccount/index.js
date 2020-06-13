import React, { useState } from 'react';

import './style.scss';

import DropdownUser from './DropdownUser';

import { Icon } from '@iconify/react';
import caret from '@iconify/icons-mdi/caret-down';
import notif from '@iconify/icons-mdi/notifications';

const UserAccount = () => {
  const email = 'ranimulyanik14@gmail.com';
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
          {notifState ? <div className='notification'></div> : ''}
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

export default UserAccount;
