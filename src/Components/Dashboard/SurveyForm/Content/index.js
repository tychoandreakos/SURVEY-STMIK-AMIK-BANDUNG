import React, { useState, useEffect, useCallback, useRef } from "react";
import { connect } from "react-redux";
import {
  TYPE_BUTTON,
  SURVEY_FORM_BUILDER,
  SURVEY_FORM_QUESTION,
  SURVEY_TYPE_QUESTION,
  SURVEY_CAN_EDIT,
} from "../../../../util/varTypes";

import { gsap } from "gsap";

// formBuilder
import HeaderForm from "../Form/Header";
import Result from "../Result";
import NewQuestion from "../Form/NewQuestionFirst";
import QuestionAnsweredForm from "../Form/QuestionAnsweredForm";

import Dialog from "../../Dialog";
import BtnOpt from "../BtnOpt";
import FormBuilderContext from "../../../../Store/Context/formBuilder";
import { setTypeQuestion, storeSurvey } from "../../../../Store/redux/action";

import "./style.scss";

const ContentSurveyForm = (props) => {
  const okButton = useRef({});
  const { question, typeQuestion, canEdit, storeSurvey, surveyForm } = props;

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
  const [dialog, setDialog] = useState(false);
  const [confirmButton, setConfirmButton] = useState({
    state: false,
    anim: false,
  });

  const formBuilderHidden = () => {
    setFormBuilder(false);
  };

  const dialogHandler = () => {
    setDialog(!dialog);
  };

  const onSubmitHandler = () => {
    if (surveyForm) {
      storeSurvey(surveyForm);
    }
  };

  const memoizeQuestionCallback = useCallback(() => {
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
  }, [question, confirmButton.anim]);

  const memoizeAnimCallback = useCallback(() => {
    const { anim, state } = confirmButton;
    if (anim) {
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

    if (!anim && state) {
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

  const memoizedCallback = useCallback(() => {
    if (!initial) {
      setInitial(true);
    }

    if (initial && typeQuestion && typeQuestion.length > 1 && !canEdit) {
      setFormBuilder(true);
    }
  }, [initial, typeQuestion, canEdit]);

  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  useEffect(() => {
    memoizeAnimCallback();
  }, [memoizeAnimCallback]);

  useEffect(() => {
    memoizeQuestionCallback();
  }, [memoizeQuestionCallback]);

  let questionEl;
  if (formBuilder) {
    questionEl = (
      <FormBuilderContext.Provider value={{ formBuilderHidden }}>
        <QuestionAnsweredForm
          numbered={`q${question ? question.length + 1 : 1}`}
        />
      </FormBuilderContext.Provider>
    );
  }

  let renderDialog;
  if (dialog) {
    renderDialog = (
      <Dialog
        onCancelHandler={dialogHandler}
        onConfirmHandler={onSubmitHandler}
        title='Yes, Save'
      />
    );
  }

  let okButtonEl;
  if (confirmButton.state) {
    okButtonEl = (
      <div ref={okButton} className='btn-wrapper'>
        <BtnOpt onClick={dialogHandler} type={TYPE_BUTTON.OK} />
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
          <NewQuestion />
        </div>
      </div>
      {renderDialog}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    question: state[SURVEY_FORM_BUILDER][SURVEY_FORM_QUESTION],
    typeQuestion: state[SURVEY_TYPE_QUESTION],
    canEdit: state[SURVEY_CAN_EDIT],
    surveyForm: state[SURVEY_FORM_BUILDER],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setTypeQuestion: (item) => dispatch(setTypeQuestion(item)),
    storeSurvey: (item) => dispatch(storeSurvey(item)),
  };
};

const ContentSurveyFormJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentSurveyForm);

export default ContentSurveyFormJoinRedux;
