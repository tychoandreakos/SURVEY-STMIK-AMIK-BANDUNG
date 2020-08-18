import React from 'react';

import TextArea from 'react-expanding-textarea';

import './style.scss';

const MultiChoiceV2 = () => {

    const placeholder = "Enter an answer choice";

    return (
        <div className="multi-choice-v2">
            <div className="choice"></div>
            <div className="input">
                <TextArea placeholder={placeholder} />
            </div>
            <div className="action">
                <div className="btn-add"></div>
                <div className="btn-remove"></div>
            </div>
        </div>
    )
}

export default MultiChoiceV2;