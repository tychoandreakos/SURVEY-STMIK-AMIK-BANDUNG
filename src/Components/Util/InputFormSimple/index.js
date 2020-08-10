import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { TYPE_QUESTION } from '../../../util/varTypes'

import './style.scss'

import Icon from '@iconify/react';
import ArrowDown from '@iconify/icons-mdi/dots-horizontal'
import FormBuilderContext from '../../../Store/Context/formBuilder';

const InputFormSimple = ({ typeQuestion }) => {

    const [inputBox, setInputBox] = useState('')
    const { questionHandler } = useContext(FormBuilderContext)

    const test = ({ keyCode }) => {
        let temp =
            [
                {
                    id: uuid(),
                    type: typeQuestion,
                    title: inputBox
                }
            ]

        if (typeQuestion == TYPE_QUESTION.MULTIPLE) {
            temp[0] = {
                ...temp[0],
                choices: [],
            }
        }


        if (keyCode === 13) {
            questionHandler(temp)
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