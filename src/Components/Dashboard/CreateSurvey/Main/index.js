import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { setTileSurvey } from "../../../../Store/redux/action";
import Textarea from "react-expanding-textarea";

import Slider from "../Slider";
import "./style.scss";
const MainCreateSurvey = (props) => {
  const [title, setTitle] = useState("");
  const titleRef = useRef({});
  const {
    addTitle,
    smallPlaceholder = "Create Survey Now",
    placeholder = "Insert the title of the survey here",
  } = props;

  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const capitalize = (val) => {
    return val.toUpperCase(val);
  };

  const titleHandler = (e) => {
    if (title.length < 1) {
      setTitle(capitalize(e.target.value));
    } else {
      setTitle(e.target.value);
    }
  };

  const saveTitleToRedux = () => {
    addTitle(title);
  };

  return (
    <div id='main-create'>
      <div className='title'>
        <h5 className='small-title'>{smallPlaceholder}</h5>
        <div className='main-title-wrapper'>
          <Textarea
            ref={titleRef}
            onBlur={saveTitleToRedux}
            placeholder={placeholder}
            className='main-title'
            value={title}
            onChange={titleHandler}
          />
        </div>
      </div>
      <Slider />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTitle: (title) => dispatch(setTileSurvey(title)),
  };
};

const MainCreateSurveyJoinRedux = connect(
  null,
  mapDispatchToProps
)(MainCreateSurvey);

export default MainCreateSurveyJoinRedux;
