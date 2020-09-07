import React from "react";

import Icon from "@iconify/react";
import Plus from "@iconify/icons-mdi/plus";
import OK from "@iconify/icons-mdi/check";

import "./style.scss";

const BtnOpt = (props) => {
  const { type, onClick } = props;
  const TYPE = {
    OK: "OK",
    PLUS: "PLUS",
  };

  let btn;

  if (type === TYPE.OK) {
    btn = (
      <button onClick={onClick} className='btn-ok'>
        <Icon icon={OK} />
      </button>
    );
  }

  if (type === TYPE.PLUS) {
    btn = (
      <button className='btn-opt'>
        <Icon icon={Plus} />
      </button>
    );
  }

  return <>{btn}</>;
};

export default BtnOpt;
