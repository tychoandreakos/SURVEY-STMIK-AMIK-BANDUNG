import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { connect } from "react-redux";
import { gsap } from "gsap";
import { setAuthForm } from "../../../Store/redux/action";

import "./style.scss";

const TextBox = (props) => {
  const { placeholder, type, name, setAuthForm } = props;
  const [input, setInput] = useState("");
  const [placeholderActivate, setPlaceholderActivate] = useState(true);
  const [inputActivate, setInputActivate] = useState(false);

  const placeholderRef = useRef();

  useEffect(() => {
    if (inputActivate && input.hasOwnProperty("length") && input.length < 1) {
      setPlaceholderActivate(true);
      setInputActivate(false);
    }
  }, [input, inputActivate]);

  const inputHandler = useCallback((e) => {
    setInput(e.target.value);
  });

  const inputActivateHandler = useCallback(() => {
    setInputActivate(true);
    if (input.length >= 5) {
      setAuthForm({
        name,
        value: input,
      });
    }
  });

  const placeholderHandler = useCallback(() => {
    if (placeholderActivate) {
      gsap.to(placeholderRef.current, {
        autoAlpha: 0,
        duration: 0.2,
      });
    }
    setTimeout(() => {
      setPlaceholderActivate(!placeholderActivate);
    }, 300);
  });

  const inputRender = useMemo(() => {
    if (placeholderActivate) {
      return (
        <p
          ref={placeholderRef}
          onClick={placeholderHandler}
          className='placeholder'
        >
          {placeholder}
        </p>
      );
    } else {
      return (
        <input
          autoFocus
          value={input}
          onChange={inputHandler}
          onBlur={inputActivateHandler}
          type={type}
        />
      );
    }
  }, [input, type, inputHandler, placeholderActivate]);

  return (
    <div className='textbox-input'>
      <div className='input-wrapper'>{inputRender}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAuthForm: (item) => dispatch(setAuthForm(item)),
  };
};

const TextBoxJoinRedux = connect(null, mapDispatchToProps)(TextBox);

export default TextBoxJoinRedux;
