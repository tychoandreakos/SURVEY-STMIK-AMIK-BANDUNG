import React from 'react';

import Button from './Button';

import './style.scss';

const NewQuestionFirst = () => {
    return (
        <div className="new-question-first">
            <Button title="new question" />
            <span className="desc">or <a href="/">Copy and paste questions</a></span>
        </div>
    )
}

export default NewQuestionFirst;