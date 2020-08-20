import React, { useState, useContext, useReducer, useEffect } from 'react';
import { connect } from 'react-redux'
import { v4 as uuid } from 'uuid';

import Icon from '@iconify/react';
import ChevronDown from '@iconify/icons-mdi/chevron-down';
import TextArea from 'react-expanding-textarea';
import DropdownQuestion from './DropdownQuestion';

// form builder
import MultiChoiceV2 from './MultiChoiceWrapper';

import DropdownContext from '../../../../../Store/Context/dropdownAlternate';
import FormBuilderContext from '../../../../../Store/Context/formBuilder';

import { TYPE_QUESTION } from '../../../../../util/varTypes'
import { saveMultichoiceState, saveSingleTextBoxState } from '../../../../../Store/redux/action';

import './style.scss';

const QuestionAnsweredForm = (props) => {
    const [dropdown, setDropdown] = useState(false);
    const [questionInput, setQuestionInput] = useState('');
    const { numbered, onSubmitMultiple, onSubmitSingleTextBox } = props;

    const { elementDropdown } = useContext(DropdownContext);
    const { typeQuestion, typeHandler, formBuilderHidden } = useContext(FormBuilderContext);

    const titleDropdown = elementDropdown.find(item => item.type === typeQuestion) ?? "Loading ..."

    let answeredForm;
    let actionButtonComponent;

    if (typeQuestion === TYPE_QUESTION.MULTIPLE) {
        answeredForm = <MultiChoiceV2 />
    }

    if (typeQuestion !== TYPE_QUESTION.SHORT) {
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
        if (typeQuestion === TYPE_QUESTION.SHORT) {
            onSubmitSingleTextBox({
                _id: uuid(),
                type: typeQuestion,
                title: questionInput.toLocaleLowerCase()
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
    }

    function onCancelHandler() {
        console.log('its working');
    }

    const placeholder = "Please type a question ..."
    return (
        <div className="question-answered-form">
            <div className="input-answered-form">
                <div className="numbered">{numbered}</div>
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
                {answeredForm}
                {actionButtonComponent}
            </div>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
    return {
        onSubmitMultiple: (title) => dispatch(saveMultichoiceState(title)),
        onSubmitSingleTextBox: (title) => dispatch(saveSingleTextBoxState(title))
    }
}

const QuestionAnsweredFormJoinRedux = connect(null, mapDispatchToProps)(QuestionAnsweredForm);

export default QuestionAnsweredFormJoinRedux;