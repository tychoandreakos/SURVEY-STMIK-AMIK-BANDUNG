import React from 'react';

import './style.scss';

import { Icon } from '@iconify/react';
import caret from '@iconify/icons-mdi/caret-down';
import notif from '@iconify/icons-mdi/notifications';

const UserAccount = () => {
  const email = 'ranimulyanik14@gmail.com';
  const notifState = true;

  return (
    <div className='user-account'>
      <div className='notif'>
        <div className='notif-wrapper'>
          <Icon icon={notif} />
          {notifState ? <div className='notification'></div> : ''}
        </div>
      </div>
      <div className='email'>
        <h3>{email}</h3>
        <Icon icon={caret} />
      </div>
    </div>
  );
};

export default UserAccount;
