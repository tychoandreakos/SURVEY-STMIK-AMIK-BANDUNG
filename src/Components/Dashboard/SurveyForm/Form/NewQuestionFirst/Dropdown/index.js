import React, { useContext } from "react";

import { connect } from "react-redux";

import Icon from "@iconify/react";
import DefaultIcon from "@iconify/icons-mdi/text-short";
import ChevronDown from "@iconify/icons-mdi/chevron-down";
import DropdownContext from "../../../../../../Store/Context/dropdownAlternate";

import "./style.scss";
import { setTypeQuestion } from "../../../../../../Store/redux/action";

const DropdownNewQuestionFirst = (props) => {
  const { elementDropdown, dropdown } = useContext(DropdownContext);
  const { dropdownState, dropdownHandler, setTypeQuestion } = props;
  const defaultData = {
    title: "Default Menu",
    iconDefault: DefaultIcon,
  };

  const dropdownTypeHandler = (type) => {
    setTypeQuestion(type);
  };

  const backdropHandler = () => {
    dropdownHandler();
  };

  let backdropEl;
  if (dropdownState) {
    backdropEl = (
      <div
        onClick={backdropHandler}
        className='backdrop-dropdown-question-first'
      ></div>
    );
  }

  let dropdownEl = elementDropdown.map((item) => {
    return (
      <div
        key={item._id}
        onClick={() => dropdownTypeHandler(item.type)}
        className='title-dropdown'
      >
        <Icon
          className='icon-dropdown'
          icon={item.icon ? item.icon : defaultData.iconDefault}
        />
        <span>{item.title ? item.title : defaultData.title}</span>
      </div>
    );
  });

  let styleDrop;
  if (dropdown) {
    const height = 315.2;
    styleDrop = {
      height: `${height}px`,
    };
    setTimeout(() => {
      window.scrollTo({
        top: document.getElementById("main").clientHeight,
        behavior: "smooth",
      });
    }, 550);
  } else {
    styleDrop = {
      height: "0px",
    };
  }

  return (
    <>
      <div style={styleDrop} className='dropdown-question-first'>
        <div className='dropdown-title-wrapper'>{dropdownEl}</div>
        <div className='scroll-dropdown'>
          <Icon icon={ChevronDown} />
        </div>
      </div>
      {backdropEl}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTypeQuestion: (item) => dispatch(setTypeQuestion(item)),
  };
};

const DropdownNewQuestionFirstJoinRedux = connect(
  null,
  mapDispatchToProps
)(DropdownNewQuestionFirst);

export default DropdownNewQuestionFirstJoinRedux;
