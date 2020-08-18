import React, { useState } from 'react';

import Icon from '@iconify/react';
import ChevronDown from '@iconify/icons-mdi/chevron-down';
import TextArea from 'react-expanding-textarea';
import DropdownQuestion from './DropdownQuestion';

import './style.scss';

const QuestionAnsweredForm = () => {
    const [dropdown, setDropdown] = useState(false);

    const dropdonHandler = () => {
        setDropdown(!dropdown);
    }

    const placeholder = "Please type a question ..."
    return (
        <div className="question-answered-form">
            <div className="numbered">Q1</div>
            <div className="input">
                <TextArea placeholder={placeholder} />
            </div>
            <div onClick={dropdonHandler} className="dropdown-choice">
                <span>Multiple Choice</span>
                <div className="icon">
                    <Icon icon={ChevronDown} />
                </div>
                {dropdown ? <DropdownQuestion /> : undefined}
            </div>
            <div className="help"></div>
        </div>
    )
}

export default QuestionAnsweredForm;