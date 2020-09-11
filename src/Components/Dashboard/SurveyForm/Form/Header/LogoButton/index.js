import React, { useRef, useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";

import Icon from "@iconify/react";

import DefaultIcon from "@iconify/icons-mdi/plus";

import "./style.scss";
import { processingLogo } from "../../../../../../Store/redux/action";

const LogoButton = (props) => {
  const [image, setImage] = useState();
  const [actualImage, setActualImage] = useState();
  const { title = "Add a Logo", icon = DefaultIcon, processingLogo } = props;
  const inputFileRef = useRef();

  const processingLogoCallback = useCallback(() => {
    if (image && image.size < 4718592) {
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        setActualImage(reader.result);
      };

      processingLogo();
    }
  }, [image, processingLogo]);

  useEffect(() => {
    processingLogoCallback();
  }, [processingLogoCallback]);

  const readFile = (e) => {
    const imageFiles = e.target.files[0];
    setImage(imageFiles);
  };

  const uploadHandler = () => {
    const elem = inputFileRef.current;
    elem.click();
  };

  let renderEl;
  if (actualImage) {
    renderEl = (
      <img
        alt='logo'
        onClick={uploadHandler}
        className='logo'
        src={actualImage}
      />
    );
  } else {
    renderEl = (
      <button onClick={uploadHandler} className='btn-add-header'>
        <Icon className='icon-add-header' icon={icon} />
        <span>{title}</span>
      </button>
    );
  }

  return (
    <div className='upload-logo'>
      {renderEl}
      <input
        type='file'
        onChange={readFile}
        hidden
        ref={inputFileRef}
        accept='image/*'
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    processingLogo: (item) => dispatch(processingLogo(item)),
  };
};

const LogoButtonJoinRedux = connect(null, mapDispatchToProps)(LogoButton);

export default LogoButtonJoinRedux;
