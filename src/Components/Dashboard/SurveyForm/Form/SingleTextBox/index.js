import React from 'react';

import Input from '../../../../Util/InputFormSimple'

import './style.scss';

const SingleTextBox = ({ title, typeQuestion, typeHandler }) => {
    return (
        <div className="single-text-box">
            <div className="text-box-wrapper">
                <span>{title}</span>
                <Input typeHandler={typeHandler} typeQuestion={typeQuestion} />
            </div>
        </div>
    )
}

export default SingleTextBox