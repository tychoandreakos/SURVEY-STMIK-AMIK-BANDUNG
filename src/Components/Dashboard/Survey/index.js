import React, { useState } from "react";

import DropdownSurveyList from "./Dropdown";
import { Icon } from "@iconify/react";
import dots from "@iconify/icons-mdi/dots-horizontal";

import "./style.scss";

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

  const [dropdown, setDropdown] = useState(false);
  const [draft, setDraft] = useState(true);

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  let dropdownRender;
  if (dropdown) {
    dropdownRender = <DropdownSurveyList dropdownHandler={dropdownHandler} />;
  }

  const statusRender = dummy.map((item) => (
    <div className='status-info'>
      <h4>{item.total}</h4>
      <span>{item.title}</span>
    </div>
  ));

  let draftBadgeRender;
  if (draft) {
    draftBadgeRender = (
      <div className='draft-badge'>
        <span>draft</span>
      </div>
    );
  }

  return (
    <div className='survey'>
      <div className='first'>
        <div className='logo'>
          <div className='logo-wrapper'></div>
        </div>
        <div className='info'>
          <h3>project slain.LTD</h3>
          <div className='description'>
            <span>created: 05/20/10</span>
            <span>modified: 05/20/10</span>
          </div>
        </div>
      </div>
      <div className='second'>
        <div onClick={dropdownHandler} className='settings'>
          <Icon width={sizeDots} height={sizeDots} icon={dots} />
          <span>options</span>
        </div>
        <div className='status'>{statusRender}</div>
      </div>
      {draftBadgeRender}
      {dropdownRender}
    </div>
  );
};

export default Survey;
