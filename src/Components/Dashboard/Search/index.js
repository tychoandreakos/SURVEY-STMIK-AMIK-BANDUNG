import React from 'react';

import './style.scss';

import { Icon } from '@iconify/react';
import search from '@iconify/icons-mdi/search';

const Search = () => {
  const icon = {
    size: 20,
    color: '#a7b4cc',
  };
  return (
    <div className='search-header'>
      <Icon
        color={icon.color}
        width={icon.size}
        height={icon.size}
        icon={search}
      />
      <input type='search' placeholder='Search' />
    </div>
  );
};

export default Search;
