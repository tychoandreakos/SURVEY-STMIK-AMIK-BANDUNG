import React from "react";
import { connect } from "react-redux";

import Icon from "@iconify/react";
import Plus from "@iconify/icons-mdi/plus";
import OK from "@iconify/icons-mdi/check";

import "./style.scss";
import { storeSurvey } from "../../../../Store/redux/action";
import { SURVEY_FORM_BUILDER } from "../../../../util/varTypes";

const BtnOpt = (props) => {
  const { type, storeSurvey, surveyForm } = props;
  const TYPE = {
    OK: "OK",
    PLUS: "PLUS",
  };

  let btn;

  const submitHandler = () => {
    storeSurvey(surveyForm);
  };

  if (type === TYPE.OK) {
    btn = (
      <button onClick={submitHandler} className='btn-ok'>
        <Icon icon={OK} />
      </button>
    );
  }

  if (type === TYPE.PLUS) {
    btn = (
      <button className='btn-opt'>
        <Icon icon={Plus} />
      </button>
    );
  }

  return <>{btn}</>;
};

const mapStateToProps = (state) => {
  return {
    surveyForm: state[SURVEY_FORM_BUILDER],
  };
};

const mapDispathToProps = (dispatch) => {
  return {
    storeSurvey: (item) => dispatch(storeSurvey(item)),
  };
};

const BtnOptJoinRedux = connect(mapStateToProps, mapDispathToProps)(BtnOpt);

export default BtnOptJoinRedux;
