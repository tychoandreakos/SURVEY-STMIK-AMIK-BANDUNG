import React from "react";

import "./style.scss";

const Choice = (props) => {
  const { title, selected } = props;
  return (
    <div className='choice-element'>
      <div className='circle'></div>
      <span>{title}</span>
    </div>
  );
};

export default Choice;
