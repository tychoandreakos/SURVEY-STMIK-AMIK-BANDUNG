import React from "react";

import TextArea from "react-expanding-textarea";

import "./style.scss";

const SingleTextBox = (props) => {
  const { number = 1, title } = props;
  return (
    <div className='single-textbox'>
      <span className='title-view'>
        {number}. {title}
      </span>
      <TextArea className='placeholder' />
    </div>
  );
};

export default SingleTextBox;
