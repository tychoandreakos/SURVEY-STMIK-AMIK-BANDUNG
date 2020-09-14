import React from "react";

import LogoButton from "./LogoButton";
import Description from "./Description";

import "./style.scss";

const HeaderForm = (props) => {
  const { logo } = props;
  return (
    <div className='header-form-survey'>
      <LogoButton logo={logo} />
      <Description />
    </div>
  );
};

export default HeaderForm;
