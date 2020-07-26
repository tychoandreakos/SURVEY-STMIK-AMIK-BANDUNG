import React from 'react';

import './style.scss'

import Icon from '@iconify/react';
import ArrowDown from '@iconify/icons-mdi/dots-horizontal'

const InputFormSimple = () => {
    return (
        <div className="input-form-wrapper">
            <input placeholder="Please write your question" type="text" />
            <div className="icon">
                <Icon icon={ArrowDown} />
            </div>
        </div>
    )
}

export default InputFormSimple;