import React from 'react';

import './style.scss';

const MenuList = () => {
  const menus = [
    {
      title: 'home',
      link: '#',
    },
    {
      title: 'manage',
      link: '#',
    },
    {
      title: 'view',
      link: '#',
    },
    {
      title: 'settings',
      link: '#',
    },
  ];

  const listMenu = menus.map((menu, i) => (
    <li key={i}>
      <a href={menu.link}>{menu.title}</a>
    </li>
  ));

  return <ul className='menu-list'>{listMenu}</ul>;
};

export default MenuList;
