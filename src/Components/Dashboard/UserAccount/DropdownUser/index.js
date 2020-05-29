import React from 'react';

import { Icon } from '@iconify/react';
import heart from '@iconify/icons-mdi/heart';
import settingAccount from '@iconify/icons-mdi/cog-outline';
import logout from '@iconify/icons-mdi/logout-variant';

import './style.scss';

const DropdownUser = () => {
  const data = [
    {
      title: 'profile',
      link: '#',
      icon: heart,
    },
    {
      title: 'pengaturan akun',
      link: '#',
      icon: settingAccount,
    },
    {
      title: 'logout',
      link: '#',
      icon: false,
    },
  ];
  const dropdownEl = data.map((menu, i) => (
    <li key={i}>
      {menu.icon ? <Icon icon={menu.icon} /> : null}
      <a href={menu.link}>{menu.title}</a>
    </li>
  ));

  return (
    <>
      <div className='caret'></div>
      <div className='dropdown'>
        <ul>{dropdownEl}</ul>
      </div>
    </>
  );
};

export default DropdownUser;
