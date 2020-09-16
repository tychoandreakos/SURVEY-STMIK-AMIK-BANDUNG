import React, { useCallback, useEffect, useMemo, useState } from "react";

import "./style.scss";

const TextBox = (props) => {
  const { placeholder, type, name } = props;
  const [input, setInput] = useState();
  const [placeholderActivate, setPlaceholderActivate] = useState(true);
  const [inputActivate, setInputActivate] = useState(false);

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
  });

  const placeholderHandler = useCallback(() => {
    setPlaceholderActivate(!placeholderActivate);
  });

  const inputRender = useMemo(() => {
    if (placeholderActivate) {
      return (
        <p onClick={placeholderHandler} className='placeholder'>
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

export default TextBox;
