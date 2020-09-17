import React from "react";
import Icon from "@iconify/react";

import "./style.scss";

const Dialog = (props) => {
  const {
    onCancelHandler,
    icon,
    desc,
    title = "Next",
    onConfirmHandler,
  } = props;
  return (
    <>
      <div className='dialog'>
        <div className='body'>
          <div className='icon-image'>
            <div className='icon'>
              <Icon icon={icon} />
            </div>
          </div>
          <div className='title'>{desc}</div>
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
