import React from "react";

import "./style.scss";

const ButtonSubmit = (props) => {
  const { title } = props;
  return (
    <div className='submit-me'>
      <button>{title}</button>;
    </div>
  );
};

export default ButtonSubmit;
