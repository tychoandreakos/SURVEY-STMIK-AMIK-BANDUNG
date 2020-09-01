import React, { useState, useEffect, useCallback, useRef } from "react";
import { connect } from "react-redux";
import {
  TYPE_BUTTON,
  SURVEY_FORM_BUILDER,
  SURVEY_FORM_QUESTION,
} from "../../../../util/varTypes";

import { gsap } from "gsap";

// formBuilder
import HeaderForm from "../Form/Header";
import Result from "../Result";
import NewQuestion from "../Form/NewQuestionFirst";
import QuestionAnsweredForm from "../Form/QuestionAnsweredForm";

import BtnOpt from "../BtnOpt";
import FormBuilderContext from "../../../../Store/Context/formBuilder";

import "./style.scss";

const ContentSurveyForm = (props) => {
  const [typeQuestion, setTypeQuestion] = useState();
  const okButton = useRef({});
  const { question } = props;

  const typeHandler = (val) => {
    setTypeQuestion(val);
  };

  let renderQuestion = [];
  if (question) {
    question.forEach((survey, index) => {
      renderQuestion = [
        ...renderQuestion,
        <Result
          key={survey._id}
          index={index + 1}
          _id={survey._id}
          title={survey.title}
          desc={survey.desc}
          type={survey.type}
          data={survey.item}
        />,
      ];
    });
  }

  const [initial, setInitial] = useState(false);
  const [formBuilder, setFormBuilder] = useState(false);
  const [confirmButton, setConfirmButton] = useState({
    state: false,
    anim: false,
  });

  useEffect(() => {
    if (
      question &&
      Array.isArray(question) &&
      question.length > 2 &&
      confirmButton.anim === false
    ) {
      setConfirmButton({
        state: true,
        anim: true,
      });
    }

    if (
      question &&
      Array.isArray(question) &&
      question.length <= 2 &&
      confirmButton.anim === true
    ) {
      setConfirmButton({
        state: true,
        anim: false,
      });
      setTimeout(() => {
        setConfirmButton({
          anim: false,
          state: false,
        });
      }, 5000);
    }
  }, [question]);

  useEffect(() => {
    if (confirmButton.anim) {
      const from = {
        y: 150,
      };
      const to = {
        delay: 0.3,
        duration: 1.4,
        y: -10,
        rotation: 360,
        autoAlpha: 1,
      };
      gsap.fromTo(okButton.current, from, to);
    }

    if (!confirmButton.anim && confirmButton.state) {
      const from = {
        y: -10,
      };
      const to = {
        delay: 0.2,
        duration: 1.4,
        y: 150,
        rotation: -360,
        autoAlpha: 1,
      };
      gsap.fromTo(okButton.current, from, to);
    }
  }, [confirmButton]);

  const formBuilderHidden = () => {
    setFormBuilder(false);
  };

  const memoizedCallback = useCallback(() => {
    if (!initial) {
      setInitial(true);
    }

    if (initial && typeQuestion && typeQuestion.length > 1) {
      setFormBuilder(true);
    }
  }, [initial, typeQuestion]);

  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  let questionEl;
  if (formBuilder) {
    questionEl = (
      <FormBuilderContext.Provider
        value={{ typeHandler, typeQuestion, formBuilderHidden }}
      >
        <QuestionAnsweredForm
          numbered={`q${question ? question.length + 1 : 1}`}
        />
      </FormBuilderContext.Provider>
    );
  }

  let okButtonEl;
  if (confirmButton.state) {
    okButtonEl = (
      <div ref={okButton} className='btn-wrapper'>
        <BtnOpt type={TYPE_BUTTON.OK} />
      </div>
    );
  }

  return (
    <div className='content-survey-form'>
      {okButtonEl}
      <div className='survey-wrapper'>
        <HeaderForm />
        <div className='form-builder'>
          {renderQuestion}
          {questionEl}
          <NewQuestion formatHandler={typeHandler} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    question: state[SURVEY_FORM_BUILDER][SURVEY_FORM_QUESTION],
  };
};

const ContentSurveyFormJoinRedux = connect(mapStateToProps)(ContentSurveyForm);

export default ContentSurveyFormJoinRedux;
