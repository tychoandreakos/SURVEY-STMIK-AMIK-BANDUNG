import React, {
  useState,
  useContext,
  Suspense,
  lazy,
  useEffect,
  useCallback,
} from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";

import Icon from "@iconify/react";
import ChevronDown from "@iconify/icons-mdi/chevron-down";
import TextArea from "react-expanding-textarea";
import DropdownQuestion from "./DropdownQuestion";

import DropdownContext from "../../../../../Store/Context/dropdownAlternate";
import FormBuilderContext from "../../../../../Store/Context/formBuilder";

import {
  TYPE_QUESTION,
  RESULT_ACTION,
  SURVEY_CAN_EDIT,
  SURVEY_TYPE_QUESTION,
  SURVEY_EDIT_TYPE_QUESTION,
} from "../../../../../util/varTypes";
import {
  saveMultichoiceState,
  saveSingleTextBoxState,
  editSurveyForm,
  editMultiChoiceForm,
  setTypeQuestion,
  setCanEdit,
  setTypeEditQuestion,
} from "../../../../../Store/redux/action";

import "./style.scss";

/**
 * Import the form builder component
 * using the react Lazy & Suspense
 */
const MultiChoiceV2 = lazy(() => import("./MultiChoiceWrapper"));
const StarRating = lazy(() => import("../../Form/StarRating"));
const TextForm = lazy(() => import("../../Form/Text"));
const DateTimeForm = lazy(() => import("../../Form/DateTime"));
const CheckBoxes = lazy(() => import("../../Form/CheckBoxes"));
const DropdownForm = lazy(() => import("../../Form/Dropdown"));
const MultipleTextBox = lazy(() => import("../../Form/MultipeTextBox"));
const RankingForm = lazy(() => import("../../Form/Ranking"));
const CommentBox = lazy(() => import("../../Form/CommentBox"));

