import React from "react";

import Icon from "@iconify/react";
import Plus from "@iconify/icons-mdi/plus";
import OK from "@iconify/icons-mdi/check";

import "./style.scss";

const BtnOpt = ({ type }) => {
  const TYPE = {
    OK: "OK",
    PLUS: "PLUS",
  };

  let btn;

  const submitHandler = () => {
    console.log("fuck");
  };

  if (type === TYPE.OK) {
    btn = (
      <button onClick={submitHandler} className='btn-ok'>
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
