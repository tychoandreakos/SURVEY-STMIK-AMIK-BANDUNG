import React from "react";

import "./style.scss";

const Dialog = (props) => {
  const { onCancelHandler, title, onConfirmHandler } = props;
  return (
    <>
      <div className='dialog'>
        <div className='body'>
          <div className='icon-image'></div>
          <div className='title'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            accusamus a modi est fugiat numquam?
          </div>
        </div>
        <div className='footer'>
          <div onClick={onCancelHandler} className='btn-dialog btn-left-dialog'>
            Maybe Later
          </div>
          <div
            onClick={onConfirmHandler}
            className='btn-dialog btn-right-dialog'
          >
            {title}
          </div>
        </div>
      </div>
      <div className='backdrop-dialog'></div>
    </>
  );
};

export default Dialog;
