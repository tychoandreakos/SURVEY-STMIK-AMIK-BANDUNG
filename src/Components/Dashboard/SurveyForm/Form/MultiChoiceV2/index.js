import React, { useState } from 'react';

import TextArea from 'react-expanding-textarea';
import Icon from '@iconify/react';
import plus from '@iconify/icons-mdi/plus';
import minus from '@iconify/icons-mdi/minus';

import { v4 as uuid } from 'uuid';

import './style.scss';

const MultiChoiceV2 = (props) => {

    const { inputStateHandler, addNewMultiChoice, _id, removeNewMultiChoise } = props;
    const [value, setValue] = useState('')
    const [valueCache, setValueCache] = useState({});
    const [lockSubmit, setLockSubmit] = useState(true);


    const placeholder = "Enter an answer choice";

    const valueHandler = (e) => {
        setValue(e.target.value);
        if (lockSubmit) setLockSubmit(false)
    }

    const onSubmit = () => {
        if (!lockSubmit) {
            let data;
            if (valueCache.hasOwnProperty('_id')) {
                data = {
                    _id: valueCache._id,
                    title: value,
                    selected: valueCache.selected,
                }
                inputStateHandler(data, _id)
            } else {
                data = {
                    _id: uuid(),
                    title: value,
                    selected: false,
                }
                setValueCache(data)
            }

            inputStateHandler(data, _id)
            setLockSubmit(true)
        }
    }

    const preventDefaultHandler = (e) => {
        if (e.charCode === 13) e.preventDefault();
    }

    const addNewMulti = () => {
        addNewMultiChoice(_id);
    }

    const removeNewMulti = () => {
        removeNewMultiChoise(_id);
    }

    return (
        <div className="multi-choice-v2">
            <div className="choice"></div>
            <div className="input">
                <TextArea onKeyPress={preventDefaultHandler} onBlur={onSubmit} value={value} onChange={valueHandler} placeholder={placeholder} />
            </div>
            <div className="action">
                <button onClick={addNewMulti} className="btn btn-add">
                    <Icon icon={plus} />
                </button>
                <button onClick={removeNewMulti} className="btn btn-remove">
                    <Icon icon={minus} />
                </button>
            </div>
        </div>
    )
}

export default MultiChoiceV2;