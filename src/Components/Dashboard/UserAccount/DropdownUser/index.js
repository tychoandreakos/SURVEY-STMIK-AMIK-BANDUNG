import React from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@iconify/react';
import heart from '@iconify/icons-mdi/heart';
import settingAccount from '@iconify/icons-mdi/cog-outline';

import './style.scss';

const DropdownUser = ({ open }) => {
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

  let dropdown = ['dropdown'];
  let caret = ['caret'];

  if (open) {
    caret = [...caret, 'show'].join(' ');
    dropdown = [...dropdown, 'show'].join(' ');
  }

  return (
    <>
      <div className={caret}></div>
      <div className={dropdown}>
        <ul>{dropdownEl}</ul>
      </div>
    </>
  );
};

DropdownUser.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default DropdownUser;
