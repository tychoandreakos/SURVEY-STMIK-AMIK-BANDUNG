import React from 'react';

import TextArea from 'react-expanding-textarea';
import Icon from '@iconify/react';
import plus from '@iconify/icons-mdi/plus';
import minus from '@iconify/icons-mdi/minus';


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
                <button className="btn btn-add">
                    <Icon icon={plus} />
                </button>
                <button className="btn btn-remove">
                    <Icon icon={minus} />
                </button>
            </div>
        </div>
    )
}

export default MultiChoiceV2;