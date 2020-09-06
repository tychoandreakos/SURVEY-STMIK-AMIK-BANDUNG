import React from "react";
import "./style.scss";

const Choice = (props) => {
  const { title, selected, _id, choiceId, multiChoiceHandler } = props;

  const selectedCss = ["circle"];

  if (selected) {
    selectedCss.push("selected");
  }

  const selectedClass = selectedCss.join(" ");

  function selectHandler() {
    multiChoiceHandler(_id, choiceId);
  }

  return (
    <div onClick={selectHandler} className='choice-element'>
      <div className={selectedClass}></div>
      <span>{title}</span>
    </div>
  );
};

export default Choice;
