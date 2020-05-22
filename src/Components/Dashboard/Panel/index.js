import React from 'react';

import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

import './style.scss';

const Panel = ({ active, title, desc, icon }) => {
  const size = 20;
  return (
    <div className='panel-dashboard'>
      <div className='icon-wrapper'>
        {active ? (
          <Icon width={size} height={size} icon={icon} />
        ) : (
          <span className='icon'>{icon}</span>
        )}
      </div>
      <h3>{title}</h3>
      <span className="desc">{desc}</span>
    </div>
  );
};

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.any,
  active: PropTypes.bool,
};

export default Panel;
