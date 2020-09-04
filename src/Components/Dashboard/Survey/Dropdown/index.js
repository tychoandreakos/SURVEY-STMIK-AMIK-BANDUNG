import React from "react";

import Icon from "@iconify/react";
import Edit from "@iconify/icons-mdi/edit-outline";
import Send from "@iconify/icons-mdi/send";
import Share from "@iconify/icons-mdi/share-circle";
import Copy from "@iconify/icons-mdi/layers";

import "./style.scss";

const DropdownSurveyList = (props) => {
  const dropdown = [
    {
      icon: Edit,
      title: "Edit",
    },
    {
      icon: Send,
      title: "Send",
    },
    {
      icon: Share,
      title: "Share",
    },
    {
      icon: Copy,
      title: "Make a Copy",
    },
  ];

  const { dropdownHandler } = props;

  const disabledDropdownHandler = () => {
    dropdownHandler();
  };

  const dropdownRender = dropdown.map((item) => (
    <li>
      <div className='icon'>
        <Icon icon={item.icon} />
      </div>
      <span>{item.title}</span>
    </li>
  ));

  return (
    <>
      <ul className='survey-list-dropdown'>{dropdownRender}</ul>
      <div
        onClick={disabledDropdownHandler}
        className='backdrop-survey-list'
      ></div>
    </>
  );
};

export default DropdownSurveyList;
