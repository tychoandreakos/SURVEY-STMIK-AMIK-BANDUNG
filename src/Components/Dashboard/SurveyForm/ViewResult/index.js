import React from "react";

import Icon from "@iconify/react";
import Monitor from "@iconify/icons-mdi/monitor";
import Phone from "@iconify/icons-mdi/smartphone-android";
import Tablet from "@iconify/icons-mdi/tablet-ipad";
import Classic from "@iconify/icons-mdi/parasol";
import NewFormat from "@iconify/icons-mdi/grid";

import ResultWrapper from "./Result/ResultWrapper";

import "./style.scss";

const ViewResult = () => {
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
      icon: NewFormat,
    },
    {
      icon: Classic,
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
    <div className='view-result'>
      <div className='content'>
        <div className='left'>
          <div className='logo'></div>
          <div className='header'>
            <h3 className='title'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis, saepe.
            </h3>
            <span className='description'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              laudantium quis qui obcaecati, rerum, quia aspernatur quae non
              ipsam esse doloremque soluta commodi, ea magnam?
            </span>
          </div>
          {<ResultWrapper />}
        </div>
        <div className='right'></div>
      </div>
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
    </div>
  );
};

export default ViewResult;
