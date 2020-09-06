import React from "react";

import Choice from "./Choice";

import "./style.scss";

const MultiChoice = (props) => {
  const { number, title, _id, data, multiChoiceHandler } = props;
  const choiceRender = data.map((item) => (
    <Choice
      key={item._id}
      choiceId={item._id}
      _id={_id}
      selected={item.selected}
      title={uppercase(item.title)}
      multiChoiceHandler={multiChoiceHandler}
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
