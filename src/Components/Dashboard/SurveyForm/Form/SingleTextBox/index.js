import React from 'react';

import Input from '../../../../Util/InputFormSimple'

import './style.scss';

const SingleTextBox = ({ title }) => {
    return (
        <div className="single-text-box">
            <div className="text-box-wrapper">
                <span>{ title }</span>
                <Input />
            </div>
        </div>
    )
}

export default SingleTextBox