import React from "react";

import Choice from "./Choice";

import "./style.scss";

const MultiChoice = (props) => {
  const { number, title, data } = props;
  const choiceRender = data.map((item) => (
    <Choice
      key={item._id}
      selected={item.selected}
      title={uppercase(item.title)}
    />
  ));

  function uppercase(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
  }
  return (
    <div className='multichoice-view'>
      <span className='title-view'>
        {number}. {title}
      </span>
      <div className='choices'>{choiceRender}</div>
    </div>
  );
};

export default MultiChoice;
