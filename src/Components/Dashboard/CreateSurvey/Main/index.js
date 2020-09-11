import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Loading from "react-loading";

import { setTitleSurvey, triggerLoader } from "../../../../Store/redux/action";
import Textarea from "react-expanding-textarea";
import {
  SURVEY_TITLE,
  LOADER,
  SURVEY_FORM_BUILDER,
} from "../../../../util/varTypes";

import Slider from "../Slider";

import "./style.scss";
const MainCreateSurvey = (props) => {
  const [title, setTitle] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [loader, setLoader] = useState(false);
  const titleRef = useRef({});
  const {
    addTitle,
    smallPlaceholder = "Create Survey Now",
    placeholder = "Insert the title of the survey here",
    history,
    titleState,
    triggerLoading,
  } = props;

  const titleMemo = useMemo(() => titleState, [titleState]);
  useEffect(() => {
    if (titleMemo !== undefined) {
      setTitle(capitalizeAlter(titleMemo));
    } else {
      titleRef.current.focus();
    }
  }, [titleMemo]);

  const formatTitle = useCallback(() => {
    return 8;
  }, []);

  const validation = useCallback(() => {
    if (title && title.length > formatTitle()) {
      return true;
    }
    return false;
  }, [title, formatTitle]);

  const btnCallback = useCallback(() => {
    if (validation()) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [validation]);

  useEffect(() => btnCallback(), [btnCallback]);

  function capitalizeAlter(val) {
    return val.charAt(0).toUpperCase() + val.slice(1, val.length);
  }

  const capitalize = (val) => {
    return val.toUpperCase(val);
  };

  const enterHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
    }
  };

  const titleHandler = (e) => {
    if (title.length < 1) {
      setTitle(capitalize(e.target.value));
    } else {
      setTitle(e.target.value);
    }
  };

  const x = () => {
    triggerLoader();
  };

  const onSubmit = () => {
    if (validation()) {
      addTitle(title);
      setLoader(true);
      // setTimeout(() => {
      //   triggerLoading();
      // }, 400);

      setTimeout(() => {
        history.push("/create/survey-form");
      }, 2000);

      // setTimeout(() => {
      //   triggerLoading();
      // }, 3500);
    }
  };

  const onCancel = () => {
    history.push("/");
  };

  let renderingLoading;
  if (loader) {
    renderingLoading = <Loading type='spin' width='25px' height='25px' />;
  } else {
    renderingLoading = "create now";
  }

  return (
    <div id='main-create'>
      <div className='title'>
        <h5 className='small-title'>{smallPlaceholder}</h5>
        <div onChange={x} className='main-title-wrapper'>
          <Textarea
            ref={titleRef}
            placeholder={placeholder}
            className='main-title'
            onKeyDown={enterHandler}
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
          onClick={onSubmit}
          className='btn btn-create'
        >
          {renderingLoading}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    titleState: state[SURVEY_FORM_BUILDER][SURVEY_TITLE],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTitle: (title) => dispatch(setTitleSurvey(title)),
    triggerLoading: () => dispatch(triggerLoader()),
  };
};

const MainCreateSurveyJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MainCreateSurvey));

export default MainCreateSurveyJoinRedux;
