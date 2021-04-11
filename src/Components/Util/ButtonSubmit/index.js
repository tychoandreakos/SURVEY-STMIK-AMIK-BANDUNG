import React, { useMemo, useState, useEffect, useRef } from "react";

import "./style.scss";

const ButtonSubmit = (props) => {
  const { title, onSubmit, disabled } = props;
  const [loading, setLoading] = useState(false);
  const btnRef = useRef();

  const loadingHandler = () => {
    setTimeout(() => {
      setLoading(!loading);
    }, 500);
  };

  useEffect(() => console.log(props))

  const renderButton = useMemo(() => {
      return (
        <button disabled={disabled} onClick={onSubmit} ref={btnRef}>
          {loading ? props.children : title}
        </button>
      );
  }, [loading]);
  return <div className='submit-me'>{renderButton}</div>;
};

export default ButtonSubmit;
