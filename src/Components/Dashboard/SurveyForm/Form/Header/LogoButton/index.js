import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { connect } from "react-redux";

import Icon from "@iconify/react";
import DefaultIcon from "@iconify/icons-mdi/plus";
import Loader from "react-loading";

import "./style.scss";
import { processingLogo } from "../../../../../../Store/redux/action";

const LogoButton = (props) => {
  const [image, setImage] = useState();
  const [actualImage, setActualImage] = useState();
  const [loader, setLoader] = useState(false);
  const { title = "Add a Logo", icon = DefaultIcon, processingLogo } = props;
  const inputFileRef = useRef();

  const loaderRef = useRef({
    type: "bubbles",
    color: "#5661b6",
    height: "8%",
    width: "8%",
  });

  const loaderState = useMemo(() => {
    const { type, color, height, width } = loaderRef.current;
    return {
      type,
      color,
      height,
      width,
    };
  }, [loaderRef]);

  const loaderEl = (
    <div className='loading'>
      <Loader
        type={loaderState.type}
        color={loaderState.color}
        height={loaderState.height}
        width={loaderState.width}
      />
    </div>
  );

  const processingLogoCallback = useCallback(() => {
    if (image && image.size < 4718592) {
      let reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = () => {
        setActualImage(reader.result);
      };

      setLoader(true);
    }
  }, [image]);

  useEffect(() => {
    processingLogoCallback();
  }, [processingLogoCallback]);

  useEffect(() => {
    if (actualImage && actualImage.length > 0) {
      setTimeout(() => {
        setLoader(false);
      }, 1500);
      processingLogo({
        image: actualImage,
      });
    }
  }, [actualImage, processingLogo]);

  const readFile = (e) => {
    const imageFiles = e.target.files[0];
    setImage(imageFiles);
  };

  const uploadHandler = () => {
    const elem = inputFileRef.current;
    elem.click();
  };

  let renderEl;
  if (loader) {
    renderEl = loaderEl;
  }

  if (!loader && actualImage) {
    renderEl = (
      <img
        alt='logo'
        onClick={uploadHandler}
        className='logo'
        src={actualImage}
      />
    );
  }

  if (!loader && !actualImage) {
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
