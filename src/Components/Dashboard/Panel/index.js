import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { CREATE_SURVEY } from '../../../util/route';

import './style.scss';

const Panel = ({ active, title, desc, icon }) => {
  const size = 35;
  const color = '#5661b6';
  let panelEl;

  if (active) {
    panelEl = (
      <Link to={CREATE_SURVEY} className='panel-dashboard'>
        <div className='icon-wrapper'>
          <Icon color={color} width={size} height={size} icon={icon} />
        </div>
        <h3>{title}</h3>
        <span className='desc'>{desc}</span>
      </Link>
    )
  } else {
    panelEl = (
      <div className='panel-dashboard'>
        <div className='icon-wrapper'>
          <span className='icon'>{icon}</span>
        </div>
        <h3>{title}</h3>
        <span className='desc'>{desc}</span>
      </div>
    )
  }

  return (
    <>
      {panelEl}
    </>
  );
};

Panel.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.any,
  active: PropTypes.bool,
};

export default Panel;
