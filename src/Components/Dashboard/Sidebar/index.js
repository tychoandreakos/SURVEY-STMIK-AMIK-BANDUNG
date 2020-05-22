import React from 'react';

import UserProfile from '../UserProfile';
import MenuList from '../MenuList';

import './style.scss';

const Sidebar = () => {
  return (
    <div id='sidebar'>
      <UserProfile />
      <MenuList />
    </div>
  );
};

export default Sidebar;
