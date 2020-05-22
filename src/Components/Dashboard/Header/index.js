import React from 'react';

import Search from '../Search';
import UserAccount from '../UserAccount';

import './style.scss';

const Header = () => {
  return (
    <div className='header-menu'>
      <Search />
      <UserAccount />
    </div>
  );
};

export default Header;
