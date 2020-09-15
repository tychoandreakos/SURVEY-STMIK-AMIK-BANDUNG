import React from "react";

import "./style.scss";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import home from "@iconify/icons-mdi/home";
import settings from "@iconify/icons-mdi/settings-outline";
import mySurvey from "@iconify/icons-mdi/check-circle-outline";
import listSurvey from "@iconify/icons-mdi/clipboard-text-outline";

import {
  HOME_DASHBOARD,
  SETTINGS_DASHBOARD,
  SURVEY_STATUS_DASHBOARD,
  ANALYTICS_DASHBOARD,
} from "../../../util/route";

const MenuList = () => {
  const menus = [
    {
      title: "home",
      icon: home,
      link: HOME_DASHBOARD,
      active: true,
    },
    {
      title: "my survey",
      icon: mySurvey,
      link: SURVEY_STATUS_DASHBOARD,
    },
    {
      title: "view",
      icon: listSurvey,
      link: ANALYTICS_DASHBOARD,
    },
    {
      title: "settings",
      icon: settings,
      link: SETTINGS_DASHBOARD,
    },
  ];

  const listMenu = menus.map((menu, i) => {
    if (menu.active) {
      return (
        <li key={i}>
          <Link className='active' to={menu.link}>
            <Icon icon={menu.icon} />
          </Link>
        </li>
      );
    } else {
      return (
        <li key={i}>
          <Link to={menu.link}>
            <Icon icon={menu.icon} />
          </Link>
        </li>
      );
    }
  });

  return <ul className='menu-list'>{listMenu}</ul>;
};

export default MenuList;
