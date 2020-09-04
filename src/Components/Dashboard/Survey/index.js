import React from "react";

import "./style.scss";

import { Icon } from "@iconify/react";
import dots from "@iconify/icons-mdi/dots-horizontal";

const Survey = () => {
  const sizeDots = 30;
  const dummy = [
    {
      total: 4,
      title: "questions",
    },
    {
      total: "5%",
      title: "responses",
    },
    {
      total: 4,
      title: "comments",
    },
  ];

  const statusRender = dummy.map((item) => (
    <div className='status-info'>
      <h4>{item.total}</h4>
      <span>{item.title}</span>
    </div>
  ));

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
        <div className='status'>{statusRender}</div>
        <div className='settings'>
          <Icon width={sizeDots} height={sizeDots} icon={dots} />
        </div>
      </div>
    </div>
  );
};

export default Survey;
