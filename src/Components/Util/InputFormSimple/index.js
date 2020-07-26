import React, { useState, useContext } from 'react';

import './style.scss'

import Icon from '@iconify/react';
import ArrowDown from '@iconify/icons-mdi/dots-horizontal'
import FormBuilderContext from '../../../Store/Context/formBuilder';

const InputFormSimple = ({ typeQuestion }) => {

    const [inputBox, setInputBox] = useState('')
    const { questionHandler } = useContext(FormBuilderContext)

    const test = ({ keyCode }) => {
        if (keyCode === 13) {
            questionHandler({
                type: typeQuestion,
                title: inputBox
            })
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