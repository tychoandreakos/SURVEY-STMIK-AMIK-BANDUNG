import React, { useState, useContext, useReducer, useEffect } from 'react';
import { connect } from 'react-redux'

import Icon from '@iconify/react';
import ChevronDown from '@iconify/icons-mdi/chevron-down';
import TextArea from 'react-expanding-textarea';
import DropdownQuestion from './DropdownQuestion';

// form builder
import MultiChoiceV2 from './MultiChoiceWrapper';

import DropdownContext from '../../../../../Store/Context/dropdownAlternate';
import FormBuilderContext from '../../../../../Store/Context/formBuilder';

import { TYPE_QUESTION } from '../../../../../util/varTypes'
import { saveMultichoiceState } from '../../../../../Store/redux/action';

import './style.scss';

const QuestionAnsweredForm = (props) => {
    const [dropdown, setDropdown] = useState(false);
    const [questionInput, setQuestionInput] = useState('');
    const { numbered, onSubmit } = props;

    const { elementDropdown } = useContext(DropdownContext);
    const { typeQuestion, typeHandler, questionHandler, formBuilderHidden } = useContext(FormBuilderContext);

    const titleDropdown = elementDropdown.find(item => item.type === typeQuestion) ?? "Loading ..."

    let initialState = {
        type: typeQuestion,
        title: ""
    }


    const reducer = (state, action) => {
        switch (action.type) {
            case TYPE_QUESTION.SHORT:
                return {
                    ...state,
                    ...action
                }
            case TYPE_QUESTION.MULTIPLE:
                return {
                    ...state,
                    ...action,
                    choices: [],
                };
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        if (state.title.length > 0) {
            questionHandler(state)
            formBuilderHidden()
            return;
        }

        return undefined
    }, [state])


    const dropdownHandler = () => {
        setDropdown(!dropdown);
    }

    const questionInputChangeHandler = (e) => {
        setQuestionInput(e.target.value);
    }


    const questionInputHandler = (e) => {
        if (e.charCode === 13) {
            e.preventDefault();
            dispatch({
                type: typeQuestion,
                title: questionInput
            })
            setQuestionInput('')
            typeHandler('')
        }
    }

    const onSubmitHandler = () => {
        onSubmit();
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
                <MultiChoiceV2 />
                <div className="action-form-builder">
                    <button className="btn btn-cancel">cancel</button>
                    <button onClick={onSubmitHandler} className="btn btn-save">save</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: () => dispatch(saveMultichoiceState())
    }
}

const QuestionAnsweredFormJoinRedux = connect(null, mapDispatchToProps)(QuestionAnsweredForm);

export default QuestionAnsweredFormJoinRedux;