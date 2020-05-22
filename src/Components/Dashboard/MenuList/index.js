import React from 'react';

import './style.scss';
import { Icon } from '@iconify/react';

import home from '@iconify/icons-mdi/home';
import settings from '@iconify/icons-mdi/settings-outline';
import mySurvey from '@iconify/icons-mdi/check-circle-outline';
import listSurvey from '@iconify/icons-mdi/clipboard-text-outline';

const MenuList = () => {
  const menus = [
    {
      title: 'home',
      icon: home,
      link: '#',
      active: true,
    },
    {
      title: 'my survey',
      icon: mySurvey,
      link: '#',
    },
    {
      title: 'view',
      icon: listSurvey,
      link: '#',
    },
    {
      title: 'settings',
      icon: settings,
      link: '#',
    },
  ];

  const listMenu = menus.map((menu, i) => {
    if (menu.active) {
      return (
        <li key={i}>
          <a className='active' href={menu.link}>
            <Icon icon={menu.icon} />
          </a>
        </li>
      );
    } else {
      return (
        <li key={i}>
          <a href={menu.link}>
            <Icon icon={menu.icon} />
          </a>
        </li>
      );
    }
  });

  return <ul className='menu-list'>{listMenu}</ul>;
};

export default MenuList;
