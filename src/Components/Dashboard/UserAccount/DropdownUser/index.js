import React, { useCallback, useMemo } from "react";
import PropTypes from "prop-types";

import { Icon } from "@iconify/react";
import heart from "@iconify/icons-mdi/heart";
import settingAccount from "@iconify/icons-mdi/cog-outline";

import "./style.scss";

const DropdownUser = ({ open }) => {
  const logoutCallback = useCallback(() => {
    const item = ["_id", "_token", "isAuth"];
    for (const key of item) {
      window.localStorage.removeItem(key);
    }
    window.location.replace("/login");
  }, []);
  const data = useMemo(() => {
    return [
      {
        title: "profile",
        handler: () => {},
        icon: heart,
      },
      {
        title: "pengaturan akun",
        handler: () => {},
        icon: settingAccount,
      },
      {
        title: "logout",
        link: "#",
        handler: () => logoutCallback(),
        icon: false,
      },
    ];
  }, [logoutCallback]);

  const dropdownEl = data.map((menu, i) => (
    <li onClick={menu.handler} key={i}>
      {menu.icon ? <Icon icon={menu.icon} /> : null}
      <span>{menu.title}</span>
    </li>
  ));

  let dropdown = ["dropdown"];
  let caret = ["caret"];

  if (open) {
    caret = [...caret, "show"].join(" ");
    dropdown = [...dropdown, "show"].join(" ");
  }

  return (
    <>
      <div className={caret}></div>
      <div className={dropdown}>
        <ul>{dropdownEl}</ul>
      </div>
    </>
  );
};

DropdownUser.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default DropdownUser;
