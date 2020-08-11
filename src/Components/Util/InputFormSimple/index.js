import React, { useState, useContext, useReducer, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { TYPE_QUESTION } from '../../../util/varTypes'

import './style.scss'

import Icon from '@iconify/react';
import ArrowDown from '@iconify/icons-mdi/dots-horizontal'
import FormBuilderContext from '../../../Store/Context/formBuilder';

const InputFormSimple = ({ typeQuestion }) => {

    const [inputBox, setInputBox] = useState('')
    const { questionHandler } = useContext(FormBuilderContext)

    let initialState = {
        _id: uuid(),
        type: typeQuestion,
        title: ""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case TYPE_QUESTION.SHORT:
                return {
                    ...state,
                    title: action.title
                }
            case TYPE_QUESTION.MULTIPLE:
                return {
                    ...state,
                    title: action.title,
                    choices: [],
                };
            default:
                return state
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        if (state.title.length > 0) questionHandler([state])
    }, [state])

    const test = ({ keyCode }) => {
        if (keyCode === 13) {
            dispatch({
                type: typeQuestion,
                title: inputBox
            })
            setInputBox('')
        }
    }

    const inputHandler = (e) => {
        setInputBox(e.target.value)
    }

    return (
        <div className="input-form-wrapper">
            <input onKeyDown={test} value={inputBox} onChange={inputHandler} placeholder="Please write your question" type="text" />
            <div className="icon">
                <Icon icon={ArrowDown} />
            </div>
        </div>
    )
}

export default InputFormSimple;