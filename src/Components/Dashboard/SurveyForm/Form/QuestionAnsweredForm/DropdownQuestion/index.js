import React, { useContext, useRef, useEffect, useState } from "react";

import { connect } from "react-redux";

import Icon from "@iconify/react";
import Check from "@iconify/icons-mdi/check";

import DropdownContext from "../../../../../../Store/Context/dropdownAlternate";

import "./style.scss";
import {
  setTypeQuestion,
  setTypeEditQuestion,
} from "../../../../../../Store/redux/action";
import {
  SURVEY_TYPE_QUESTION,
  SURVEY_EDIT_TYPE_QUESTION,
  SURVEY_CAN_EDIT,
} from "../../../../../../util/varTypes";

const DropdownQuestion = (props) => {
  const { elementDropdown } = useContext(DropdownContext);
  const dropdownRef = useRef();
  const [backdrop, setBackdrop] = useState(true);
  const [typeOfQuestion, setTypeOfQuestion] = useState("");

  const {
    typeQuestion,
    setTypeQuestion,
    canEdit,
    setTypeEditQuestion,
    editTypeQuestion,
  } = props;

  useEffect(() => {
    dropdownRef.current.scrollTo({
      top: 0,
    });
    const typeQ = checkTypeQuestion(typeQuestion)
      ? typeQuestion
      : editTypeQuestion;
    setTypeOfQuestion(typeQ);
  }, []);

  const checkedEl = (
    <div className='icon-dropdown'>
      <Icon icon={Check} />
    </div>
  );

  const sortByChecked = (item) => {
    return item.type === typeOfQuestion ? -1 : 1;
  };

  const dropdownHandler = (type) => {
    if (canEdit) {
      setTypeEditQuestion(type);
    } else {
      setTypeQuestion(type);
    }
  };

  const renderElementToReact = (item) => (
    <li onClick={() => dropdownHandler(item.type)} key={item._id}>
      <div className='dropdown-wrapper'>
        <div className='icon-dropdown'>
          <Icon icon={item.icon} />
        </div>
        <span>{item.title}</span>
      </div>
      {item.type === typeOfQuestion ? checkedEl : undefined}
    </li>
  );

  const backdropHandler = () => {
    setBackdrop(false);
  };

  function checkTypeQuestion(val) {
    return val && val.length > 0;
  }

  const newElementDropdown = Array.from(elementDropdown);
  const elDropdown = newElementDropdown
    .sort(sortByChecked)
    .map(renderElementToReact);

  let backdropEl;
  if (backdrop) {
    backdropEl = (
      <div
        onClick={backdropHandler}
        className='backdrop-dropdown-question'
      ></div>
    );
  }

  return (
    <>
      <ul ref={dropdownRef} className='dropdown-question'>
        {elDropdown}
      </ul>
      {backdropEl}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    typeQuestion: state[SURVEY_TYPE_QUESTION],
    editTypeQuestion: state[SURVEY_EDIT_TYPE_QUESTION],
    canEdit: state[SURVEY_CAN_EDIT],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTypeQuestion: (item) => dispatch(setTypeQuestion(item)),
    setTypeEditQuestion: (item) => dispatch(setTypeEditQuestion(item)),
  };
};

const DropdownQuestionJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownQuestion);

export default DropdownQuestionJoinRedux;
