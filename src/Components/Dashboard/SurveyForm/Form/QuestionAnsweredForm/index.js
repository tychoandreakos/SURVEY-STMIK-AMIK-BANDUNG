import React, { useState, useContext, Suspense, lazy, useEffect } from 'react';
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid';

import Icon from '@iconify/react';
import ChevronDown from '@iconify/icons-mdi/chevron-down';
import TextArea from 'react-expanding-textarea';
import DropdownQuestion from './DropdownQuestion';

import DropdownContext from '../../../../../Store/Context/dropdownAlternate';
import FormBuilderContext from '../../../../../Store/Context/formBuilder';

import { TYPE_QUESTION } from '../../../../../util/varTypes'
import { saveMultichoiceState, saveSingleTextBoxState, editSurveyForm } from '../../../../../Store/redux/action';

import './style.scss';

/**
 * Import the form builder component
 * using the react Lazy & Suspense
 */
const MultiChoiceV2 = lazy(() => import('./MultiChoiceWrapper'));
const StarRating = lazy(() => import('../../Form/StarRating'));
const TextForm = lazy(() => import('../../Form/Text'));
const DateTimeForm = lazy(() => import('../../Form/DateTime'));
const CheckBoxes = lazy(() => import('../../Form/CheckBoxes'));
const DropdownForm = lazy(() => import('../../Form/Dropdown'));
const MultipleTextBox = lazy(() => import('../../Form/MultipeTextBox'));
const RankingForm = lazy(() => import('../../Form/Ranking'));
const CommentBox = lazy(() => import('../../Form/CommentBox'));

const QuestionAnsweredForm = (props) => {
    const [dropdown, setDropdown] = useState(false);
    const [questionInput, setQuestionInput] = useState('');
    const { numbered, onSubmitMultiple, onSubmitSingleTextBox, onEdit } = props;

    const { elementDropdown } = useContext(DropdownContext);
    const { typeQuestion, typeHandler, formBuilderHidden, edited, editedHandler, resultData } = useContext(FormBuilderContext);
    const titleDropdown = elementDropdown ? elementDropdown.find(item => {
        if (typeQuestion && item.type === typeQuestion) return true;
        if (resultData && item.type === resultData.type) return true;
        return false;
    }) : "Loading ..."

    useEffect(() => {
        if (edited) {
            setQuestionInput(capitalize(resultData.title))
        }
    }, [edited])

    let answeredForm;
    let actionButtonComponent;

    switch (typeQuestion) {
        case TYPE_QUESTION.MULTIPLE:
            answeredForm = <MultiChoiceV2 />
            break;
        case TYPE_QUESTION.STAR:
            answeredForm = <StarRating />
            break;
        case TYPE_QUESTION.TEXTFORMAT:
            answeredForm = <TextForm />
            break;
        case TYPE_QUESTION.DATEANDTIME:
            answeredForm = <DateTimeForm />
            break;
        case TYPE_QUESTION.CHECKBOX:
            answeredForm = <CheckBoxes />
            break;
        case TYPE_QUESTION.DROPDOWNFORMAT:
            answeredForm = <DropdownForm />
            break;
        case TYPE_QUESTION.MULTIPLETEXTBOX:
            answeredForm = <MultipleTextBox />
            break;
        case TYPE_QUESTION.RANKING:
            answeredForm = <RankingForm />
            break;
        case TYPE_QUESTION.COMMENTBOX:
            answeredForm = <CommentBox />
            break;
        default:
            break;
    }

    if (typeQuestion !== TYPE_QUESTION.SHORT && resultData.type !== TYPE_QUESTION.SHORT) {
        actionButtonComponent = <div className="action-form-builder">
            <button onClick={onCancelHandler} className="btn btn-cancel">cancel</button>
            <button onClick={onSubmitHandler} className="btn btn-save">save</button>
        </div>
    }


    const dropdownHandler = () => {
        setDropdown(!dropdown);
    }

    const questionInputChangeHandler = (e) => {
        setQuestionInput(e.target.value);
    }


    const questionInputHandler = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
            onSubmitHandler();
        }
    }

    function onSubmitHandler() {
        if (!edited) {
            if (typeQuestion === TYPE_QUESTION.SHORT) {
                onSubmitSingleTextBox({
                    _id: uuid(),
                    type: typeQuestion,
                    title: questionInput.toLowerCase()
                })
            }

            if (typeQuestion === TYPE_QUESTION.MULTIPLE) {
                onSubmitMultiple({
                    _id: uuid(),
                    type: typeQuestion,
                    title: questionInput.toLowerCase(),
                });
            }

            formBuilderHidden();
            setQuestionInput('')
            typeHandler('')
        } else {
            onEdit({
                _id: resultData._id,
                type: resultData.type,
                title: questionInput.toLowerCase(),
            })
            editedHandler();
        }
    }

    function capitalize(val) {
        return val.charAt(0).toUpperCase() + val.slice(1, val.length);
    }

    function onCancelHandler() {
        console.log('its working');
    }

    const placeholder = "Please type a question ..."
    return (
        <div className="question-answered-form">
            <div className="input-answered-form">
                <div className="numbered">{numbered ? numbered : `q${resultData.index}`}</div>
                <div className="input">
                    <TextArea
                        value={questionInput}
                        placeholder={placeholder}
                        onChange={questionInputChangeHandler}
                        onKeyPress={questionInputHandler}
                    />
                </div>
                <div onClick={dropdownHandler} className="dropdown-choice">
                    <span className="title-dropdown">{titleDropdown.title}</span>
                    <div className="icon">
                        <Icon icon={ChevronDown} />
                    </div>
                    {dropdown ? <DropdownQuestion /> : undefined}
                </div>
                <div className="help"></div>
            </div>
            <div className="form-builder-question">
                <Suspense fallback="loading ....">
                    {answeredForm}
                    {actionButtonComponent}
                </Suspense>
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        onSubmitMultiple: (title) => dispatch(saveMultichoiceState(title)),
        onSubmitSingleTextBox: (title) => dispatch(saveSingleTextBoxState(title)),
        onEdit: (item) => dispatch(editSurveyForm(item))
    }
}

const QuestionAnsweredFormJoinRedux = connect(null, mapDispatchToProps)(QuestionAnsweredForm);

export default QuestionAnsweredFormJoinRedux;