const QuestionAnsweredForm = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const [questionInput, setQuestionInput] = useState("");
  const {
    numbered,
    onSubmitMultiple,
    onSubmitSingleTextBox,
    onEdit,
    onEditHandler,
    typeQuestion,
    setTypeQuestion,
    editTypeQuestion,
    onEditTypeQuestion,
  } = props;

  const { elementDropdown } = useContext(DropdownContext);
  const {
    formBuilderHidden,
    action,
    actionHandler,
    resultData = [],
  } = useContext(FormBuilderContext);

  const titleDropdown = elementDropdown
    ? elementDropdown.find((item) => {
        if (typeQuestion && item.type === typeQuestion) return true;
        if (resultData && item.type === resultData.type) return true;
        return false;
      })
    : "Loading ...";

  const resultDataCallback = useCallback(() => {
    if (resultData && action) {
      setQuestionInput(capitalize(resultData.title));
      onEditTypeQuestion(resultData.type);
    }
  }, [resultData, action, onEditTypeQuestion]);

  useEffect(() => {
    resultDataCallback();
  }, [resultDataCallback]);

  let answeredForm;
  let actionButtonComponent;
  const witchType = checkItemExist(typeQuestion)
    ? typeQuestion
    : editTypeQuestion;

  switch (witchType) {
    case TYPE_QUESTION.MULTIPLE:
      answeredForm = <MultiChoiceV2 editResult={resultData} />;
      break;
    case TYPE_QUESTION.STAR:
      answeredForm = <StarRating />;
      break;
    case TYPE_QUESTION.TEXTFORMAT:
      answeredForm = <TextForm />;
      break;
    case TYPE_QUESTION.DATEANDTIME:
      answeredForm = <DateTimeForm />;
      break;
    case TYPE_QUESTION.CHECKBOX:
      answeredForm = <CheckBoxes />;
      break;
    case TYPE_QUESTION.DROPDOWNFORMAT:
      answeredForm = <DropdownForm />;
      break;
    case TYPE_QUESTION.MULTIPLETEXTBOX:
      answeredForm = <MultipleTextBox />;
      break;
    case TYPE_QUESTION.RANKING:
      answeredForm = <RankingForm />;
      break;
    case TYPE_QUESTION.COMMENTBOX:
      answeredForm = <CommentBox />;
      break;
    default:
      break;
  }

  if (
    typeQuestion !== TYPE_QUESTION.SHORT &&
    editTypeQuestion !== TYPE_QUESTION.SHORT
  ) {
    actionButtonComponent = (
      <div className='action-form-builder'>
        <button onClick={onCancelHandler} className='btn btn-cancel'>
          cancel
        </button>
        <button onClick={onSubmitHandler} className='btn btn-save'>
          save
        </button>
      </div>
    );
  }

  const dropdownHandler = () => {
    setDropdown(!dropdown);
  };

  const questionInputChangeHandler = (e) => {
    setQuestionInput(e.target.value);
  };

  const questionInputHandler = (e) => {
    if (e.charCode === 13) {
      e.preventDefault();
      onSubmitHandler();
    }
  };

  function onSubmitHandler() {
    switch (action) {
      case RESULT_ACTION.COPY:
        break;
      case RESULT_ACTION.EDIT:
        onEdit({
          _id: resultData._id,
          type: editTypeQuestion,
          title: questionInput.toLowerCase(),
        });
        actionHandler();
        onEditHandler();
        onEditTypeQuestion("");
        break;
      default:
        if (typeQuestion === TYPE_QUESTION.SHORT) {
          onSubmitSingleTextBox({
            _id: uuid(),
            type: typeQuestion,
            title: questionInput.toLowerCase(),
          });
        }

        if (typeQuestion === TYPE_QUESTION.MULTIPLE) {
          onSubmitMultiple({
            _id: uuid(),
            type: typeQuestion,
            title: questionInput.toLowerCase(),
          });
        }

        formBuilderHidden();
        break;
    }

    setQuestionInput("");
    setTypeQuestion("");
  }

  function capitalize(val) {
    return val.charAt(0).toUpperCase() + val.slice(1, val.length);
  }

  function checkItemExist(val) {
    return val && val.length > 0;
  }

  function onCancelHandler() {
    if (resultData && resultData.index) {
      actionHandler();
    } else {
      formBuilderHidden();
    }
    setQuestionInput("");
    setTypeQuestion("");
  }

  const placeholder = "Please type a question ...";
  return (
    <div className='question-answered-form'>
      <div className='input-answered-form'>
        <div className='numbered'>
          {numbered ? numbered : `q${resultData.index}`}
        </div>
        <div className='input'>
          <TextArea
            value={questionInput}
            placeholder={placeholder}
            onChange={questionInputChangeHandler}
            onKeyPress={questionInputHandler}
          />
        </div>
        <div onClick={dropdownHandler} className='dropdown-choice'>
          <span className='title-dropdown'>{titleDropdown.title}</span>
          <div className='icon'>
            <Icon icon={ChevronDown} />
          </div>
          {dropdown ? <DropdownQuestion /> : undefined}
        </div>
        <div className='help'></div>
      </div>
      <div className='form-builder-question'>
        <Suspense fallback='loading ....'>
          {answeredForm}
          {actionButtonComponent}
        </Suspense>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    canEdit: state[SURVEY_CAN_EDIT],
    typeQuestion: state[SURVEY_TYPE_QUESTION],
    editTypeQuestion: state[SURVEY_EDIT_TYPE_QUESTION],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmitMultiple: (title) => dispatch(saveMultichoiceState(title)),
    onSubmitSingleTextBox: (title) => dispatch(saveSingleTextBoxState(title)),
    onEdit: (item) => dispatch(editSurveyForm(item)),
    editMulti: (item) => dispatch(editMultiChoiceForm(item)),
    setTypeQuestion: (item) => dispatch(setTypeQuestion(item)),
    onEditHandler: () => dispatch(setCanEdit()),
    onEditTypeQuestion: (item) => dispatch(setTypeEditQuestion(item)),
  };
};

const QuestionAnsweredFormJoinRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionAnsweredForm);

export default QuestionAnsweredFormJoinRedux;
