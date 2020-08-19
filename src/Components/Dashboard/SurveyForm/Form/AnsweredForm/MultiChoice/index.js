import React from 'react';

import './style.scss';

const MultiChoiceAnsweredForm = (props) => {

    const { title } = props;

    return (
        <div className="multi-choice-answered-form">
            <div className="bullet"></div>
            <span>{title}</span>
        </div>
    )
}

export default MultiChoiceAnsweredForm;