import React, { useReducer, useState, useEffect } from "react";

import { connect } from "react-redux";

import {
  DESCRIPTION_HEADER,
  SURVEY_FORM_BUILDER,
  SURVEY_HEADER,
} from "../../../../../../util/varTypes";
import Textarea from "react-expanding-textarea";

import "./style.scss";
import { setSurveyHeader } from "../../../../../../Store/redux/action";

const DescriptionHeader = (props) => {
  const [pageDesciption, editPageDescription] = [
    "page description",
    "edit page description",
  ];
  const [pageTitle, setPageTitle] = useState("");
  const [pageDesc, setPageDesc] = useState("");
  const initialState = {
    edit: false,
    title: pageDesciption,
  };

  const { setHeader, titleState, descState } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const { edit, title } = state;

  useEffect(() => {
    if (checkIfExist(titleState)) {
      setPageTitle(titleState);
    }

    if (checkIfExist(descState)) {
      setPageDesc(descState);
    }
  }, [titleState, descState]);

  function checkIfExist(val) {
    return val && val.length > 1;
  }

  function reducer(state, action) {
    switch (action.type) {
      case DESCRIPTION_HEADER.EDIT:
        return {
          edit: true,
          title: editPageDescription,
        };
      case DESCRIPTION_HEADER.SAVE:
        return {
          edit: false,
          title: pageDesciption,
        };
      default:
        return state;
    }
  }

  const saveHandler = () => {
    dispatch({
      type: DESCRIPTION_HEADER.SAVE,
    });
    setHeader({
      title: pageTitle,
      desc: pageDesc,
    });
  };
  const editHandler = () => {
    dispatch({
      type: DESCRIPTION_HEADER.EDIT,
    });
  };

  const titleHandler = (e) => {
    setPageTitle(e.target.value);
  };

  const titleHandlerKeyPress = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      dispatch({
        type: DESCRIPTION_HEADER.SAVE,
      });
    }
  };

  const descHandler = (e) => {
    setPageDesc(e.target.value);
  };

  const descHandlerKeyPress = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      dispatch({
        type: DESCRIPTION_HEADER.SAVE,
      });
    }
  };

  let [classDescription, classTitle] = [
    ["description-survey-header"],
    ["title-survey-master"],
  ];
  let btnEl;
  let headerPageEl;
  if (edit) {
    classDescription = [...classDescription, "edited"];
    classTitle = [...classTitle, "edited-title"];
    btnEl = (
      <button className='finish' onClick={saveHandler}>
        SAVE
      </button>
    );
    headerPageEl = (
      <>
        <Textarea
          onKeyPress={titleHandlerKeyPress}
          type='text'
          onChange={titleHandler}
          value={pageTitle}
          className='page-title-input'
          placeholder='Please insert your page title'
        />
        <Textarea
          className='desc-survey-master edited-desc'
          onKeyPress={descHandlerKeyPress}
          type='text'
          onChange={descHandler}
          value={pageDesc}
          placeholder='Please insert your page description'
        />
      </>
    );
  } else {
    btnEl = (
      <button className='edit' onClick={editHandler}>
        EDIT
      </button>
    );
    headerPageEl = (
      <>
        <h3>{pageTitle}</h3>
        <span className='desc-survey-master'>{pageDesc}</span>
      </>
    );
  }

  const pollClass = [classDescription, classTitle];
  const [descriptionSurveyClass, titleClass] = pollClass.map((item) => [
    item.join(" "),
  ]);

  return (
    <div className={descriptionSurveyClass}>
      <div className='top'>
        <span className={titleClass}>{title}</span>
        <div className='handling'>{btnEl}</div>
      </div>
      {headerPageEl}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    titleState: state[SURVEY_FORM_BUILDER][SURVEY_HEADER.TITLE],
    descState: state[SURVEY_FORM_BUILDER][SURVEY_HEADER.DESC],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setHeader: (item) => dispatch(setSurveyHeader(item)),
  };
};

const DescriptionHeaderJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(DescriptionHeader);

export default DescriptionHeaderJoinRedux;
