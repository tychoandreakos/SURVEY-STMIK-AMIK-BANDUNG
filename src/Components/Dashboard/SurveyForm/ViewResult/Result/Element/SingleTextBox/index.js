import React from "react";

import TextArea from "react-expanding-textarea";

import "./style.scss";

const SingleTextBox = (props) => {
  const { number = 0 } = props;
  return (
    <div className='single-textbox'>
      <span className='title-view'>
        {number}. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Tempora iste magni nisi pariatur tenetur sit.
      </span>
      <TextArea className='placeholder' />
    </div>
  );
};

export default SingleTextBox;
