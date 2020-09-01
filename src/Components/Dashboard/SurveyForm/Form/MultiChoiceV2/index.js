import React, { useState, useEffect } from "react";

import TextArea from "react-expanding-textarea";
import Icon from "@iconify/react";
import plus from "@iconify/icons-mdi/plus";
import minus from "@iconify/icons-mdi/minus";

import { v4 as uuid } from "uuid";

import "./style.scss";

const MultiChoiceV2 = (props) => {
  const {
    inputStateHandler,
    editStateHandler,
    addNewMultiChoice,
    _id,
    removeNewMultiChoise,
    canRemoveDisabled,
    title,
    parentId,
    edit,
  } = props;
  const [value, setValue] = useState("");
  const [valueCache, setValueCache] = useState({});
  const [lockSubmit, setLockSubmit] = useState(true);

  useEffect(() => {
    if (edit) {
      setValue(title);
    }
  }, [edit, title]);

  const placeholder = "Enter an answer choice";

  const valueHandler = (e) => {
    setValue(e.target.value);
    if (lockSubmit) setLockSubmit(false);
  };

  const onSubmit = () => {
    if (!lockSubmit) {
      let data;
      if (valueCache.hasOwnProperty("_id")) {
        data = {
          _id: valueCache._id,
          title: value,
          selected: valueCache.selected,
        };
      } else {
        const newId = _id ? _id : uuid();
        data = {
          _id: edit ? newId : uuid(),
          title: value,
          selected: false,
        };
        setValueCache(data);
      }

      edit ? editStateHandler(data, parentId) : inputStateHandler(data, _id);
      setLockSubmit(true);
    }
  };

  const preventDefaultHandler = (e) => {
    if (e.charCode === 13) e.preventDefault();
  };

  const addNewMulti = () => {
    addNewMultiChoice(_id);
  };

  const removeNewMulti = () => {
    removeNewMultiChoise(_id);
  };

  return (
    <div className='multi-choice-v2'>
      <div className='choice'></div>
      <div className='input'>
        <TextArea
          onKeyPress={preventDefaultHandler}
          onBlur={onSubmit}
          value={value}
          onChange={valueHandler}
          placeholder={placeholder}
        />
      </div>
      <div className='action'>
        <button onClick={addNewMulti} className='btn btn-add'>
          <Icon icon={plus} />
        </button>
        <button
          onClick={removeNewMulti}
          disabled={canRemoveDisabled}
          className='btn btn-remove'
        >
          <Icon icon={minus} />
        </button>
      </div>
    </div>
  );
};

export default MultiChoiceV2;
