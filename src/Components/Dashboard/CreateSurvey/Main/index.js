import React, { useState, useRef, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { setTileSurvey } from "../../../../Store/redux/action";
import Textarea from "react-expanding-textarea";
import { withRouter } from "react-router-dom";

import Dialog from "../../Dialog";
import Slider from "../Slider";

import "./style.scss";
const MainCreateSurvey = (props) => {
  const [title, setTitle] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [dialog, setDialog] = useState(false);
  const titleRef = useRef({});
  const {
    addTitle,
    smallPlaceholder = "Create Survey Now",
    placeholder = "Insert the title of the survey here",
    history,
  } = props;

  const btn = useCallback(
    (limit) => {
      if (validation()) {
        setBtnDisabled(false);
      } else {
        setBtnDisabled(true);
      }
    },
    [title, btnDisabled]
  );

  useEffect(() => btn(formatTitle()), [btn]);

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

  const onSubmit = () => {
    if (validation()) {
      history.push("/create/survey-form");
    }
  };

  const onCancel = () => {
    history.push("/");
  };

  function formatTitle() {
    return 8;
  }

  function validation() {
    if (title && title.length > formatTitle()) {
      return true;
    }

    return false;
  }

  const dialogHandler = () => {
    setDialog(!dialog);
  };

  let DialogEl;
  if (dialog) {
    DialogEl = (
      <Dialog
        onCancelHandler={dialogHandler}
        onConfirmHandler={onSubmit}
        title='Yes, Continue'
      />
    );
  }

  return (
    <>
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
        <div className='create-survey'>
          <button onClick={onCancel} className='btn btn-cancel'>
            back to home
          </button>
          <button
            disabled={btnDisabled}
            onClick={dialogHandler}
            className='btn btn-create'
          >
            Create Now
          </button>
        </div>
      </div>
      {DialogEl}
    </>
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
)(withRouter(MainCreateSurvey));

export default MainCreateSurveyJoinRedux;
