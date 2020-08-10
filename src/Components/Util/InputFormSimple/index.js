import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';

import './style.scss'

import Icon from '@iconify/react';
import ArrowDown from '@iconify/icons-mdi/dots-horizontal'
import FormBuilderContext from '../../../Store/Context/formBuilder';

const InputFormSimple = ({ typeQuestion }) => {

    const [inputBox, setInputBox] = useState('')
    const { questionHandler } = useContext(FormBuilderContext)

    const TYPEQUESTION = {
        SHORT: 'SHORT',
        LONG: 'LONG',
        MULTIPLE: 'MULTIPLE',
        CHECKBOX: 'CHECKBOX'
    }

    const test = ({ keyCode }) => {
        let temp =
            [
                {
                    id: uuid(),
                    type: typeQuestion,
                    title: inputBox
                }
            ]

        if (typeQuestion == TYPEQUESTION.MULTIPLE) {
            temp[0] = {
                ...temp[0],
                choices: [],
            }
        }


        if (keyCode === 13) {
            questionHandler(temp)
        }
    }

    return (
        <div className="input-form-wrapper">
            <input onKeyDown={test} onChange={(e) => setInputBox(e.target.value)} placeholder="Please write your question" type="text" />
            <div className="icon">
                <Icon icon={ArrowDown} />
            </div>
        </div>
    )
}

export default InputFormSimple;