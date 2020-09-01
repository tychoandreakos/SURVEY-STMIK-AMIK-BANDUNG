import React, { useState, useContext } from "react";

import Button from "./Button";
import Dropdown from "./Dropdown";
import DropdownContext from "../../../../../Store/Context/dropdownAlternate";

import "./style.scss";

const NewQuestionFirst = () => {
  const [dropdown, setDropdown] = useState(false);

  const { elementDropdown } = useContext(DropdownContext);

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className='new-question-first'>
      <Button clicked={dropdownHandler} title='new question' />
      <span className='desc'>
        or <a href='/'>Copy and paste questions</a>
      </span>
      <DropdownContext.Provider
        value={{ elementDropdown, dropdown, setDropdown }}
      >
        <Dropdown dropdownHandler={dropdownHandler} dropdownState={dropdown} />
      </DropdownContext.Provider>
    </div>
  );
};

export default NewQuestionFirst;
