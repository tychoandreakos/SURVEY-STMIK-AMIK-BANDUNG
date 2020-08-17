import React from 'react';

import Icon from '@iconify/react';
import ChevronDown from '@iconify/icons-mdi/chevron-down';
import TextArea from 'react-expanding-textarea';

import './style.scss';

const QuestionAnsweredForm = () => {
    const placeholder = "Please type a question ..."
    return (
        <div className="question-answered-form">
            <div className="numbered">Q1</div>
            <div className="input">
                <TextArea placeholder={placeholder} />
            </div>
            <div className="dropdown-choice">
                <span>Multiple Choice</span>
                <div className="icon">
                    <Icon icon={ChevronDown} />
                </div>
            </div>
            <div className="help"></div>
        </div>
    )
}

export default QuestionAnsweredForm;