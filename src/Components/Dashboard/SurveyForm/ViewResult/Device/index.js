import React from "react";

import Icon from "@iconify/react";
import Monitor from "@iconify/icons-mdi/monitor";
import Phone from "@iconify/icons-mdi/smartphone-android";
import Tablet from "@iconify/icons-mdi/tablet-ipad";
import Classic from "@iconify/icons-mdi/format-list-bulleted";
import NewFormat from "@iconify/icons-mdi/format-line-weight";

import './style.scss';

const Device = () => {
  const deviceView = [
    {
      icon: Monitor,
    },
    {
      icon: Phone,
    },
    {
      icon: Tablet,
    },
  ];

  const format = [
    {
      icon: Classic,
    },
    {
      icon: NewFormat,
    },
  ];

  const renderDeviceView = deviceView.map((item) => (
    <div className='icon'>
      <Icon icon={item.icon} />
    </div>
  ));

  const renderSurveyFormat = format.map((item) => (
    <div className='icon'>
      <Icon icon={item.icon} />
    </div>
  ));
  return (
    <div className='footer-handler'>
      <div className='device'>
        <span>device view</span>
        <div className='icon-list'>{renderDeviceView}</div>
      </div>
      <div className='format'>
        <span>survey format</span>
        <div className='icon-list'>{renderSurveyFormat}</div>
      </div>
    </div>
  );
};

export default Device;
