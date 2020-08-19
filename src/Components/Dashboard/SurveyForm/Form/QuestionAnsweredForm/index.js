import React, { useState, useContext, useReducer, useEffect } from 'react';

import Icon from '@iconify/react';
import ChevronDown from '@iconify/icons-mdi/chevron-down';
import TextArea from 'react-expanding-textarea';
import DropdownQuestion from './DropdownQuestion';

// form builder
import MultiChoiceV2 from '../../Form/MultiChoiceV2';

import DropdownContext from '../../../../../Store/Context/dropdownAlternate';
import FormBuilderContext from '../../../../../Store/Context/formBuilder';

import { v4 as uuid } from 'uuid';

import { TYPE_QUESTION } from '../../../../../util/varTypes'

import './style.scss';

const QuestionAnsweredForm = (props) => {
    const [dropdown, setDropdown] = useState(false);
    const [questionInput, setQuestionInput] = useState('');
    const [inputState, setInputState] = useState([{}])
    const [multiChoiceId, setMultiChoiceId] = useState([])

    const { numbered } = props;

    const { elementDropdown } = useContext(DropdownContext);
    const { typeQuestion, typeHandler, questionHandler, formBuilderHidden } = useContext(FormBuilderContext);

    const titleDropdown = elementDropdown.find(item => item.type === typeQuestion) ?? "Loading ..."

    let initialState = {
        type: typeQuestion,
        title: ""
    }

    useEffect(() => {
        setMultiChoiceId([
            ...multiChoiceId,
            uuid()
        ])
    }, [])

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

    const inputStateHandler = (val, _id) => {
        setInputState([{
            ...inputState[0],
            [_id]: {
                ...val
            }
        }])
    }

    const inputStateHandlerEdit = (val, _id) => {
        setInputState([
            ...inputState,
            {
                [_id]: val
            }
        ])
    }

    const questionInputChangeHandler = (e) => {
        setQuestionInput(e.target.value);
    }

    const addNewMultiChoice = (_id) => {
        const index = multiChoiceId.findIndex(id => id === _id)
        const newArray = Array.from(multiChoiceId)
        const start = index + 1;
        if (newArray[start] !== undefined) {
            for (let i = newArray.length; i > index; i--) newArray[i] = newArray[i - 1]
            newArray[start] = uuid()
        } else {
            newArray.push(uuid())
        }

        setMultiChoiceId(newArray);
    }

    const removeNewMultiChoise = (_id) => {
        if (multiChoiceId.length > 1) {
            const newArr = multiChoiceId.filter(id => {
                if (id !== _id) return id;
            });
            setMultiChoiceId(newArr);
        }
    }

    const onSubmit = () => {
        const [inputObj] = inputState;
        let newArr = []
        for (const key of multiChoiceId) {
            if (inputObj[key] !== undefined) {
                newArr.push(inputObj[key])
            }
        }
        const result = [newArr].reverse();
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

    const multiChoiceEL = multiChoiceId.map(id => (
        <MultiChoiceV2
            key={id}
            _id={id}
            removeNewMultiChoise={removeNewMultiChoise}
            addNewMultiChoice={addNewMultiChoice}
            inputStateHandlerEdit={inputStateHandlerEdit}
            inputStateHandler={inputStateHandler}
        />
    ))

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
                {multiChoiceEL}
                <div className="action-form-builder">
                    <button className="btn btn-cancel">cancel</button>
                    <button onClick={onSubmit} className="btn btn-save">save</button>
                </div>
            </div>
        </div>
    )
}

export default QuestionAnsweredForm;