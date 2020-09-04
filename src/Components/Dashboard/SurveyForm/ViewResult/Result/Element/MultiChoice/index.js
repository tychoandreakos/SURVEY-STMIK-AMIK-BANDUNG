import React from "react";

import Choice from "./Choice";

import './style.scss'

const MultiChoice = (props) => {
  const { number } = props;
  return (
    <div className='multichoice-view'>
      <span className='title-view'>
        {number}. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tempora iste magni nisi pariatur tenetur sit.
      </span>
      <div className='choices'>
        <Choice
          selected={false}
          title={"Lorem ipsum dolor sit amet consectetur"}
        />
        <Choice
          selected={false}
          title={"Lorem ipsum dolor sit amet consectetur"}
        />
        <Choice
          selected={false}
          title={"Lorem ipsum dolor sit amet consectetur"}
        />
      </div>
    </div>
  );
};

export default MultiChoice;
