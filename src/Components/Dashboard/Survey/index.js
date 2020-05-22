import React from 'react';

import './style.scss';

import { Icon } from '@iconify/react';
import dots from '@iconify/icons-mdi/dots-horizontal';

const Survey = () => {
  const sizeDots = 30;
  return (
    <div className='survey'>
      <div className='first'>
        <div className='logo'>
          <div className='logo-wrapper'></div>
        </div>
        <div className='info'>
          <h3>project slain.LTD</h3>
          <span>dibuat: 05/20/10</span>
          <span>tenggat: 05/20/10</span>
        </div>
      </div>
      <div className='second'>
        <div className='status'>
          <div className='status-info'>
            <h4>3</h4>
            <span>info</span>
          </div>
          <div className='status-info'>
            <h4>5%</h4>
            <span>Respons</span>
          </div>
          <div className='status-info'>
            <h4>4</h4>
            <span>komentar</span>
          </div>
        </div>
        <div className='settings'>
          <Icon width={sizeDots} height={sizeDots} icon={dots} />
        </div>
      </div>
    </div>
  );
};

export default Survey;
