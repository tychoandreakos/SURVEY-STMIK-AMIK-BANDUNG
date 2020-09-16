import React, { useMemo, useState, useRef } from "react";
import Loader from "react-loading";
import { gsap } from "gsap";

import "./style.scss";

const ButtonSubmit = (props) => {
  const { title } = props;
  const [loading, setLoading] = useState(false);
  const btnRef = useRef();

  const loaderStyle = useMemo(() => {
    return {
      type: "spin",
      color: "#fff",
      height: 50,
      width: 50,
    };
  }, []);

  const loadingHandler = () => {
    gsap.to(btnRef.current, {
      autoAlpha: 0,
      duration: 0.4,
    });
    setTimeout(() => {
      setLoading(!loading);
    }, 500);
  };
  const renderButton = useMemo(() => {
    if (loading) return <Loader {...loaderStyle} />;
    else return <button ref={btnRef}>{title}</button>;
  }, [loading]);
  return <div className='submit-me'>{renderButton}</div>;
};

export default ButtonSubmit;
